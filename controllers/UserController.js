const { Users } = require('../models');

const getAllUsers = async (req, res) => {
  try {
    const result = await Users.findAll();
    res.send(result);
  } catch (error) {
    throw error;
  }
};
const createUser = async (req, res) => {
  try {
    let userBody = {
      ...req.body
    };
    let result = await Users.create(userBody);
    res.send(result);
  } catch (error) {
    throw error;
  }
};

const getUserbyId = async (req, res) => {
  try {
    const user = await Users.findyByPk(req.params.user_id);
    res.sen(user);
  } catch (error) {
    throw error;
  }
};

const updateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let updatedUser = await Users.update(req.body, {
      where: { id: userId },
      returning: true
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    await Users.destroy({
      where: {
        id: userId
      }
    });
    res.send({ message: `Deleted User with an id og ${userId}` });
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllUsers,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser
};
