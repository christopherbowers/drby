'use strict';
const { User, Topic, sequelize } = require('../models');
const faker = require('faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const posts = await Promise.all(
      [...Array(20)].map(async () => {
        let user = await User.findOne({ order: sequelize.random() });
        return {
          title: faker.lorem.sentence(),
          postbody: faker.lorem.sentence(),
          upvote: faker.datatype.number({ max: 10 }),
          downvote: faker.datatype.number({ max: 10 }),
          userId: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
        };
      })
    );
    await queryInterface.bulkInsert('posts', posts);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts');
  }
};
