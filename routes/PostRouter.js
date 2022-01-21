const Router = require('express').Router();
const controller = require('../controllers/PostController');
const middleware = require('../middleware');

Router.get('/', middleware.stripToken, middleware.verifyToken, controller.getAllPosts)
Router.get('/:id', middleware.stripToken, middleware.verifyToken, controller.getPostById)
Router.post('/', middleware.stripToken, middleware.verifyToken, controller.createPost)
Router.put('/:id', middleware.stripToken, middleware.verifyToken, controller.updatePost)
Router.delete('/:id', middleware.stripToken, middleware.verifyToken, controller.deletePost)

module.exports = Router;
