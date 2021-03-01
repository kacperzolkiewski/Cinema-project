import express from "express"
import mongoose from "mongoose"
import "dotenv/config"

const app = express()
const port = process.env.PORT || 8080

const connectMongoDB = async (): Promise<void> => {
    const uri = process.env.MONGODB_URI
    await mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(
            () => console.log("MongoDB connected"),
            (error) => {
                console.error(error)
            },
        )
}

connectMongoDB()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port)
