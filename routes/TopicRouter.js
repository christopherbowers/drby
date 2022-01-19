const Router = require('express').Router();
const controller = require('../controllers/TopicController');

Router.get('/', controller.getAllTopics);
// Router.get('/:id', controller.getTopicById);
Router.get('/:id', controller.getTopicPosts);

module.exports = Router;
