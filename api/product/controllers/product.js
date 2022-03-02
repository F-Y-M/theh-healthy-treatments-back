const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.product.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.product });
  },
  async findAnd(ctx) {
    if (!ctx.state.user) {
      console.log(ctx);
      return "Unauthorized user";
    }
    if (ctx.state.user.role.name === "Doctor") {
      let userId = ctx.state.user.id;
      let userSpecialties = [];
      let userAvailabilityHours = [];
      let userMedicalAppointments = [];
      // extract specialties from model
      let specialties = await strapi.services["specialties-has-user"].find({
        users_id: userId,
      });
      specialties.map((item) => {
        userSpecialties.push(item.specialty_id.specialty);
      });
      // extracting availability_hours from model
      let availabilityHours = await strapi.services["availability-hour"].find({
        users_id: userId,
      });
      availabilityHours.map((item) => {
        userAvailabilityHours.push({
          from: item.from,
          to: item.to,
        });
      });
      // extracting medical_appointment
      let medicalAppointment = await strapi.services[
        "medical-appointment"
      ].find({ professional_id: userId });
      medicalAppointment.map((item) => {
        userMedicalAppointments.push(item.id);
      });
      console.log(medicalAppointment);
      return "Bienvenido doctor";
    }
  },
  async search(ctx) {
    let { name, city, date, insurance } = ctx.request.query;

    let nuevo = date.split("-")

    if(nuevo[1] === "12"){
        nuevo[1] = "03"
    }
    else if(nuevo[1] === "11"){
        nuevo[1] = "02"
    }
    else if(nuevo[1] === "10"){
        nuevo[1] = "01"
    }
    else{
      let part = parseInt(nuevo[1]) + 3
      nuevo[1] = '0' + part
    }

    console.log("NUEVA FECHA: ", nuevo)

    let newDate = nuevo.toString().replace(/,/g,"-")
    let query =
      "SELECT concat('Dr ',users.first_name, ', ', users.surname) as 'professionalFullName',\n" +
      "users.first_name as 'first_name',\n" +
      "users.id as 'id',\n" +
      "users.city as 'city',\n" +
      "files.url as 'photo',\n" +
      "users.accept_insurance as 'acceptInsurance',\n" +
      "spec.specialty as 'specialty',\n" +
      "specUser.consultation_value as 'consultationValue',\n" +
      "AVG(comments.rate) as 'rate',\n" +
      "avaHour.availability_hours as 'availabilityHour'\n" +
      "FROM `users-permissions_user` users\n" +
      "LEFT JOIN upload_file_morph as relatedFile on\n" +
      "relatedFile.related_type = 'users-permissions_user' AND\n" +
      "relatedFile.related_id = users.id\n" +
      "LEFT JOIN upload_file files on files.id = relatedFile.upload_file_id\n" +
      "LEFT join comments on comments.professional_id = users.id AND users.role = 1\n" +
      "LEFT join specialties_has_users specUser on specUser.users_id = users.id\n" +
      "LEFT join specialties spec on spec.id = specUser.specialty_id\n" +
      "LEFT join availability_hours avaHour on avaHour.users_id = users.id\n" +
      "WHERE users.role = 1 ";
    if (name != "") {
      query = query + `AND \nspec.specialty like "${name}" `;
    }
    else{
      query = query + "AND \n"
    }
    
    if(name !== "" && city !== "") query = query + "AND\n"

    if (city != "") {
      query = query + `users.city LIKE "%${city}%"  `;
    }

    query = query + `AND \navaHour.date BETWEEN '${date}' AND '${newDate}'
     GROUP BY users.id, avaHour.date`;

    console.log("PETICIOJ: ", query)
    const result = await strapi.connections.default.raw(query);
    let before;
    let array = [];
    result[0].map((item) => {
      item.schedules = [];
      if (
        before != undefined &&
        item.professionalFullName == before.professionalFullName
      ) {
        array[array.length - 1].schedules.push(
          JSON.parse(item.availabilityHour)
        );
      } else if (before == undefined || before != item) {
        item.availabilityHour = JSON.parse(item.availabilityHour);
        item.schedules.push(item.availabilityHour);
        delete item.availabilityHour;
        before = item;
        array.push(item);
      }
    });
    return array;
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
};
