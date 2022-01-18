const Router = require('express').Router();
const UserRouter = require('./UserRouter');
const CommentRouter = require('./CommentRouter');

Router.use('/users', UserRouter);
Router.use('/comments', CommentRouter);

module.exports = Router;
