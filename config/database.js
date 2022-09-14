module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'tht_test',
        username: 'root',
        password: '!1Contraseña',
        ssl: false  
        // {
        //   rejectUnauthorized: env.bool('DATABASE_SSL', false), // For self-signed certificates
        // },
      },
      options: {}
    },
  },
});
