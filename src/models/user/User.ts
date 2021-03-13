import { isEmail } from "class-validator"
import mongoose from "mongoose"
import IUser from "./User.interface"

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email required"],
    validate: [isEmail, "Please enter a valid email address"],
    match: [/\S+@\S+\.\S+/, "is invalid"]
  },
  password: {
    required: true,
    type: String
  },
  dateOfBirth: {
    required: true,
    type: String
  }
})

const UserModel = mongoose.model<IUser & mongoose.Document>("UserModel", UserSchema)

export default UserModel
