const { Topic, Post } = require('../models');

const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.findAll();
    res.send(topics);
  } catch (error) {
    throw error;
  }
};

const getTopicById = async (req, res) => {
  try {
    let id = req.params.id;
    const topic = await Topic.findByPk(id);
    res.send(topic);
  } catch (error) {
    throw error;
  }
};
const getTopicPosts = async (req, res) => {
  try {
    let id = req.params.id;
    const posts = await Post.findAll({
      where: { topicId: id }
    });
    res.send(posts);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTopics,
  getTopicById,
  getTopicPosts
};
