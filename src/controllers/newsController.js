const mongoose = require("mongoose");
const { request } = require("../app");
var news = require("../models/news");

// get news by code
exports.news_by_id = async (req, res, next) => {
  let item = await News.findOne({ id: req.params.id.toUpperCase() });
  res.status(200).json(item);
  console.log(item);
};

exports.newsDetailData = async (req, res, next) => {
  //get news id from URL
  const _id = req.params.news_id;
  const news_find = await news
    .findById(_id)
    // .populate({ path: "country", model: "Country" })
  res.status(200).json(news_find);
};

exports.addNews = async (req, res, next) => {
  const news = new News(req.body);
  if (req.file) news.image_url = req.file.path;
  try {
    await news.save();
    res.status(201).json(proj);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteNews = async (req, res, next) => {
  const id = req.params.id;
  try {
    await news.deleteOne({ _id: id });
    res.status(200).json({ message: "news deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateNews = async (req, res, next) => {
  const { newsId } = req.params;
  if (req.file) req.body.image_url = req.file.path;
  if (req.body.description == "") req.body.description = null;
  mongoose.set("useFindAndModify", false);
  project.findByIdAndUpdate(newsId, req.body, function (err) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({
        message: "news updated successfully",
      });
    }
  });
};




