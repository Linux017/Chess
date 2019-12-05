const express = require('express')
const router = express.Router();


const mainController = require('../app/controllers/main')

//tabelas
const cursoController = require('../app/controllers/curso')
const AreaController = require('../app/controllers/area')

const errorHandlerController = require('../app/controllers/errorHandler')

//controlador main
router.get('/',					(req,res) => res.redirect("/login"));
router.get('/Sobre',			mainController.sobre)
router.get('/Login',			mainController.login)
router.get('/Cadastro',         mainController.cadastro)

//controlador de curso
router.get('/curso',				cursoController.index)
router.get('/curso/create',			cursoController.create)
router.post('/curso/create',		cursoController.create)
router.get('/curso/read/:id',		cursoController.read)
router.get('/curso/update/:id',		cursoController.update)
router.post('/curso/update/:id',	cursoController.update)
router.post('/curso/remove/:id',	cursoController.remove)
router.get('/curso/remove/:id',	cursoController.remove)


// AreaController
router.get('/area' , AreaController.index);



//controlador de erros
router.use(errorHandlerController.erro404);

module.exports = router
