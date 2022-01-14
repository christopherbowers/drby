const userRouter = require('express').Router();
const userController = require('../controllers/UserController');

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/:user_id', userController.getUserbyId);
userRouter.put('/:user_id', userController.updateUser);
userRouter.delete('/:user_id');

module.exports = userRouter;
