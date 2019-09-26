function erro404(req,res){
    res.statusCode = 404
    res.render('error/erro404')
}
module.exports = {erro404}