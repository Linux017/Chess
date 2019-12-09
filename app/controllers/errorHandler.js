var models = require('../models/index');
var User = models.users;

const erro404 = async(req,res) =>{
    try{

        res.statusCode = 404
        if(req.session.uid){
            var user = await User.findOne({where:{id : req.session.uid}});
            if(user != null)
                res.render('error/erro404',{
                    user_data : { nome : user.nome }
                })
        }else{
            res.render('error/erro404',{})
        }
    }catch(e){
        console.log(e)
    }
}


module.exports = {erro404}