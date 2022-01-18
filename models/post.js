'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.hasMany(models.Comment, { foreignKey: 'postId'})
      Post.hasMany(models.Vote, { foreignKey: 'postId' })
      Post.belongsTo(models.User, {foreignKey: 'userId'})
      Post.belongsTo(models.Topic, { foreignKey: 'topicId'})
    }
  };
  Post.init({
    title: DataTypes.STRING,
    postbody: DataTypes.STRING,
    upvote: DataTypes.NUMBER,
    downvote: DataTypes.NUMBER,
    imgURL: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    },
    topicId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};
