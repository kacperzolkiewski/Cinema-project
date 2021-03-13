import { NextFunction, Response } from "express"
import * as jwt from "jsonwebtoken"
import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException"
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException"
import RequestWithUser from "../interfaces/RequestWithUser.interface"
import DataInToken from "../interfaces/dataInToken"
import userModel from "../models/user/User.model"

async function authMiddleware(request: RequestWithUser, response: Response, next: NextFunction): Promise<void> {
  const cookies = request.cookies
  if (cookies && cookies.Authorization) {
    const secret = process.env.JWT_SECRET || ""
    try {
      const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataInToken
      const id = verificationResponse._id
      const user = await userModel.findById(id)
      if (user) {
        request.user = user
        next()
      } else {
        throw new WrongAuthenticationTokenException()
      }
    } catch (error) {
      throw new WrongAuthenticationTokenException()
    }
  } else {
    throw new AuthenticationTokenMissingException()
  }
}

export default authMiddleware
