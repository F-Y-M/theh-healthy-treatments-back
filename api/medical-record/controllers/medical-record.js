'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    searchRecordAndUser: async (ctx) => {
        let body = ctx.request.body;
        console.log("esto es body: ", body);
        let appointmentId = body.appointment_id;
        let medicalRecordId = body.medical_record_id;

        let query = `
        SELECT 
            mr.*, 
            concat(patient.first_name, ' ', patient.second_name, ', ', patient.surname, ' ', patient.second_surname) as 'patientFullName',
            patient.identification_document,
            patient.identification_type,
            patient.cell_phone_number,
            patient.email,
            files.url as photo
            
            FROM medical_appointments as ma
            LEFT JOIN	medical_records as mr on ma.medical_record_id = mr.id\n` +
            "LEFT JOIN 	`users-permissions_user` as patient ON ma.patient_id = patient.id\n" +
            `
            LEFT JOIN upload_file_morph as relatedFile on
                relatedFile.related_type = 'users-permissions_user' AND
                relatedFile.related_id = patient.id
            LEFT JOIN upload_file files on files.id = relatedFile.upload_file_id
            WHERE ma.id = ${appointmentId} AND
            mr.id = ${medicalRecordId}`
        
        const appointmentAndRecordQuery = await strapi.connections.default.raw(query);

        return appointmentAndRecordQuery[0];
    
    },

    searchRecordAndProfessional: async (ctx) => {
        let body = ctx.request.body;
        console.log("esto es body: ", body);
        let medicalRecordId = body.medical_record_id;

        let query = `
        SELECT
            ma.*,
            mr.*,
            concat(professional.first_name, ' ', professional.second_name, ', ', professional.surname, ' ', professional.second_surname) as 'professionalFullName',
            professional.professional_certificate,
            professional.identification_type,
            professional.identification_document,
            files.url as photo
    
        FROM medical_appointments as ma
        LEFT JOIN	medical_records as mr on ma.medical_record_id = mr.id\n` +
        "LEFT JOIN 	`users-permissions_user` as professional ON ma.professional_id = professional.id\n" +
        `LEFT JOIN upload_file_morph as relatedFile on
            relatedFile.related_type = 'users-permissions_user' AND
            relatedFile.related_id = professional.id AND
            relatedFile.field = 'digital_firm'
        LEFT JOIN upload_file files on files.id = relatedFile.upload_file_id
        WHERE mr.id = ${medicalRecordId}`
        
        const appointmentAndRecordQuery = await strapi.connections.default.raw(query);

        return appointmentAndRecordQuery[0];
    },

    searchRecordForProfessional: async (ctx) => {
        let body = ctx.request.body;
        let professionalId = body.professional_id;

        let query = `
        SELECT
            mr.*,
            professional.professional_certificate,
            patient.first_name,
            ma.specialty,
            ma.date,
            files.url as photo\n` +
        "FROM `users-permissions_user` as professional\n" +
        `LEFT JOIN medical_appointments as ma on ma.professional_id = professional.id\n` +
        "LEFT JOIN `users-permissions_user` as patient on ma.patient_id = patient.id\n" + 
        `LEFT JOIN medical_records as mr on ma.medical_record_id = mr.id
        LEFT JOIN upload_file_morph as relatedFile on
            relatedFile.related_type = 'users-permissions_user' AND
            relatedFile.related_id = professional.id AND
            relatedFile.field = 'digital_firm'
        LEFT JOIN upload_file files on files.id = relatedFile.upload_file_id
        WHERE professional.id = ${professionalId} AND mr.id IS NOT NULL`
        
        const appointmentAndRecordQuery = await strapi.connections.default.raw(query);

        return appointmentAndRecordQuery[0];
    
    },
    // Init: Lo que estaba en el modelo productos
    async search(ctx) {
      const {
        name, //
        specialtieId,
        specialtieName,
        specialtieType, // specialty || medicalExaminations
        // city,
        date,
        insurance 
      } = ctx.request.query

      console.log(specialtieId, specialtieName, specialtieType, date, insurance)

      let query = ''

      if (specialtieType == 'specialty') {

        query = `
          SELECT 
            concat('Dr ',users.first_name, ', ', users.surname) AS professionalFullName,
            users.id,
            users.first_name,
            users.surname,
            users.calendar,
            users.accept_insurance AS acceptInsurance,
            upload_file.url AS photo,
            AVG(comments.rate) AS rate,
            specialties.specialty,
            specialties_has_users.consultation_value AS consultationValue,
            insurances.name AS insurance
          FROM 
            \`users-permissions_user\` AS users
          LEFT JOIN 
            upload_file_morph ON 
            upload_file_morph.related_type = 'users-permissions_user' AND
            upload_file_morph.field = 'photo' AND
            upload_file_morph.related_id = users.id AND
            users.role = 1
          LEFT JOIN 
            upload_file ON 
            upload_file.id = upload_file_morph.upload_file_id
          LEFT JOIN 
            comments ON 
            comments.professional_id = users.id
          LEFT JOIN 
            specialties_has_users ON 
            specialties_has_users.professional_id = users.id
          LEFT JOIN 
            specialties ON 
            specialties.id = specialties_has_users.specialty_id
          LEFT JOIN
            insurance_has_users ON
            insurance_has_users.user_id = users.id
          LEFT JOIN
            insurances ON
            insurances.id = insurance_has_users.insurance_id
          WHERE
            users.calendar IS NOT NULL AND
            users.calendar LIKE '%${date}%' AND
            specialties.id = ${specialtieId}
            #insurance#
          GROUP BY 
            professionalFullName, 
            users.id,
            users.first_name,
            users.surname,
            users.calendar,
            acceptInsurance,
            photo,
            rate,
            specialties.specialty
            #insurance
          `

          if (insurance) {
            query.replace('#insurance#', `AND insurances.name LIKE '%${insurance}%'`)
          } else {
            query.replace('#insurance#', '')
          }

      } else {

        query = `
          SELECT 
            concat('Dr ',users.first_name, ', ', users.surname) AS professionalFullName,
            users.id,
            users.first_name,
            users.surname,
            users.calendar,
            users.city,
            users.accept_insurance AS acceptInsurance,
            upload_file.url AS photo,
            AVG(comments.rate) AS rate,
            medical_examinations.name AS specialty,
            users_has_examinations.exam_value AS consultationValue,
            insurances.name AS insurance
          FROM 
            \`users-permissions_user\` AS users
          LEFT JOIN 
            upload_file_morph ON 
            upload_file_morph.related_type = 'users-permissions_user' AND
            upload_file_morph.field = 'photo' AND
            upload_file_morph.related_id = users.id AND 
            users.role = 5
          LEFT JOIN 
            upload_file ON 
            upload_file.id = upload_file_morph.upload_file_id
          LEFT JOIN 
            comments ON 
            comments.professional_id = users.id
          LEFT JOIN 
            users_has_examinations ON
            users_has_examinations.user_id = users.id
          LEFT JOIN 
            medical_examinations ON 
            medical_examinations.id = users_has_examinations.medical_examination_id
          LEFT JOIN
            insurance_has_users ON
            insurance_has_users.user_id = users.id
          LEFT JOIN
            insurances ON
            insurances.id = insurance_has_users.insurance_id
          WHERE
            users.calendar IS NOT NULL AND
            users.calendar LIKE '%${date}%' AND
            medical_examinations.id = ${specialtieId}
            #insurance#
          GROUP BY 
            professionalFullName, 
            users.id,
            users.first_name,
            users.surname,
            users.calendar,
            acceptInsurance,
            photo,
            rate,
            specialties.specialty
            #insurance
          `

        if (insurance) {
          query.replace('#insurance#', `AND insurances.name LIKE '%${insurance}%'`)
        } else {
          query.replace('#insurance#', '')
        }
      }
      
      const result = await strapi.connections.default.raw(query);
      
      let res = [];

      result[0].map((row) => {

        let jsonCalendaDate = JSON.parse(row.calendar)

        let listOfDates = []

        // Agregamos primero las fechas
        let availabilityHour = jsonCalendaDate.map((calendaDate) => {

          if (calendaDate.timed) {
            if (!listOfDates.includes(calendaDate.start.slice(0,10))) {
                listOfDates.push(calendaDate.start.slice(0,10))
                return {
                  date: calendaDate.start.slice(0,10),
                  shedule: []
                }
            }
          }

        })

        // Eliminamos idefinidos
        availabilityHour = availabilityHour.filter((item) => {
            return item != undefined
        })

        // Agregamos horas a cada fecha
        availabilityHour.forEach(function (element) {
            jsonCalendaDate.map((calendaDate) => {
                if (element.date == calendaDate.start.slice(0,10)) {
                    element.shedule.push({
                      from: calendaDate.start.slice(11,16),
                      to: calendaDate.end.slice(11,16)
                    })
                }
            })
        })

        delete row.calendar
        delete row.acceptInsurance	
        delete row.insurance

        row.schedules = availabilityHour
        res.push(row)

      })

      return res
        // Código de quiñones
        // let { 
        //       name,
        //       specialtieId,
        //       specialtieName,
        //       specialtieType,
        //       city,
        //       date,
        //       insurance 
        //     } = ctx.request.query;

        // console.log(specialtieId, specialtieName, specialtieType, city, date, insurance)

        // let nuevo = date.split("-")
    
        // if(nuevo[1] === "12"){
        //     nuevo[1] = "03"
        // }
        // else if(nuevo[1] === "11"){
        //     nuevo[1] = "02"
        // }
        // else if(nuevo[1] === "10"){
        //     nuevo[1] = "01"
        // }
        // else{
        //   let part = parseInt(nuevo[1]) + 3
        //   nuevo[1] = '0' + part
        // }
    
        // console.log("NUEVA FECHA: ", nuevo)
    
        // let newDate = nuevo.toString().replace(/,/g,"-")
        // let query =
        //   "SELECT concat('Dr ',users.first_name, ', ', users.surname) as 'professionalFullName',\n" +
        //   "users.first_name as 'first_name',\n" +
        //   "users.id as 'id',\n" +
        //   "users.city as 'city',\n" +
        //   "files.url as 'photo',\n" +
        //   "users.accept_insurance as 'acceptInsurance',\n" +
        //   "spec.specialty as 'specialty',\n" +
        //   "specUser.consultation_value as 'consultationValue',\n" +
        //   "AVG(comments.rate) as 'rate',\n" +
        //   "avaHour.availability_hours as 'availabilityHour'\n" +
        //   "FROM `users-permissions_user` users\n" +
        //   "LEFT JOIN upload_file_morph as relatedFile on\n" +
        //   "relatedFile.related_type = 'users-permissions_user' AND\n" +
        //   "relatedFile.related_id = users.id\n" +
        //   "LEFT JOIN upload_file files on files.id = relatedFile.upload_file_id\n" +
        //   "LEFT join comments on comments.professional_id = users.id AND users.role = 1\n" +
        //   "LEFT join specialties_has_users specUser on specUser.users_id = users.id\n" +
        //   "LEFT join specialties spec on spec.id = specUser.specialty_id\n" +
        //   "LEFT join availability_hours avaHour on avaHour.users_id = users.id\n" +
        //   "WHERE users.role = 1 ";

        // if (name != "") {
        //   query = query + `AND \nspec.specialty like "${name}" `;
        // }
        // else{
        //   query = query + "AND \n"
        // }
        
        // if(name !== "" && city !== "") query = query + "AND\n"
    
        // if (city != "") {
        //   query = query + `users.city LIKE "%${city}%"  `;
        // }
    
        // query = query + `AND \navaHour.date BETWEEN '${date}' AND '${newDate}'
        //  GROUP BY users.id, avaHour.date`;
    
        // console.log("PETICIOJ: ", query)
        // const result = await strapi.connections.default.raw(query);
        // let before;
        // let array = [];
        // result[0].map((item) => {
        //   item.schedules = [];
        //   if (
        //     before != undefined &&
        //     item.professionalFullName == before.professionalFullName
        //   ) {
        //     array[array.length - 1].schedules.push(
        //       JSON.parse(item.availabilityHour)
        //     );
        //   } else if (before == undefined || before != item) {
        //     item.availabilityHour = JSON.parse(item.availabilityHour);
        //     item.schedules.push(item.availabilityHour);
        //     delete item.availabilityHour;
        //     before = item;
        //     array.push(item);
        //   }
        // });
        // return array;
    },
    
    async medicalRecordShortSearch(ctx) {
        const { patient_id } = ctx.request.query;
        const { professional_id } = ctx.request.query;
    
        let queryPart = professional_id 
        ? `WHERE ma.professional_id = ${professional_id}\n`
        : `WHERE ma.patient_id = ${patient_id}\n`
        const query =
          `SELECT 
            mr.id as medical_record_id,
            ma.reason_for_consultation as reason,
            ma.date as date,
            ma.status as status,
            concat('Dr ',professional.first_name, ', ', professional.surname) as professionalFullName,
            spec.specialty as specialty,
            specUser.consultation_value as consultationValue,
            professional.address as address
    
          FROM medical_appointments ma
          LEFT JOIN medical_records as mr on mr.id = ma.medical_record_id\n` +
          "LEFT JOIN `users-permissions_user` as professional on ma.professional_id = professional.id \n" +
          `LEFT join specialties_has_users specUser on specUser.users_id = professional.id
          LEFT join specialties spec on spec.id = specUser.specialty_id\n` +
          queryPart
        
        console.log(query)
    
        const result = await strapi.connections.default.raw(query);
        return result[0];
    },
    
    
    async medicalRecordShortSearchNotifications(ctx) {
        const { patient_id } = ctx.request.query;
        const { professional_id } = ctx.request.query;
    
        let queryPart = professional_id 
        ? `WHERE ma.professional_id = ${professional_id}\n`
        : `WHERE ma.patient_id = ${patient_id}\n`
        const query =
          `SELECT 
            ma.reason_for_consultation as reason,
            ma.date as date,
            ma.status as status,
            concat('Dr ',professional.first_name, ', ', professional.surname) as professionalFullName,
            spec.specialty as specialty,
            specUser.consultation_value as consultationValue,
            professional.address as address
    
          FROM medical_appointments ma\n` +
          "LEFT JOIN `users-permissions_user` as professional on ma.professional_id = professional.id \n" +
          `LEFT join specialties_has_users specUser on specUser.users_id = professional.id
          LEFT join specialties spec on spec.id = specUser.specialty_id\n` +
          queryPart
        
        console.log(query)
    
        const result = await strapi.connections.default.raw(query);
        return result[0];
    },
    
    async medicalRecordSearch(ctx) {
        const { patient_id } = ctx.request.query;
        const query =
          `SELECT 
            mr.id as medical_record_id,
            ma.id as medicalAppointmentId,
            ma.reason_for_consultation as reason,
            ma.status as status,
            ma.consultation_type as type,
            ma.date as date,
            concat('Dr ',professional.first_name, ', ', professional.surname) as 'professionalFullName',
            professional.id as professionalId,
            professional.consulting_room as consultingRoom,
            professional.address as address,
            spec.specialty as 'specialty',
            specUser.consultation_value as 'consultationValue',
            commentary.rate as rate,
            commentary.commentary as review
        
        FROM medical_appointments ma
          LEFT JOIN medical_records as mr on mr.id = ma.medical_record_id \n` +
          "LEFT JOIN `users-permissions_user` as professional on ma.professional_id = professional.id \n" +
          `LEFT JOIN specialties_has_users specUser on specUser.users_id = professional.id
          LEFT JOIN specialties spec on spec.id = specUser.specialty_id
          LEFT JOIN comments commentary on ma.comment_id = commentary.id \n` +
          `WHERE ma.patient_id = ${patient_id}`;
        const result = await strapi.connections.default.raw(query);
        return result[0];
    },
    // End: Lo que estaba en el modelo productos
};
