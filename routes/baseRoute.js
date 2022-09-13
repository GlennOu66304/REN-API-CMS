var express = require("express");
var router = express.Router();

// controller import

var {
  getNavMenu,
  getFooter,
  getLinks,
  getIndexPic,
  getHotArticle,
  getNewArticle,
  getArticle,
  getArticleTalk,
  getArticles,
  viewArticle,
} = require("../controller/baseControll");

const util = require("../util/common");

// path and controller choose
router.get("/getNavMenu", getNavMenu);
router.get("/getFooter", getFooter);
router.get("/getLinks", getLinks);
router.get("/getIndexPic", getIndexPic);
router.get("/getHotArticle", getHotArticle);
router.get("/getNewArticle", getNewArticle);
router.get("/getArticle/:id", getArticle);
router.get("/getArticleTalk/:id", getArticleTalk);
router.get("/getArticles", getArticles);
router.get("/viewArticle/:id", viewArticle);
module.exports = router;
