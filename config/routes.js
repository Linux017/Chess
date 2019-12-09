const express = require('express')
const router = express.Router();

//teste
const chat = require('../app/controllers/chat')

const mainController = require('../app/controllers/main')

//controllers
const cursoController = require('../app/controllers/curso')
const areaController = require('../app/controllers/area')
const UserController = require('../app/controllers/user')
const matchController = require('../app/controllers/partida')

const errorHandlerController = require('../app/controllers/errorHandler')

//controlador main
router.get('/',	                    mainController.indexRedirect);
router.get('/sobre',			    mainController.sobre)
router.get('/login',			    mainController.login)
router.post('/login',			    mainController.login)
router.get('/logout',			    mainController.logout)
router.get('/signup',               mainController.cadastro)
router.get('/home',                 mainController.home)


//controlador do user
router.post('/user/create',		    UserController.create)
router.get('/user/all',			    UserController.readAll)

//controlador da partida
router.get('/partida',	            matchController.index);
router.get('/partida/all',          matchController.readAll)
//controlador de curso
router.get('/curso',				cursoController.index)
router.get('/curso/create',			cursoController.create)
router.post('/curso/create',		cursoController.create)
router.get('/curso/read/:id',		cursoController.read)
router.get('/curso/update/:id',		cursoController.update)
router.post('/curso/update/:id',	cursoController.update)
router.post('/curso/remove/:id',	cursoController.remove)
router.get('/curso/remove/:id',     cursoController.remove)
router.get('/curso/all',			cursoController.readAll)


// areaController
router.get('/area' , areaController.index);
router.get('/area/all' , areaController.readAll);



//controlador de erros
router.use(errorHandlerController.erro404);

module.exports = router
