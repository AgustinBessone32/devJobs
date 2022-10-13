const express = require('express')
const homeController = require('../controllers/homeController')
const vacantesController = require('../controllers/vacanteController')

const router = express.Router()

module.exports = () =>{
    router.get('/',homeController.mostrarTrabajos )

    router.get('/vacantes/nueva', vacantesController.formularioNuevaVacante)

    return router
}