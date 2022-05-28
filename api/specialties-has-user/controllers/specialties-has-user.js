'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async specialtyHasUsersSearch(ctx) {
        const { professional_id } = ctx.request.query;
        const query =
        `SELECT 
          shu.id specialties_has_user_id,
          shu.consultation_value,
          shu.consultation_value_video,
          specialty.id specialty_id,
          specialty.specialty speciality
        FROM specialties_has_users shu
          LEFT JOIN specialties as specialty on specialty.id = shu.specialty_id \n` +
          `WHERE shu.professional_id = ${professional_id}
        GROUP BY shu.id;`;
        const result = await strapi.connections.default.raw(query);
        return result[0];
      },
    
};
