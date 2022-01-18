'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn('posts', 'comment', 'postbody')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn('posts', 'postbody', 'comment')
  }
};
