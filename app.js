const express = require('express')
const logger = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const router = require('./config/routes')
const sass =  require('node-sass-middleware')



app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/app/views')

app.use('/img',[
    express.static(__dirname + '/public/img')
])

app.use('/css',[
    express.static(__dirname + '/public/css')
])

app.use('/js',[
    express.static(__dirname + '/node_modules/jquery/dist/'),
    express.static(__dirname + '/node_modules/popper.js/dist/umd/'),
    express.static(__dirname + '/node_modules/bootstrap/dist/js/'),
    express.static(__dirname + '/public/js')
]);

app.use(sass({
    src: __dirname + '/public/scss',
    dest: __dirname + '/public/css',
    debug : true,
    outputStyle: 'compressed',
    prefix: '/css'
}))

app.use(express.urlencoded({extended: false}));

app.use(logger('short'))

app.use(router)

app.listen(3000)


