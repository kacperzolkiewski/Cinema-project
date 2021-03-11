import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import pino from "pino"
import expressPino from "express-pino-logger"
import swaggerUi from "swagger-ui-express"
import test from "./routes/test"

const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "Cinema App",
        "description": "An website app for cinema",
        "version": "1.0"
    },
    "produces": ["application/json"],
    "paths": {
        "/test": {
            "get": {
                "tags": ["/test"],
                "description": "Taki fajny description",
                "parameters": [{
                    "name": "test",
                    "in": "formData",
                    "type": "array",
                    "collectionFormat": "multi",
                    "items": {
                        "type": "integer"
                    }
                },
                { "name": "profileId", "in": "formData", "required": true, "type": "string" },
                { "name": "file", "in": "formData", "type": "file", "required": "true" }],
                "responses": {}
            }
        }
    }
}

const logger = pino({ level: process.env.LOG_LEVEL || "info" })
const expressLogger = expressPino({ logger })

const app = express()
const port = process.env.PORT || 8080

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(expressLogger)

const connectMongoDB = async (): Promise<void> => {
    const uri = process.env.MONGODB_URI
    await mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(
            () => logger.info("MongoDB connected"),
            (error) => {
                logger.error(error)
            },
        )
}

connectMongoDB()

app.get("/", (req, res) => {
    logger.debug("Calling res.send")
    res.send("Hello World!")
})

app.use("/test", test)

app.listen(port)
