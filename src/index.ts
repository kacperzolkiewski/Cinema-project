import express from "express"
import QRCodeService from "./services/qrCode/qrcodeService"
const app = express()
const port = process.env.PORT || 8080

app.get("/:data", async (req, res) => {
    const qrCodeService = new QRCodeService()
    const qrCode = await qrCodeService.generateQRCode(req.params["data"])
    res.send(qrCode)
})

app.listen(port)
