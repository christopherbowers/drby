const Router = require('express').Router();
const controller = require('../controllers/PostController');
const middleware = require('../middleware');


Router.get('/', controller.getAllPosts);
Router.get('/:id', controller.getPostById);
Router.post('/', controller.createPost);
Router.put('/:id', controller.updatePost);
Router.delete('/:id', controller.deletePost);
Router.get('/', controller.getAllPosts)


module.exports = Router;
