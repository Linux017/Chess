

const index = async function(req,res) {

}
const read = async function(req,res) {
    
}
const create = async function(req,res) {
    if(req.route.methods.get){
        res.render('curso/create')
    }else{

    }

    // res.end()
}
const update = async function(req,res) {
    
}
const remove = async function(req,res) {
    
}

module.exports = {
    index,read,create,update,remove
}