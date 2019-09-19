const express = require('express')
const router = express.Router();
const mainController = require('../app/controllers/main')

router.get('/',mainController.index)
router.get('/Sobre',mainController.sobre)

router.use(function(req, res){
	res.statusCode = 404
	res.end("Erro 404")
});

module.exports = router
