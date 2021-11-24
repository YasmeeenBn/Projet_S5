const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
var cron = require("node-cron");
const cookieParser = require("cookie-parser");
const app = express();

// Routes
const newsRoutes = require("./routes/newsRoute");
const scrappingNewsRoutes = require("./routes/ScrappingNewsRoute");
// const scrappingPlatformRoutes = require("./routes/ScrappingNewsRoute");

// add Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//parse json
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(expressValidator());
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("WELCOME Node 14");
});

//controller
app.use("/news", newsRoutes);

//  scrapping
app.use("/scrappingNews", scrappingNewsRoutes);


module.exports = app;
