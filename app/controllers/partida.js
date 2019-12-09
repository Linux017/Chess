var models = require('../models/index');
const User = models.users;
const Partida = models.partidas;

const index = async (req,res) => {
    try{
        if(req.session.uid){
            const user = await User.findOne({where:{id : req.session.uid}});
            if(user != null)
                res.render('partida/index',{
                    user_data : { nome : user.nome }
                })
        }else{
            res.render('main/login',{  csrf: req.csrfToken() })
        }
    }catch(e){
        console.log(e)
    }
}

const readAll = async (req, res) => {
    try {
        partidas = await Partida.findAll();
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(JSON.stringify(partidas))
    } catch (error) {
        console.log(error)
    }
};



module.exports = {index,readAll};