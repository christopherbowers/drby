const commentRouter = require('express').Router();
const commentController = require('../controllers/CommentControllers');

commentRouter.get('/', commentController.getComments)
commentRouter.get('/:id', commentController.getCommentById)
commentRouter.post('/', commentController.createComment);
commentRouter.put('/:id', commentController.updateComment);
commentRouter.delete('/:id', commentController.deleteComment);

module.exports = commentRouter;
