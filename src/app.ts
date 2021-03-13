import * as bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import express from "express"
import * as mongoose from "mongoose"
import pino from "pino"
import AuthenticationController from "./authentication/authentication.controller"
import Controller from "./interfaces/controller.interface"
import errorMiddleware from "./middleware/error.middleware"
import "dotenv/config"
import validateEnv from "./utils/validateEnv"

const logger = pino({ level: process.env.LOG_LEVEL || "info" })
class App {
  public app: express.Application

  constructor(controllers: Controller[]) {
    this.app = express()

    this.connectToTheDatabase()
    this.initializeMiddlewares()
    this.initializeControllers(controllers)
    this.initializeErrorHandling()
  }

  public listen(): void {
    this.app.listen(process.env.PORT, () => {
      logger.info(`App listening on the port ${process.env.PORT}`)
    })
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json())
    this.app.use(cookieParser())
  }

  private initializeErrorHandling(): void {
    this.app.use(errorMiddleware)
  }

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router)
    })
  }

  private connectToTheDatabase(): void {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env
    mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`)
  }
}

validateEnv()

const app = new App([new AuthenticationController()])

app.listen()

export default App
