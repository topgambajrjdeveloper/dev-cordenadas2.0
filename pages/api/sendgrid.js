import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
        from: `"Dev-Cordenadas 👻" <${process.env.USERMAIL}>`, // sender address
        to: process.env.USERMAIL, // list of receivers
        replayTo: req.body.email,
        subject: `Contacto a través de Dev-Cordenadas ✔ : ${req.body.subject}`, // Subject line
        text: req.body.message, // plain text body
        html: `<b>${req.body.name}<br/>${req.body.message}</b>`,
        });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;