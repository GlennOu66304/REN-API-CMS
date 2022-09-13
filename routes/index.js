var express = require('express');
var router = express.Router();

var { getNavMenu } = require('../controller/getData')
var { getFooter } = require('../controller/getData')
var { getLinks } = require('../controller/getData')
var { getIndexPic } = require('../controller/getData')
var { getHotArticle } = require('../controller/getData')
var { getNewArticle } = require('../controller/getData')
var { getArticle } = require('../controller/getData')
var { getArticleTalk } = require('../controller/getData')
var { getArticles } = require('../controller/getData')
var { viewArticle } = require('../controller/getData')
const util = require('../util/common')

// router.get('/getFooter', function (req, res, next) {
//     res.json(util.getReturnData(0, 'success'));
// });



router.get('/getNavMenu', getNavMenu);
router.get('/getFooter', getFooter);
router.get('/getLinks', getLinks)
router.get('/getIndexPic', getIndexPic)
router.get('/getHotArticle', getHotArticle)
router.get('/getNewArticle', getNewArticle)
router.get('/getArticle/:id', getArticle)
router.get('/getArticleTalk/:id', getArticleTalk)
router.post('/getArticles', getArticles)
router.get('/viewArticle/:id', viewArticle)
module.exports = router;
