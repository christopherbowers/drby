const commentRouter = require('express').Router();
const commentController = require('../controllers/CommentControllers');

commentRouter.get('/', commentController.getComments)
commentRouter.post('/', commentController.createComment);
commentRouter.put('/:comment_id', commentController.updateComment);
commentRouter.delete('/:comment_id', commentController.deleteComment);

module.exports = commentRouter;
