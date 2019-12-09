// Arquivo app/controllers/area.js
var models = require('../models/index');

var Area = models.areas;
const index = async (req, res) => {
    try{
        console.log(Area)
        const areas = await Area.findAll();
        res.render('area/index', {
            areas:areas, 
        }); 
    }catch(e){
        console.log(e)
    }
};

const readAll = async (req, res) => {
    try{
        const areas = await Area.findAll();
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(JSON.stringify(areas)); 
    }catch(e){
        console.log(e)
    }
};

module.exports = { index, readAll }