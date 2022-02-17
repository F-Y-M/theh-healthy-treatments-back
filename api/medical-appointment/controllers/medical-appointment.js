"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const emailTemplate = require('../../../templates/emailTemplate')

module.exports = {
  assignDate: async (ctx) => {
    let body = ctx.request.body;
    console.log("esto es bodu: ", body);
    let email = body.email;
    let date = body.date;
    let patient_id = body.patient_id;
    let professional_id = body.professional_id;
    let reason_for_consultation = body.reason_for_consultation;
    // let consultation_type = body.consultation_type;
    let code = "";

    let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 4; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    let queryMedicalAppointmet = `INSERT INTO medical_appointments (date, patient_id, professional_id, reason_for_consultation, code)
    VALUES ('${date}', '${patient_id}', '${professional_id}', '${reason_for_consultation}', '${code}')`

    let queryUser = "UPDATE `users-permissions_user` SET confirmed=1 " +
    `WHERE email = '${email}' AND id = ${patient_id}`

    const medical_appointment = await strapi.connections.default.raw(queryMedicalAppointmet);
    
    const user = await strapi.connections.default.raw(queryUser);
    console.log("user: ", user);

    const emailOptions = {
      to: email,
      subject: "Codigo de confirmación de cita medica",
      html: emailTemplate(
        "CODIGO DE VERIFICACIÓN DE CITA",
        "Para poder agendar una cita debes ingresar el codigo de verificación.",
        code  
      ),
    };
    await strapi.plugins["email"].services.email.send(emailOptions);

    return {
      email: email,
    };
  },

  confirmCode: async (ctx) => {
    let body = ctx.request.body;
    let code = body.code;
    console.log("CODE: ", code);
    try {
      const queryMedicalAppointment = await strapi.connections.default.raw(
        `SELECT * FROM medical_appointments WHERE code = '${code}'`
      );
      return { redirect: true };
    } catch (error) {
      return { redirect: false };
    }
  },
};
