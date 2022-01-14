const { Router } = require("express");
const controller = require('../controllers/TopicController')


Router.get('/topics', controller.getAllTopics)
Router.get('/topics/:id', controller.getTopicById)