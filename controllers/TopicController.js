const { Topic, Post, sequelize } = require('../models');

const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.findAll();
    res.send(topics);
  } catch (error) {
    throw error;
  }
};

const getThreePosts = async (req, res) => {
  try {
    let id = req.params.id;
    const posts = await Post.findAll({
      limit: 3,
      order: [['createdAt', 'DESC']],
      where: { topicId: id },
      include: [
        {
          model: Topic,
          required: true,
          attributes: ['name']
        }
      ]
    });
    res.send(posts);
  } catch (error) {
    throw error;
  }
};

const getTopicPosts = async (req, res) => {
  try {
    let id = req.params.id;
    const posts = await Post.findAll({
      order: [['createdAt', 'DESC']],
      where: { topicId: id },
      include: [
        {
          model: Topic,
          required: true,
          attributes: ['name']
        }
      ]
    });
    res.send(posts);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTopics,
  getThreePosts,
  getTopicPosts
};
