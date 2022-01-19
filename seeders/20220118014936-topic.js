'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  await queryInterface.sync('topics', [
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
    name: 'Topic 3',
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
