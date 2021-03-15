import * as bodyParser from "body-parser"
import cookieParser = require("cookie-parser")
import express = require("express")
import * as expressPino from "express-pino-logger"
import * as mongoose from "mongoose"
import pino from "pino"
import { serve, setup } from "swagger-ui-express"
import Controller from "./interfaces/Controller.interface"
import { swaggerDocument } from "./swaggerDocumentation/swaggerDocument"
import "dotenv/config"

class App {
  public app: express.Application
  public logger: pino.Logger

  constructor(controllers: Controller[]) {
    this.app = express()
    this.logger = pino({ level: process.env.LOG_LEVEL || "info" })

    this.initializeLogger()
    this.connectToTheDatabase().then(
      () => this.logger.info("MongoDB connected"),
      (error) => {
        this.logger.error(error)
      }
    )
    this.initializeMiddlewares()
    this.initializeControllers(controllers)
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

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use("/api", controller.router)
    })
    this.app.use("/docs", serve, setup(swaggerDocument))
  }

  private async connectToTheDatabase(): Promise<void> {
    const uri = process.env.MONGODB_URI || ""
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}

export default App
