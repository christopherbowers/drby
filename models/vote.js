'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vote.belongsTo(models.Post, { foreignKey: 'postId'})
      Vote.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Vote.init({
    upVoteCounter: DataTypes.NUMBER,
    downVoteCounter: DataTypes.NUMBER,
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
    modelName: 'Vote',
    tableName: 'votes'
  });
  return Vote;
};