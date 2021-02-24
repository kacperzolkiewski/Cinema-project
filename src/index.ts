import express from "express"
import QRCodeService from "./services/qrCode/generateqrcode"
const app = express()
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("Hello World!")
})
QRCodeService("Example data")

app.listen(port)
