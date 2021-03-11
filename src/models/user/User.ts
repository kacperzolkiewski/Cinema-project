import mongoose from "mongoose"
import IUser from "./User.model"

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
    lowercase: true,
    unique: true,
    required: [true, "Email required"],
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
