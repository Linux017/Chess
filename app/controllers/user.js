
var models = require('../models/index');
var User = models.users;
const bcrypt = require('bcryptjs');


const index = async (req, res) => {

};

const read = async (req, res) => {

};

const create = async (req, res) => {
    try {
        if (!req.route.methods.get) {
            bcrypt.genSalt(12, function(err, salt) {
                bcrypt.hash(req.body.password,salt,async(err, hash) => {
                        await User.create({
                        nome: req.body.nome,
                        email: req.body.email,
                        senha: hash,
                        id_curso: req.body.curso
                    });
                });
            });
            res.redirect('/login');
        }
    } catch (error) {
        console.log(error)
    }

};

const update = async (req, res) => {

};

const readAll = async (req, res) => {
    console.log(req.body)
    try {
        user = await User.findAll();
        res.end(JSON.stringify(user))
    } catch (error) {
        console.log(error)
    }
};


module.exports = { index, read, create, update, readAll }