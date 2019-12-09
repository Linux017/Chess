// Arquivo app/controllers/area.js
var models = require('../models/index');

var Mensagem = models.mensagems;
const chat = async (req, res) => {
    try{
        const mensagem = await Mensagem.findAll();
        res.render('chat/index'); 
    }catch(e){
        console.log(e)
    }
};


module.exports = { chat }