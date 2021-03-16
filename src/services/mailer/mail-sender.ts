const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

import { Request, Response } from 'express';

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.locals.layout = false;

app.get('/', (req:Request, res:Response) => {
  res.render('contact', {layout: false});
});

app.post('/send', (req:Request, res:Response) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'cinema.coders.camp@gmail.com', 
        pass: 'Coders123'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
      from: '"Nodemailer Contact" <cinema.coders.camp@gmail.com>',
      to: 'cinema.coders.camp@gmail.com',
      subject: 'Ticket',
      text: 'Hello world?',
      attachments: [{
        filename: 'ticket.pdf',
        path: 'public/transaction/Ticket.pdf',
        contentType: 'application/pdf'
      }],
      html: output,
      
  };

  transporter.sendMail(mailOptions, (error:String, info:Number) => {
      if (error) {
          return console.log(error);
      }
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });
});

app.listen(3004, () => console.log('Server started...'));