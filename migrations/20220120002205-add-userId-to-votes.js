'use strict';

const { sequelize } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addCollumn('votes', 'userId', {
      type: sequelize.INTEGER
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('votes', 'userId');
  }
};
