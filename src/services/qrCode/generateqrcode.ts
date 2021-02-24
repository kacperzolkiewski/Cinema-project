import qrcode from "qrcode"

export default async function generateQRCode(text: string): Promise<void> {
    try {
        await qrcode.toFile("./exampleQRCodePhoto.png", text)
    } catch (err) {
        console.error(err)
    }
    return
}
