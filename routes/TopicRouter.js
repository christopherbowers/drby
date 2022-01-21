const Router = require('express').Router();
const controller = require('../controllers/TopicController');
const middleware = require('../middleware')

Router.get('/', middleware.stripToken, middleware.verifyToken, controller.getAllTopics);
Router.get('/home/:id', middleware.stripToken, middleware.verifyToken, controller.getThreePosts);
Router.get('/:id', middleware.stripToken, middleware.verifyToken, controller.getTopicPosts);

module.exports = Router;
