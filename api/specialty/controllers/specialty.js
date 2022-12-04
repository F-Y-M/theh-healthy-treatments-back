'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    getSpecialty: async(ctx) => {

        let {add} = ctx.request.body

        let specialty = await strapi.connections.default.raw(`
            SELECT specialty
            FROM specialties
        `)

        // console.log("REsultado: ", specialty)

        let medicalExam = await strapi.connections.default.raw(`
            SELECT name as specialty
            FROM medical_examinations
        `)

        let doctor = await strapi.connections.default.raw(`
        SELECT 
            CONCAT(first_name, ' ', surname 
            ) as specialty,
            upload_file.url AS photo,
            specialties.specialty AS 'group'
        FROM \`users-permissions_user\` users
        LEFT JOIN 
            specialties_has_users ON 
            specialties_has_users.professional_id = users.id
        LEFT JOIN 
            upload_file_morph ON 
            upload_file_morph.related_type = 'users-permissions_user' AND
            upload_file_morph.field = 'photo' AND
            upload_file_morph.related_id = users.id
        LEFT JOIN 
            upload_file ON 
            upload_file.id = upload_file_morph.upload_file_id
        LEFT JOIN 
            specialties ON 
            specialties.id = specialties_has_users.specialty_id
        WHERE 	
            role = 1 ${add ? 'AND specialties.id = 31;' : ';'}
        `)


        return [...specialty[0], ...medicalExam[0], ...doctor[0]]
    }
};
