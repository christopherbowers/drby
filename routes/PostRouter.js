const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

Router.get('/posts', middleware.stripToken, middleware.verifyToken, controller.getAllPosts)
Router.get('/posts/:id', middleware.stripToken, middleware.verifyToken, controller.getPostById)
Router.get('/posts/:id', middleware.stripToken, middleware.verifyToken, controller.getPostComments)
Router.post('/posts', middleware.stripToken, middleware.verifyToken, controller.createPost)
Router.put('/posts/:id', middleware.stripToken, middleware.verifyToken, controller.updatePost)
Router.delete('/posts/:id', middleware.stripToken, middleware.verifyToken, controller.deletePost)


module.exports = Router
