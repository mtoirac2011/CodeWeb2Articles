'use strict'

var mongoose = require('mongoose')

//Create the Server
var app = require('./app')
var port = 3700

// Create the connection to MongoDB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://0.0.0.0:27017/articles')
    .then(() => {
        console.log('Connection to MongoDB successfully')

        //Create the Server
        app.listen(port, () => {
            console.log(`Server running in port localhost:${port}`)
        })
    })
    .catch(err => console.log(err))
