const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', middleware.stripToken, middleware.verifyToken, controller.getAllUsers)
Router.post('/', middleware.stripToken, middleware.verifyToken, controller.createUser)
Router.get('/:user_id', middleware.stripToken, middleware.verifyToken, controller.getUserbyId)
Router.put('/:user_id', middleware.stripToken, middleware.verifyToken, controller.updateUser)
Router.delete('/:user_id', middleware.stripToken, middleware.verifyToken, controller.deleteUser)

module.exports = Router
