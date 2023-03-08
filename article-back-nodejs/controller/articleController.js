'use strict'
var Article = require('../model/articleModel')
var fs = require('fs')

var controller = {
     home: function(req, res){
        return res.status(200).send({
            message: ' Home Page'
        })
     },
     test: function(req, res){
        return res.status(200).send({
            message: ' Method test for controller'
        })
     },
     getArticle: function(req, res){
        // Article.find({completed: true}).sort('created').exec((error, articles) => {

        Article.find({}).sort('created').exec((error, articles) => {

            if (error) return res.status(500).send({message: 'Error trying to retrieve the document'})

            if (!articles) return res.status(404).send({message: 'There no articles to show'})

            return res.status(200).send({articles})
        })
     },
     getArticleById: function(req, res){
        var articleId = req.params.id;

        Article.findById(articleId, (error, article) => {

            if (articleId == null) return res.status(404).send({message: 'The article does not exist'})


            if (error) return res.status(500).send({message: 'Error trying to retrieve the document'})

            if (!article) return res.status(404).send({message: 'The article does not exist'})

            return res.status(200).send({article})
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
     updateArticle: function(req, res){
        var articleId = req.params.id
        var update = req.body

        Article.findByIdAndUpdate(articleId, update, {new: true}, (error, articleUpdated) => {

            if (error) return res.status(500).send({message: 'Error trying to update the document'})

            if (!articleUpdated) return res.status(404).send({message: 'Unable to update the document'})

            return res.status(200).send({article: articleUpdated})
        })
     },
     deleteArticle: function(req, res){
        var articleId = req.params.id

        Article.findByIdAndRemove(articleId, (error, articleRemoved) => {

            if (error) return res.status(500).send({message: 'Error trying to delete the document'})

            if (!articleRemoved) return res.status(404).send({message: 'Unable to delete the document'})

            return res.status(200).send({article: articleRemoved})
        })
     },
     uploadImage: function(req, res){
        var articleId = req.params.id
        var fileName = 'Image not uploaded'

        if (req.files){
           
            //Find the file name
            var filePath = req.files.image.path
            var fileSplit = filePath.split('\\')
            var fileName = fileSplit[1]

            //Find file extension to validate
            var extSplit = fileName.split('\.')
            var extName = extSplit[1]

            if (extName == 'png' || extName == 'jpg' || extName == 'jpeg' || extName == 'gif'){

                Article.findByIdAndUpdate(articleId, {image: fileName}, {new: true}, (error, articleUpdated) => {

                    if (error) return res.status(500).send({message: 'Error trying to update the image'})
        
                    if (!articleUpdated) return res.status(404).send({message: 'Unable to update the imagen'})
        
                    return res.status(200).send({article: articleUpdated})
                })
            }else{
            
                fs.unlink(filePath, (error) => {
                    return res.status(200).send({message: 'The file extension is not valid'})
                })
            }

            
        }else {
            return res.status(404).send({
                files: fileName
            })
        }
     }
}
module.exports = controller