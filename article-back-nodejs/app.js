'use strict'

//Create Server
var express = require('express')
var bodyParser = require('body-parser')

//Load route files
var articleRoutes = require('./route/articleRoute')

var app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//  CORS and Headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
app.use('/api', articleRoutes)

module.exports = app
