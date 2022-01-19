require('dotenv').config()
module.exports = {
  development: {
    database: 'drby_development',
    dialect: 'postgres',
  },
  test: {
    database: 'drby_test',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    password: null,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
