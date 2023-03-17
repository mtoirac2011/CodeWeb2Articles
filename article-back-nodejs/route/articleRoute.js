'use strict'

var express = require('express')
var articleController = require('../controller/articleController')
const multer = require('multer')

var router = express.Router()
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    },

    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const uploads = multer({storage: storage})

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
router.post('/upload-image/', [uploads.single('file0')], articleController.uploadImage)
router.get('/get-image/:image',  articleController.getImageFile)

module.exports = router
