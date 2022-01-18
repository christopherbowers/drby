'use strict';

const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     'posts',
     [
       {
        title: 'New Music Friday',
        postbody: "Thoughts on this week's releases? Loving the new FKA twigs!",
        upvote: 2,
        downvote: 1,
        imgURL: '',
        userId: User.id,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
       title: 'Post About Topic 2',
        postbody: "I love Topic 2!",
        upvote: 3,
        downvote: 2,
        imgURL: '',
        userId: User.id,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        title: 'Post About Topic 3',
         postbody: "I love Topic 3!",
         upvote: 10,
         downvote: 1,
         imgURL: '',
         userId: User.id,
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          title: 'Post About Topic 4',
           postbody: "I love Topic 4!",
           upvote: 1,
           downvote: 10,
           imgURL: '',
           userId: User.id,
           createdAt: new Date(),
           updatedAt: new Date()
          }
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('posts', null, {});
    
  }
};
