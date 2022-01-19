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
      where: { topicId: id },
      limit: 3,
      include: [
        {
          model: Topic,
          required: true,
          attributes: ['name']
        }
      ],
      order: sequelize.random()
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
      where: { topicId: id },
      attributes: ['title', 'postbody'],
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
