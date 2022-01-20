const Router = require('express').Router();
const controller = require('../controllers/PostController');
const middleware = require('../middleware');

Router.get('/', controller.getAllPosts);
// below has to be getPostById//
Router.get('/:id', controller.getPostWithVotes);
Router.post('/', controller.createPost);
Router.put('/:id', controller.updatePost);
Router.delete('/:id', controller.deletePost);
Router.get('/:id', controller.getPostComments);

module.exports = Router;
