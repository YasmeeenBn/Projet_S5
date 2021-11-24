const express = require("express");
const router = express.Router();

const scrappingNewsCtrl = require("../controllers/scrappingNewsController");

router.get("/getScrappedNews", scrappingNewsCtrl.getArticleNews1);
//router.get("/putAFDBProjects", Ctrl.putADBProjects);
module.exports = router;