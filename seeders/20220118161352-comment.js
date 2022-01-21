'use strict';
const { User, Post, sequelize } = require('../models');
const { Op } = require('sequelize');
const faker = require('faker');

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
          body: faker.lorem.paragraph(),
          userId: user.id,
          postId: post.id,
          createdAt: new Date(),
          updatedAt: new Date()
        };
      })
    );
    await queryInterface.bulkInsert('comments', comment);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments');
  }
};
