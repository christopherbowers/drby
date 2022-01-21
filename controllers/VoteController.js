const { Vote } = require('../models');

const createVote = async (req, res) => {
  try {
    let voteBody = req.body;
    let vote = await Vote.create(voteBody);
    res.send(vote);
  } catch (error) {
    throw error;
  }
};

const deleteVote = async (req, res) => {
  try {
    let voteId = parseInt(req.params.vote_id);
    await Vote.destroy({
      where: {
        id: voteId
      }
    });
    res.send({ message: `Deleted vote with an id of ${voteId}` });
  } catch (error) {
    throw error;
  }
};
const updateVote = async (req, res) => {
  try {
    let voteId = parseInt(req.params.vote_id);
    let updatedVote = await Vote.update(req.body, {
      where: { id: voteId },
      returning: true
    });
    res.send(updatedVote);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  deleteVote,
  updateVote,
  createVote
};
