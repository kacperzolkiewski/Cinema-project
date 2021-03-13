import * as bcrypt from "bcrypt"
import { Router, Request, Response, NextFunction } from "express"
import * as jwt from "jsonwebtoken"
import PasswordPolicyException from "../exceptions/PasswordPolicyException"
import UserWithThatEmailAlreadyExistsException from "../exceptions/UserWithThatEmailAlreadyExistsException"
import WrongCredentialsException from "../exceptions/WrongCredentialsException"
import Controller from "../interfaces/Controller.interface"
import TokenData from "../interfaces/TokenData.interface"
import DataStoredInToken from "../interfaces/dataInToken"
import validationMiddleware from "../middleware/validation.middleware"
import CreateUserDto from "../models/user/User.dto"
import User from "../models/user/User.interface"
import userModel from "./../models/user/User.model"
import LogInDto from "./login.dto"

class AuthenticationController implements Controller {
  public path = "/auth"
  public router = Router()
  private user = userModel

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    this.router.post(`${this.path}/register`, validationMiddleware(CreateUserDto), this.registration)
    this.router.post(`${this.path}/login`, validationMiddleware(LogInDto), this.loggingIn)
    this.router.post(`${this.path}/logout`, this.loggingOut)
  }

  private registration = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const userData: CreateUserDto = request.body
    if (await this.user.findOne({ email: userData.email })) {
      throw new UserWithThatEmailAlreadyExistsException(userData.email)
    } else {
      next(new PasswordPolicyException())
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const user = await this.user.create({
      ...userData,
      password: hashedPassword
    })
    user.password = ""
    const tokenData = this.createToken(user)
    response.setHeader("Set-Cookie", [this.createCookie(tokenData)])
    response.send(user)
  }

  private loggingIn = async (request: Request, response: Response): Promise<void> => {
    const logInData: LogInDto = request.body
    const user = await this.user.findOne({ email: logInData.email })
    if (user) {
      const isPasswordMatching = await bcrypt.compare(logInData.password, user.password)
      if (isPasswordMatching) {
        user.password = ""
        const tokenData = this.createToken(user)
        response.setHeader("Set-Cookie", [this.createCookie(tokenData)])
        response.send(user)
      } else {
        throw new WrongCredentialsException()
      }
    } else {
      throw new WrongCredentialsException()
    }
  }

  private loggingOut = (request: Request, response: Response): void => {
    response.setHeader("Set-Cookie", ["Authorization=;Max-age=0"])
    response.send(200)
  }

  private createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`
  }

  private createToken(user: User): TokenData {
    const expiresIn = 60 * 60
    const secret = process.env.JWT_SECRET || ""
    const dataStoredInToken: DataStoredInToken = {
      _id: user._id
    }
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn })
    }
  }
}

export default AuthenticationController
