// Arquivo app/controllers/curso.js
var models = require('../models/index');
var Curso = models.cursos;
var Areas = models.areas;
var User = models.users;

const index = async (req, res) => {

    try{
        const cursos = await Curso.findAll({
            include: [
                { model: Areas }
            ]
        });

        if(req.session.uid){
            var user = await User.findOne({where:{id : req.session.uid}});
            if(user != null)
                res.render('curso/index', {
                    cursos:cursos, 
                    user_data : { nome : user.nome }
                });
            else
                res.redirect('/');
        }else
            res.redirect('/');
    }catch(e){
        console.log(e)
    }
};

const read = async (req, res) => {
    try{
        if (req.route.methods.get) {
            if(req.session.uid){
                var user = await User.findOne({where:{id : req.session.uid}});
                const curso = await Curso.findOne({
                    include: [
                        { model: Areas }
                    ],
                    where : {
                        id : req.param('id')
                    }
                });
                if(user != null)
                    res.render('curso/read',{
                        curso : curso,
                        csrf : req.csrfToken(),
                        user_data : { nome : user.nome }
                    });
                else
                    res.redirect('/')
            }else
                res.redirect('/')
        } 
    }catch(e){
        console.log(e)
    }
};

const create = async (req, res) => {
    try {
        if (req.route.methods.get) {
            res.render('curso/create',{
                csrf : req.csrfToken()
            });
        } else {

            curso = await Curso.create({
                sigla: req.body.sigla,
                nome: req.body.nome,
                descricao: req.body.descricao,
                area_id: req.body.area
            });
            res.redirect('/curso');
        }
    } catch (error) {
        console.log(error)
    }

};

const update = async (req, res) => {
    try{
        if (req.route.methods.get) {
            if(req.session.uid){
            var user = await User.findOne({where:{id : req.session.uid}});
            const curso = await Curso.findOne({
                include: [
                    { model: Areas }
                ],
                where : {
                    id : req.param('id')
                }
            });

                if(user != null)
                    res.render('curso/update', {
                        curso : curso,
                        csrf : req.csrfToken(),
                        user_data : { nome : user.nome }
                    });
                else
                    res.redirect('/');

            

        }else
            res.redirect('/');
    }else {
        curso = await Curso.update({
            sigla: req.body.sigla,
            nome: req.body.nome,
            descricao: req.body.descricao,
            area_id: req.body.area,
            
        },{ where: {id: req.param('id')} });
        res.redirect('/curso');
    }
    }catch(e){
        console.log(e)
    }
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

const readAll = async (req, res) => {
    try {
        curso = await Curso.findAll({
            include: [
                { model: Areas }
            ]
        });
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(JSON.stringify(curso))
    } catch (error) {
        console.log(error)
    }
};


module.exports = { index, read, create, update, remove, readAll }