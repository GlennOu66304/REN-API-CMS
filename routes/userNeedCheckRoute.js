var express = require("express");
var router = express.Router();
//  import controller
var {
  articleTalk,
  getUserInfo,
  changeUserInfo,
  sendMail,
  getMails,
  getUserMail,
  getArticleType,
  articleLike,
  articleCollection,
  getCollection,
} = require("../controller/userNeedCheckControll");

router.post("/article/talk", articleTalk);
router.get("/info/:username", getUserInfo);
router.post("/changeInfo", changeUserInfo);
router.post("/mail/:username", sendMail);
router.get("/mailsGet", getMails);
router.get("/mailsGet/:id", getUserMail);
router.get("/getArticleType", getArticleType);
router.get("/like/:id/:like", articleLike);
router.get("/save/:id", articleCollection);
router.get("/saveList", getCollection);

module.exports = router;
