'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('topics', [
    {
    name: 'Music',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    name: 'Games',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    name: 'Random Stuff',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    name: 'Cycling',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('topics')
  }
};
