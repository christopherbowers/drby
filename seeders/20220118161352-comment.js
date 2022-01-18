'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'comments',
      [
        {
          body: 'Cool!',
          postId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'amazing',
          postId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'wow!',
          postId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'So nice!',
          postId: 4,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments');
  }
};
