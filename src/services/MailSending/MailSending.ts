import * as nodemailer from "nodemailer"

interface ISystemSettings {
    SmtpServerConnectionString: string
    SmtpFromAddress: string
}

let transporter = nodemailer.createTransport(`smtps://<username>%40gmail.com:<password>@smtp.gmail.com`)

let mailOptions = {
    from: "from_test@gmail.com",
    to: "to_test@gmail.com",
    subject: "Hello",
    text: "Hello from node.js",
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(`error: ${error}`)
    }
    console.log(`Message Sent ${info.response}`)
})

export default class GMailService {
    private _transporter: nodemailer.Transporter
    private _settings: ISystemSettings

    constructor(settings: ISystemSettings) {
        this._settings = settings
        this._transporter = nodemailer.createTransport(this._settings.SmtpServerConnectionString)
    }
    sendMail(to: string, subject: string, content: string): Promise<void> {
        let options = {
            from: this._settings.SmtpFromAddress,
            to: to,
            subject: subject,
            text: content,
        }

        return new Promise<void>((resolve: (msg: any) => void, reject: (err: Error) => void) => {
            this._transporter.sendMail(options, (error, info) => {
                if (error) {
                    console.log(`error: ${error}`)
                    reject(error)
                } else {
                    console.log(`Message Sent 
                      ${info.response}`)
                    resolve(`Message Sent  
                      ${info.response}`)
                }
            })
        })
    }
}

// let gmailService = new GMailService()

// gmailService.sendMail("coders-camp-cinema@gmail.com", "Hello", "Hello from gmailService")

// gmailService.sendMail("coders-camp-cinema@gmail.com", "Hello", "Hello from gmailService").then((msg) => {
//     console.log(`sendMail result :(${msg})`)
// })

let gmailService = new GMailService({ 
  SmtpServerConnectionString : 'smtp://localhost:1025', 
  SmtpFromAddress : 'smtp_from@test.com' 
}); 

gmailService.sendMail( 
  "test2@test.com",  
  "subject",  
  "content").then( (msg) => { 
    console.log(`sendMail result :(${msg})`); 
}); 