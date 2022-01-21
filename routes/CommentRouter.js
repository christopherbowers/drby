const commentRouter = require('express').Router();
const commentController = require('../controllers/CommentControllers');
const middleware = require('../middleware')


commentRouter.get('/', middleware.stripToken, middleware.verifyToken, commentController.getComments)
commentRouter.get('/:id', middleware.stripToken, middleware.verifyToken, commentController.getCommentById)
commentRouter.post('/', middleware.stripToken, middleware.verifyToken, commentController.createComment);
commentRouter.put('/:id', middleware.stripToken, middleware.verifyToken, commentController.updateComment);
commentRouter.delete('/:id', middleware.stripToken, middleware.verifyToken, commentController.deleteComment);

module.exports = commentRouter;
