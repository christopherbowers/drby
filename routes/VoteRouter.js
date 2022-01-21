const voteRouter = require('express').Router();
const voteController = require('../controllers/VoteController');

voteRouter.delete('/:vote_id', voteController.deleteVote);
voteRouter.put('/:vote_id', voteController.updateVote);
voteRouter.post('/', voteController.createVote);
module.exports = voteRouter;
