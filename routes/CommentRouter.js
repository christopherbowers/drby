const commentRouter = require('express').Router();
const commentController = require('../controllers/CommentControllers');


commentRouter.get('/comments', commentController.getComments)
commentRouter.get('/comments/:id', commentController.getCommentById)
commentRouter.post('/', commentController.createComment);
commentRouter.put('/:comment_id', commentController.updateComment);
commentRouter.delete('/:comment_id', commentController.deleteComment);

module.exports = commentRouter;
