const Router = require('express').Router()
const controller = require('../controllers/TopicController')

Router.get('/', controller.getAllTopics)
Router.get('/:id', controller.getTopicById)

module.exports = Router
