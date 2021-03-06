'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('comments','topicId',{
      type: Sequelize.INTEGER
    }
  )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('comments','topicId')
  }
};
