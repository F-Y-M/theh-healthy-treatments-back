// File /api/email/controllers/Email.js
'use strict'

/**
 * Read the documentation () to implement custom controller functions
 */
const emailTemplate = require('../../../templates/emailTemplate')

module.exports = {
    /**
     * Sends an email to the recipient in the body of the request
     */
    send: async (ctx) => {
        const request = ctx.request.body
        // console.log("CONTXT: ", ctx)
        console.log("esto es el request: ", request)
        // const body = request.body
        const sendTo = request.email
        const code = request.code
        let subject

        if(request.sub == 'verify') {
            subject = 'VERIFICACIÓN'
            title = 'CÓDIGO DE VERIFICACIÓN DE CITA'
            content = 'Para poder agendar una cita debes ingresar el código de verificación.'
        }
        else {
            subject = 'NOS PONDREMOS EN CONTACTO PRONTO.'
            title = 'CORREO RECIBIDO'
            content = 'Hemos recibido tu petición y nos pondremos en contacto contigo pronto.'
        }


        strapi.log.debug(`Trying to send an email to ${sendTo}`)

        try {
            const emailOptions = {
                to: sendTo,
                subject: subject,
                html: emailTemplate(
                    title,
                    content,
                    ''
                ),

            }
            await strapi.plugins['email'].services.email.send(emailOptions)
            strapi.log.debug(`Email sent to ${sendTo}`)
            ctx.send({ message: 'Email sent' })
        } catch (err) {
            strapi.log.error(`Error sending email to ${sendTo}`, err)
            console.log("Error", err)
            ctx.send({ error: 'Error sending email' })
        }
    },

    sendQuote: async(ctx) => {
        const request = ctx.request.body
        let {name, email, procedure, number} = request

        if (!number) number = 'No hay número'
        let subject = 'COTIZACIÓN'
        let title = 'PETICIÓN, COTIZACIÓN'
        let content = `Nombre: ${name} /nCorreo: ${email} /nNumber: ${number} /nProcedure: ${procedure}`
        let to = 'thehealthytreatments@gmail.com'

        const emailOptions = {
            to: email,
            subject: 'NOS PONDREMOS EN CONTACTO PRONTO.',
            html: emailTemplate(
                title,
                content,
                ''
            )
        }

        try {
            await strapi.plugins['email'].services.email.send(emailOptions)
            strapi.log.debug(`Email sent to ${sendTo}`)
            ctx.send({ message: 'Email sent' })
        } catch (error) {
            console.log("Error: ", error)
        }
    }
}
