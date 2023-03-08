'use strict'

var mongoose = require('mongoose')
var schema = mongoose.Schema

var articleSchema = schema({
    title: String,
    description: String,
    created: Date,
    image: String,
    completed: Boolean
})

module.exports = mongoose.model('article', articleSchema)