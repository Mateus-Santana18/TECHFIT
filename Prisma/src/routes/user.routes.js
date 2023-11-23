const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const usersRoutes = Router()

// Controller
const usersController = new UsersController()

// Rotas
usersRoutes.post('/create', usersController.cadastro)

usersRoutes.get('/users', (req, res) =>{
    console.log("Aaaaaaaaaa");
})

// Exporta
module.exports = usersRoutes