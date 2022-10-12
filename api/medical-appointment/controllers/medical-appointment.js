'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const emailTemplate = require('../../../templates/emailTemplate')

module.exports = {
  assignDate: async (ctx) => {
    let body = ctx.request.body
    let email = body.email
    let date = body.date
    let patient_id = body.patient_id
    let professional_id = body.professional_id
    let reason_for_consultation = body.reason_for_consultation
    let specialty = body.specialty
    // let consultation_type = body.consultation_type;
    let code = ''

    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 4; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    let queryMedicalAppointmet = `INSERT INTO medical_appointments (date, status, patient_id, professional_id, reason_for_consultation, code, specialty)
    VALUES ('${date}', 'Slope', '${patient_id}', '${professional_id}', '${reason_for_consultation}', '${code}', '${specialty}')`

    let queryUser =
      'UPDATE `users-permissions_user` SET confirmed=1 ' +
      `WHERE email = '${email}' AND id = ${patient_id}`

    let queryPayment = ''
    const medical_appointment = await strapi.connections.default.raw(
      queryMedicalAppointmet
    )

    const user = await strapi.connections.default.raw(queryUser)

    const emailOptions = {
      to: email,
      subject: 'Código de confirmación de cita medica',
      html: emailTemplate(
        'CÓDIGO DE VERIFICACIÓN DE CITA',
        'Para poder agendar una cita debes ingresar el código de verificación.',
        code
      ),
    }
    await strapi.plugins['email'].services.email.send(emailOptions)

    return {
      email,
      result: medical_appointment,
    }
  },

  confirmCode: async (ctx) => {
    let body = ctx.request.body
    let code = body.code
    let response

    console.log('CODE: ', code)
    try {
      const queryMedicalAppointment = await strapi.connections.default.raw(
        `SELECT * FROM medical_appointments WHERE code = '${code}' AND confirmed IS NULL`
      )

      console.log('result: ', queryMedicalAppointment[0][0])

      if(queryMedicalAppointment[0].length > 0){
        await strapi.connections.default.raw(
          'UPDATE medical_appointments SET confirmed=1 ' +
          `WHERE code = '${code}' AND confirmed IS NULL`)
          console.log("se confirmo la cita medica")

        response =  {
          redirect: true,
          response: "confirmed"
        }
      }
      else{
        response = {
          redirect: false,
          response: "doesn´t exist"  
        }
         
      }
    } catch (error) {
      response = {
        redirect: false,
        response: "error"
      }
    }
    return response
  },

  appointmentAndRecord: async (ctx) => {
    let body = ctx.request.body
    let patientId = body.patient_id

    let query =
      `
        SELECT
          ma.*,
          professional.first_name,
          professional.second_name,
          professional.surname,
          professional.second_surname,
          professional.address,
          professional.consulting_room\n` +
      'FROM `users-permissions_user` as professional\n' +
      `LEFT JOIN medical_appointments as ma on ma.professional_id = professional.id 
        LEFT JOIN	medical_records as mr on ma.medical_record_id = mr.id
        WHERE ma.patient_id = ${patientId} AND professional.role = 5
        `

    const appointmentAndRecordQuery = await strapi.connections.default.raw(
      query
    )

    return appointmentAndRecordQuery[0]
  },
}
