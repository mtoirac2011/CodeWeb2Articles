'use strict'

var express = require('express')
var articleController = require('../controller/articleController')

var router = express.Router()

router.get('/home', articleController.home)
router.get('/test', articleController.test)

router.post('/article', articleController.saveArticle)

module.exports = router
