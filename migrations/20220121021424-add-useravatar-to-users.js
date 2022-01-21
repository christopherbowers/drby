'use strict';

const { query } = require('express');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'userAvatar', {
      type: Sequelize.STRING
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'userAvatar');
  }
};
