var express = require("express");
var router = express.Router();
// import controller
var {
  setArticle,
  showArticle,
  setArticleType,
  setLinks,
  setFooter,
  setNavMenu,
  setIndexPic,
  getAllUser,
  stopLogin,
} = require("../controller/adminControll");

router.post("/setArticle", setArticle);
router.post("/showArticle", showArticle);
router.post("/setArticleType", setArticleType);
router.post("/setLinks", setLinks);
router.post("/setFooter", setFooter);
router.post("/changeNav", setNavMenu);
router.post("/setIndexPic", setIndexPic);
router.get("/getAllUser", getAllUser);
router.get("/stopLogin/:id", stopLogin);
module.exports = router;
