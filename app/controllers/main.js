function sobre(req,res){
    res.render('main/sobre',{
    })
}

function login(req,res){
    res.render('main/login',{

    })
}

function cadastro(req,res){
    res.render('main/cadastro',{

    })
}

module.exports = {sobre,login,cadastro};