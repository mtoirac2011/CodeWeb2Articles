'use strict'

var express = require('express')
var articleController = require('../controller/articleController')

var router = express.Router()

var multipart = require('connect-multiparty')
var multipartMiddleware = multipart({uploadDir: './uploads'})

router.get('/', articleController.home)
router.get('/home', articleController.home)
router.get('/test', articleController.test)

router.get('/articles', articleController.getArticle)
router.get('/article/:id?', articleController.getArticleById)
router.post('/article', articleController.saveArticle)
router.put('/article/:id', articleController.updateArticle)
router.delete('/article/:id', articleController.deleteArticle)
router.post('/upload-image/:id', multipartMiddleware, articleController.uploadImage)
router.get('/get-image/:image', articleController.getImageFile)

module.exports = router
