//'use strict'
const mongoose = require('mongoose');
var app = require('./app')
var port = 3700

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/articles')
    .then(() => {
        console.log('Connection successfully from mongodb...');

        //Creating Server
        app.listen(port, () => {
            console.log(" Server running in port: 3700")
        })
    })
    .catch(err => console.log(err));