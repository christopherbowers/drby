require('dotenv').config();
module.exports = {
  development: {
    database: 'drby_development',
<<<<<<< HEAD
    dialect: 'postgres'
  },
  test: {
    database: 'drby_test',
    dialect: 'postgres'
=======
    dialect: 'postgres',
  },
  test: {
    database: 'drby_test',
    dialect: 'postgres',
>>>>>>> 22a81a189e3eaae1334d244de4dce51b5a335c7d
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
};
