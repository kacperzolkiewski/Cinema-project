import puppeteer from "puppeteer"

const PdfPrinter = async (HTMLToPrint: any): Promise<void> => {
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        await page.setContent(HTMLToPrint)
        await page.emulateMediaType("print")

        await page.pdf({
            path: "ticket.pdf",
            format: "a4",
            printBackground: true,
        })
        await browser.close()
        process.exit()
    } catch (e) {
        throw new Error(e.message)
    }
}

export default PdfPrinter
