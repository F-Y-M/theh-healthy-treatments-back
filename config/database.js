module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'the-healthy-treatments-test.cl5lkemfe3j1.us-east-2.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'the_healthy_treatment_test_db'),
        username: env('DATABASE_USERNAME', 'innovarweb'),
        password: env('DATABASE_PASSWORD', 'jjVZAf*%ZxUj'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
