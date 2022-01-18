'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users','postId',{
      type: Sequelize.STRING
    }
  )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users','postId')
  }
};
