const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getAllUsers)
Router.post('/', controller.createUser)
Router.get('/:user_id', controller.getUserbyId)
Router.put('/:user_id', controller.updateUser)
Router.delete('/:user_id', controller.deleteUser)

module.exports = Router
