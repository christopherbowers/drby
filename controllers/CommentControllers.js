const { Comment, User } = require('../models');

const getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.send(comments);
  } catch (error) {
    throw error;
  }
};

const getCommentById = async (req, res) => {
  try {
    let id = req.params.id;
    const commentWithName = await Comment.findByPk(req.params.id, {
      where: { postId: id },
      include: [
        {
          model: User,
          attributes: ['firstName', 'lastName']
        }
      ]
    });
    res.send(commentWithName);
  } catch (error) {
    throw error;
  }
};

// const getCommentById = async (req, res) => {
//   try {
//     const comment = await Comment.findByPk(req.params.id);
//     res.send(comment);
//   } catch (error) {
//     throw error;
//   }
// };

const createComment = async (req, res) => {
  try {
    let commentBody = {
      ...req.body
    };
    let result = await Comment.create(commentBody);
    res.send(result);
  } catch (error) {
    throw error;
  }
};

const updateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.id);
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    });
    res.send(updatedComment);
  } catch (error) {}
};

const deleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.id);
    await Comment.destroy({
      where: { id: commentId }
    });
    res.send({ message: `Deleted comment with an id of ${commentId}` });
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
};
