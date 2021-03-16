import * as mongoose from "mongoose"
import User from "./User.interface"

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  surname: String,
  phoneNumber: String,
  password: String,
  dateOfBirth: String
})

const userModel = mongoose.model<User & mongoose.Document>("UserModel", userSchema)
export default userModel
