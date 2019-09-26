const express = require('express')
const router = express.Router();

const mainController = require('../app/controllers/main')
const cursoController = require('../app/controllers/curso')
const errorHandlerController = require('../app/controllers/errorHandler')

//controlador main
router.get('/',					mainController.index)
router.get('/Sobre',			mainController.sobre)

//controlador de curso
router.get('/curso',				cursoController.index)
router.get('/curso/create',			cursoController.create)
router.post('/curso/create',		cursoController.create)
router.get('/curso/read/:id',		cursoController.read)
router.get('/curso/update/:id',		cursoController.update)
router.post('/curso/update/:id',	cursoController.update)
router.post('/curso/remove/:id',	cursoController.remove)




//controlador de erros
router.use(errorHandlerController.erro404);

module.exports = router
