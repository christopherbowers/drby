const { Post, Vote } = require('../models');
const { Op } = require('sequelize');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.send(posts);
  } catch (error) {
    throw error;
  }
};

const getPostComments = async (req, res) => {
  try {
    let id = req.params.id;
    const comments = await Post.findByPk(req.params.id, {
      where: { postId: id },
      include: [
        {
          model: Comment,
          required: true,
          attributes: ['body']
        }
      ]
    })
    res.send(comments);
  } catch (error) {
    throw error
  }
};


const createPost = async (req, res) => {
  try {
    let postBody = req.body;
    let post = await Post.create(postBody);
    res.send(post);
  } catch (error) {
    throw error;
  }
};

const updatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.id);
    let updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true
    });
    res.send(updatedPost);
  } catch (error) {
    throw error;
  }
};

const deletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.id);
    await Post.destroy({ where: { id: postId } });
    res.send({ message: `Deleted post with an id of ${postId}` });
  } catch (error) {
    throw error;
  }
};

const getPostWithVotes = async (req, req2, res) => {
  try {
    let thePostId = req.params.id;
    let theUserId = req2.params.id;
    const getPostWithVotes = await Vote.findAll({
      where: {
        [Op.and]: [{ postId: thePostId }, { userId: theUserId }]
      },
      include: [
        {
          model: Vote,
          required: true,
          attributes: ['name']
        }
      ]
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};