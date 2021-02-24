import qrcode from "qrcode"

export default class QRCodeService {
    async generateQRCode(text: string): Promise<string> {
        try {
            return await qrcode.toString(text)
        } catch (err) {
            console.error(err)
            throw err
        }
    }
}
