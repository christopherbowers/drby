'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Post, { foreignKey: 'postId'}) 
      Comment.belongsTo(models.User, { foreignKey: 'userId'})
  
    }
  };
  Comment.init({
    body: DataTypes.STRING,
    postId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
    
  });
  return Comment;
};