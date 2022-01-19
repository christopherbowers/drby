const Router = require('express').Router();
const controller = require('../controllers/TopicController');

Router.get('/home/:id', controller.getThreePosts);
Router.get('/:id', controller.getTopicPosts);

module.exports = Router;
