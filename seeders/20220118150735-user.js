'use strict';
const faker = require('faker');
const users = [...Array(10)].map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  passwordDigest: faker.internet.password(),
  createdAt: new Date(),
  updatedAt: new Date()
}));
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users');
  }
};
