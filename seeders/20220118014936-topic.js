'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('topics', [
    {
    name: 'Topic 1',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    name: 'Topic 2',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    name: 'Topic 3',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    name: 'Topic 4',
    createdAt: new Date(),
    updatedAt: new Date()
    },
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('topics')
  }
};
