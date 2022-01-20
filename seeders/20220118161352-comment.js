'use strict';
const { User, Post, sequelize } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comment = await Promise.all(
      [...Array(10)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true });
        let post = await Post.findOne({
          order: sequelize.random(),
          where: { userId: { [Op.not]: user.id } },
          raw: true
        });
        return {
          body: 'soemthing random',
          userId: user.id,
          postId: post.id,
          upVote: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        };
      })
    );
    await queryInterface.bulkInsert('comments', comment);
    // await queryInterface.bulkInsert(
    //   'comments',
    //   [
    //     {
    //       body: 'Cool!',
    //       postId: 1,
    //       userId: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     },
    //     {
    //       body: 'amazing',
    //       postId: 2,
    //       userId: 2,
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     },
    //     {
    //       body: 'wow!',
    //       postId: 3,
    //       userId: 3,
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     },
    //     {
    //       body: 'So nice!',
    //       postId: 4,
    //       userId: 4,
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     }
    //   ],
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments');

    //   return queryInterface.bulkDelete('comments');
    // }
  }
};
