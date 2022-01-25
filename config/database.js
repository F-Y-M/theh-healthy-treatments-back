module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'the_healthy_treatment_test_db'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', '!1Contraseña'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL', false), // For self-signed certificates
        },
      },
      options: {
          "pool":{
          "min": 0,
          "max": 50,
          "idleTimeoutMillis": 30000,
          "createTimeoutMillis": 30000,
          "acquireTimeoutMillis": 30000
      }
      }
    },
  },
});
