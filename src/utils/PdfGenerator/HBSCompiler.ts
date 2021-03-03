import * as hbs from "handlebars"
import fs from "fs-extra"
import * as path from "path"

const compileHBStoHTML = async (templateName: Handlebars.Template, data: any): Promise<string> => {
    hbs.registerHelper("json", (content: any) => {
        return JSON.stringify(content)
    })
    const filePath = path.join(process.cwd(), "templates", `${templateName}.hbs`)
    const html = await fs.readFile(filePath)
    return hbs.compile(html)(data)
}

export default compileHBStoHTML
