import * as mongoose from "mongoose"
import User from "./user.interface"

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    phoneNumber: Number,
    birthDate: Date,
})

const userModel = mongoose.model<User & mongoose.Document>("User", userSchema)

export default userModel
