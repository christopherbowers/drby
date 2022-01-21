'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        onUpdate: 'CASCADE'
      });
      Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE'
      });
    }
  }
  Comment.init(
    {
      body: DataTypes.STRING,
      postId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE'
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE'
      },
      topicId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  );
  return Comment;
};
