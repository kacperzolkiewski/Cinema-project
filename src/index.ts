import * as express from "express"
import * as expressPino from "express-pino-logger"
import * as mongoose from "mongoose"
import "dotenv/config"
import * as pino from "pino"

const logger = pino({ level: process.env.LOG_LEVEL || "info" })
const expressLogger = expressPino({ logger })

const app = express()
const port = process.env.PORT || 8080

app.use(expressLogger)

const connectMongoDB = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI || ""
  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(
      () => logger.info("MongoDB connected"),
      (error) => {
        logger.error(error)
      }
    )
}

connectMongoDB()

app.get("/", (req, res) => {
  logger.debug("Calling res.send")
  res.send("Hello World!")
})

app.listen(port)
