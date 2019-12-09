const express = require('express')
const logger = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const router = require('./config/routes')
const sass =  require('node-sass-middleware')

const uuid = require('uuid/v4');
const session = require('express-session');

const cookieParser = require('cookie-parser')


const csurf = require('csurf')

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/app/views')


//chess
app.use('/chessboardjs',[
    express.static(__dirname + '/node_modules/@chrisoakman/chessboardjs/dist')
])

app.use('/chess',[
    express.static(__dirname + '/node_modules/chess.js')
])

app.use('/chesspieces',[
    express.static(__dirname + '/public/img/chesspieces')
])

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

app.use('/webfonts',[
    express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/webfonts/')
])

app.use(sass({
    src: __dirname + '/public/scss',
    dest: __dirname + '/public/css',
    debug : true,
    outputStyle: 'compressed',
    prefix: '/css'
}))

app.use(session({
    genid: (req) => {
        return uuid() 
    },
    secret: 'Hi9Cf#mK98',
    resave: false,
    saveUninitialized: true
}));


app.use(express.urlencoded({extended: false}));

app.use(logger('short'))



app.use(cookieParser())

app.use(csurf({cookie : true}));


app.use(router)

app.listen(3000)

