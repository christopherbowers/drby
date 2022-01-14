const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const TopicRouter = require('./TopicRouter')
const PostRouter = require('./PostRouter')

Router.use('/users', UserRouter)
Router.use('/topics', TopicRouter)
Router.use('./posts', PostRouter)

module.exports = Router
