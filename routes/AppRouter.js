const Router = require('express').Router();
const AuthRouter = require('./AuthRouter');
const UserRouter = require('./UserRouter');
const TopicRouter = require('./TopicRouter');
const PostRouter = require('./PostRouter');
const CommentRouter = require('./CommentRouter');
const VoteRouter = require('./VoteRouter');

Router.use('/auth', AuthRouter);
Router.use('/users', UserRouter);
Router.use('/topics', TopicRouter);
Router.use('/posts', PostRouter);
Router.use('/comments', CommentRouter);
Router.use('/votes', VoteRouter);
module.exports = Router;
