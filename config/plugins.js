// const nodemailer = require ('nodemailer')
// const transporter = nodemailer.createTransport({
//     host: process.env.MAILER_SERVER,
//     port: process.env.MAILER_PORT,
//     secure: process.env.MAILER_SECURE,
//     auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASSWORD
//     }
// })

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: env('EMAIL_ADDRESS_FROM'),
        defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
      },
    },
  },
  // ...
});