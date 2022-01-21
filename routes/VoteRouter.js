const voteRouter = require('express').Router();
const voteController = require('../controllers/VoteController');
const middleware = require('../middleware')

voteRouter.delete('/:vote_id', middleware.stripToken, middleware.verifyToken, voteController.deleteVote);
voteRouter.put('/:vote_id', middleware.stripToken, middleware.verifyToken, voteController.updateVote);
