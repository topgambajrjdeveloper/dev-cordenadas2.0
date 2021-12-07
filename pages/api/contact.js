// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
"use strict";

export default function (req, res) {
  require('dotenv').config()
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USERMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
    secure: true, // true for 465, false for other ports
  });
  const mailData = {
    from: `"Dev-Cordenadas 👻" <${process.env.USERMAIL}>`, // sender address
    to: process.env.USERMAIL, // list of receivers
    replayTo: req.body.email,
    subject: "Contacto a través de Dev-Cordenadas ✔", // Subject line
    text: req.body.message, // plain text body
    html: `<b>${req.body.name}<br/>${req.body.message}</b>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}