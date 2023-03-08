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
router.post('/save-article', articleController.saveArticle)
router.put('/article/:id', articleController.updateArticle)
router.delete('/article/:id', articleController.deleteArticle)
router.post('/upload/:id', multipartMiddleware, articleController.uploadImage)

module.exports = router
