const { Router } = require("express");
const controller = require('../controllers/PostController')

Router.get('/posts', controller.getAllPosts)
Router.get('/posts/:id', controller.getPostById)

Router.post('/posts', controller.createPost)

Router.put('/posts/:id', controller.updatePost)

Router.delete('/posts/:id', controller.deletePost)