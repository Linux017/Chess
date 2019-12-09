var models = require('../models/index');
const User = models.users;
const bcrypt = require('bcryptjs');


const indexRedirect = async (req,res) => {
    try{
        if(req.session.uid){
            const user = await User.findOne({where:{id : req.session.uid}});
            if(user != null)
                res.render('main/home',{
                    user_data : { nome : user.nome }
                })
        }else{
            res.render('main/login',{  csrf: req.csrfToken() })
        }
    }catch(e){
        console.log(e)
    }
}

const sobre = async (req,res) =>{
    try{
        if(req.session.uid){
            const user = await User.findOne({where:{id : req.session.uid}});
            if(user != null)
                res.render('main/sobre',{
                    user_data : { nome : user.nome }
                })
        }else{
            res.render('main/sobre',{})
        }
    }catch(e){
        console.log(e)
    }
}

const home = async (req,res) => {
    try{
        if(req.session.uid){
            const user = await User.findOne({where:{id : req.session.uid}});
            if(user == null)
                res.redirect('/');
            else
                res.render('main/home',{
                    user_data : { nome : user.nome }
                })
        }else{
            res.redirect('/');
        }
    }catch(e){
        console.log(e)
    }
}

const login = async (req,res) => {
    try{
        if (req.route.methods.get) {
            res.render('main/login',{
                csrf: req.csrfToken()
            })
        }else{
            const user = await User.findOne({where:{email:req.body.email}});
            if (user) {
                bcrypt.compare(req.body.password, user.senha, (err, ok) => {
                    console.log(ok)
                    if (ok) {
                        req.session.uid = user.id;
                        res.redirect('/home');
                    } else {
                        res.render('main/login', {
                            csrf: req.csrfToken()
                        });
                    }
                });
            }else{
                res.render('main/login',{badLogin : true, csrf: req.csrfToken()})
            }
        }
    }catch(e){
        console.log(e)
    }

}

const logout = (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });
}


function cadastro(req,res){
    res.render('main/signup',{
        csrf: req.csrfToken()
})
}

module.exports = {sobre,login,cadastro,home,logout,indexRedirect};