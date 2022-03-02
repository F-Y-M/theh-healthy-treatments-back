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
            mr.*, 
            concat(professional.first_name, ' ', professional.second_name, ', ', professional.surname, ' ', professional.second_surname) as 'professionalFullName',
            professional.professional_certificate,
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
        console.log("esto es body: ", body);
        let professionalId = body.professional_id;

        let query = `
        SELECT
            mr.*,
            professional.professional_certificate,
            professional.first_name,
            ma.specialty,
            ma.date,
            files.url as photo\n` +
        "FROM `users-permissions_user` as professional\n" +
        `LEFT JOIN medical_appointments as ma on ma.professional_id = professional.id 
        LEFT JOIN	medical_records as mr on ma.medical_record_id = mr.id
        LEFT JOIN upload_file_morph as relatedFile on
            relatedFile.related_type = 'users-permissions_user' AND
            relatedFile.related_id = professional.id AND
            relatedFile.field = 'digital_firm'
        LEFT JOIN upload_file files on files.id = relatedFile.upload_file_id
        WHERE professional.id = ${professionalId} AND mr.id IS NOT NULL`
        
        const appointmentAndRecordQuery = await strapi.connections.default.raw(query);

        return appointmentAndRecordQuery[0];
    
    }
};
