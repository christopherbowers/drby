'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users','passwordDigest',{
      type: Sequelize.STRING
    }
  )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users','passwordDigest')
  }
};
