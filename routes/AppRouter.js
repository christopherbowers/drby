const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const TopicRouter = require('./TopicRouter')
const PostRouter = require('./PostRouter')

Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/topics', TopicRouter)
Router.use('/posts', PostRouter)

module.exports = Router
