'use strict';

const { sequelize } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('votes', 'userId', {
      type: Sequelize.INTEGER
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('votes', 'userId');
  }
};
