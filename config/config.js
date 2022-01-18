require('dotenv').config()
module.exports = {
  development: {
    database: 'drby_development',
    dialect: 'postgres',
    username: 'annika',
    password: null
  },
  test: {
    database: 'drby_test',
    dialect: 'postgres',
    username: 'annika',
    password: null
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    username: 'annika',
    password: null,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
