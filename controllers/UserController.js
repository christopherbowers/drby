const { User } = require('../models');

const getAllUsers = async (req, res) => {
  try {
    const result = await User.findAll();
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
    let result = await User.create(userBody);
    res.send(result);
  } catch (error) {
    throw error;
  }
};

const getUserbyId = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id);
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const updateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let updatedUser = await User.update(req.body, {
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
    await User.destroy({
      where: {
        id: userId
      }
    });
    res.send({ message: `Deleted User with an id of ${userId}` });
  } catch (error) {
    throw error;
  }
};
// const addAvatar = async (req, res) => {
//   try {
//     let userId = parseInt(req.params.user_id);
//     await sequelize.query({"INSERT INTO  "}

//     })
//   } catch (error) {
//     throw error;
//   }
// };
module.exports = {
  getAllUsers,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser
};
