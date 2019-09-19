function sobre(req,res){
    res.render('main/about',{
    });
}

function index(req,res){
    res.render('main/index',{
        content: "Mano gg"
    });
}

module.exports = {sobre,index};