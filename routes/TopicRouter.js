const Router = require('express').Router();
const controller = require('../controllers/TopicController');

Router.get('/', controller.getAllTopics);
Router.get('/home/:id', controller.getThreePosts);
Router.get('/:id', controller.getTopicPosts);

module.exports = Router;
