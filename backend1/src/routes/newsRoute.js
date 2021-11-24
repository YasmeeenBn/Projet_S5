const express = require("express");
const router = express.Router();

const newsCtrl = require("../controllers/newsController");

router.post(
  "/",
  newsCtrl.addNews
);

// router.get(
//   "/newsDetailData/:news_id",
//   newsCtrl.newsDetailData
// );

router.delete("/:id", newsCtrl.deleteNews);
router.get("/news_by_id/:id", newsCtrl.news_by_id);

// router.put(
//   "/:projectId",
//   uploadMulter.single("projectImage"),
//   projectpreprodCtrl.updateProject
// );


module.exports = router;
