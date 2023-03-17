'use strict'
var Article = require('../model/articleModel')
var fs = require('fs')
const path = require('path')

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
        if (params.image){
            article.image = params.image
        }else{
            article.image = null
        }
        
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
       //Name of the file
       let filename = req.file.originalname;

       //File fileext
       let file_split = filename.split('\.')
       let fileext = file_split[1]

       console.log(fileext)

       
       //Check correct fileext
       if (fileext !== 'png' && fileext !== 'jpg' && fileext !== 'jpeg' && fileext !== 'gif'){

            fs.unlink(req.file.path, (error) => {
                return res.status(400).send({
                    status: 'Error',
                    message: 'Image format not permitted',
                    archivo: fileext,
                    filename: filename
                })
            })
       }else{
        return res.status(200).send({
            status: 'success',
            files: req.file
        })
       }

     },
     getImageFile: function(req, res){
        var file = req.params.image;
        var path_file = './uploads/' + file;

        fs.exists(path_file, (exists) => {
            if (exists){
                return res.sendFile(path.resolve(path_file))
            }else{
                return res.status(200).send({
                    message: "The image doesn't exist"
                })
            }
        })
     }
}
module.exports = controller