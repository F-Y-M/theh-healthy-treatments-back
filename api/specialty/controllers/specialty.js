'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    getSpecialty: async(ctx) => {
        let {req} = ctx.request.body
        console.log("QUERY: ", req)

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
            CONCAT('Dr.', first_name, ' ', 
                CASE 
                    WHEN second_name IS NULL THEN ''
                    ELSE second_name
                END
                , ' ', surname, ' ', 
                CASE 
                    WHEN second_surname IS NULL THEN ''
                    ELSE second_surname
                END 
            ) as specialty
        FROM \`users-permissions_user\`
        WHERE 	
            role = 1
        `)
        return [...specialty[0], ...medicalExam[0], ...doctor[0]]
    }
};
