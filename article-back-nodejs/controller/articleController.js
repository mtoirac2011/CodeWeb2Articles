'use strict'

//Import model
var Article = require('../model/articleModel')

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'I am the Home Page'
        })
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Test Page from localhost:3700'
        })
    },
    saveArticle: function(req, res){
        var article = new Article();
        var params =  req.body;

        article.title = params.title
        article.description = params.description
        article.created = params.created
        article.image = null
        article.completed = params.completed

        //Save article to MongoDB
        article.save((error, articleStored)=>{

            if (error) return res.status(500).send({message: 'Error trying to save the document'})

            if (!articleStored) return res.status(404).send({message: 'Unable to save the document'})

            return res.status(200).send({article: articleStored})
        })
     },
    addArticle: function(req, res){
        var article = new Article()
        var params = req.body

        article.title = params.title
        article.description = params.description
        article.created = params.created
        article.completed = params.completed
        article.image = null

        article.save((err, articleSaved) => {
            if (err) return res.status(500).send({message: 'Error trying to save the article'})

            if (!articleSaved) return res.status(404).send({message: 'Unable to save the article'})

            return res.status(200).send({article: articleSaved})
        })
    }
}

module.exports = controller