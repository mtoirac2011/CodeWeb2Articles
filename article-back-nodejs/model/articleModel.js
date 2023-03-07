'use strict'

var mongoose = require('mongoose')
var schema = mongoose.Schema

var articleSchema = schema({
    title: String,
    description: String,
    created: Date,
    completed: Boolean,
    image: String
})

module.exports = mongoose.model('Article', articleSchema)