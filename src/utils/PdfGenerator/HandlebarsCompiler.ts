import handlebars from "handlebars"
import fs from "fs-extra"
import path from "path"
import ITicketData from "./TicketData.inteface";

const compileHandlebarsToHTML = async (templateName: Handlebars.Template, data: ITicketData): Promise<string> => {
    handlebars.registerHelper("json", (content: any) => {
        return JSON.stringify(content)
    })
    const filePath = path.join(process.cwd(), "templates", `${templateName}.hbs`)
    const html = await fs.readFile(filePath)
    return handlebars.compile(html)(data)
}

export default compileHandlebarsToHTML


