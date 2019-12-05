// Arquivo app/controllers/curso.js
var models = require('../models/index');
var Curso = models.cursos;

const index = async (req, res) => {
    try{
        const cursos = await Curso.findAll();
        res.render('curso/index', {
            cursos:cursos, 
        }); 
    }catch(e){
        console.log(e)
    }
};

const read = async (req, res) => {
    console.log(req.body)
    try {
        curso = await Curso.findOne({
            where:{
                id : req.param('id')
            }
        });
        res.end(JSON.stringify(curso))
    } catch (error) {
        console.log(error)
    }
};

const create = async (req, res) => {
    console.log(req.body)
    try {
        if (req.route.methods.get) {
            res.render('curso/create');
        } else {
            curso = await Curso.create({
                sigla: req.body.sigla,
                nome: req.body.nome,
                descricao: req.body.descricao,
                id_area: req.body.area
            });
            res.redirect('/curso');
        }
    } catch (error) {
        console.log(error)
    }

};

const update = async (req, res) => {

};

const remove = async (req, res) => {
    try {
        console.log(req.param('id'))
        curso = await Curso.destroy({
            where: { id: req.param('id') }
        });
        res.redirect('/curso');
        
    } catch (error) {
        console.log(error)
    }

       
};


module.exports = { index, read, create, update, remove }