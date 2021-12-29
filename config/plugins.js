const nodemailer = require ('nodemailer')
const transporter = nodemailer.createTransport({
    host: process.env.MAILER_SERVER,
    port: process.env.MAILER_PORT,
    secure: process.env.MAILER_SECURE,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
})

module.exports = ({ env }) => ({
    // ...
    email: {
      provider: env('EMAIL_PROVIDER'),
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.example.com'),
        port: env('EMAIL_SMTP_PORT', 587),
        auth: {
          user: env('EMAIL_SMTP_USER'),
          pass: env('EMAIL_SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_ADDRESS_FROM'),
        defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
      },
    },

  })