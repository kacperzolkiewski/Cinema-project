import { Request } from "express"
import User from "../models/user/User.interface"

interface RequestWithUser extends Request {
  user: User
}

export default RequestWithUser
