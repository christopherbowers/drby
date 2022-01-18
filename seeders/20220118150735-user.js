'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Chris',
          lastName: 'Zeas',
          email: 'czeas1997@gmail.com',
          passwordDigest: 'Strongpassword123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Christopher',
          lastName: 'Bowers',
          email: 'Faker@gmail1.com',
          passwordDigest: 'Strongpassword456',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Cristen',
          lastName: 'Negron',
          email: 'Faker@gmail2.com',
          passwordDigest: 'Strongpassword789',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Annika',
          lastName: 'Truong',
          email: 'Faker@gmail3.com',
          passwordDigest: 'Strongpassword246',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users');
  }
};
