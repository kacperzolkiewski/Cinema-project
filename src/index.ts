import * as bodyParser from "body-parser"
import cookieParser = require("cookie-parser")
import express = require("express")
import * as expressPino from "express-pino-logger"
import * as mongoose from "mongoose"
import pino from "pino"
import { serve, setup } from "swagger-ui-express"
import FilmController from "./controllers/filmController/film.controller"
import AuthenticationController from "./routes/authentication.controller"
import { swaggerDocument } from "./swaggerDocumentation/swaggerDocument"
import errorMiddleware from "./utils/middlewares/error.middleware"
import "dotenv/config"
import validateEnv from "./utils/validateEnv"

class App {
  public app: express.Application
  public logger: pino.Logger

  constructor() {
    this.app = express()
    this.logger = pino({ level: process.env.LOG_LEVEL || "info" })

    this.initializeLogger()
    this.connectToTheDatabase()
    this.initializeMiddlewares()
    this.initializeControllers()
    this.initializeErrorHandling()
  }

  public listen(): void {
    this.app.listen(process.env.PORT, () => {
      this.logger.info(`App listening on the port ${process.env.PORT}`)
    })
  }

  private initializeLogger(): void {
    const expressLogger = expressPino(this.logger)
    this.app.use(expressLogger)
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json())
    this.app.use(cookieParser())
  }

  private initializeErrorHandling(): void {
    this.app.use(errorMiddleware)
  }

  private initializeControllers(): void {
    const typedControllers = [new AuthenticationController(), new FilmController()]

    typedControllers.forEach((controller) => {
      this.app.use("/api", controller.router)
    })
    this.app.use("/docs", serve, setup(swaggerDocument))
  }

  private async connectToTheDatabase(): Promise<void> {
    const uri = process.env.MONGODB_URI || ""
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(
        () => this.logger.info("MongoDB connected"),
        (error) => {
          this.logger.error(error)
        }
      )
  }
}

validateEnv()

const app = new App()
app.listen()
