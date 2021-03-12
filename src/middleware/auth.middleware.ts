import { NextFunction, Response } from "express"
import * as jwt from "jsonwebtoken"
import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException"
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException"
import DataInToken from "../interfaces/dataInToken"
import RequestWithUser from "../interfaces/requestWithUser.interface"
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
        next(new WrongAuthenticationTokenException())
      }
    } catch (error) {
      next(new WrongAuthenticationTokenException())
    }
  } else {
    next(new AuthenticationTokenMissingException())
  }
}

export default authMiddleware
