const express = require("express");
const cors = require("cors");
const taskRoutes = require("./src/routes/taskRoutes");
const newsRoutes = require("./src/routes/newsRoute");
const scrappingNewsRoutes = require("./src/routes/ScrappingNewsRoute");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/tasks", taskRoutes);
app.use("/news", newsRoutes);
app.use("/scrappingnews", scrappingNewsRoutes);

// app.get("/", );
app.listen(process.env.PORT, () =>
  console.log(`server is running in port ${process.env.PORT}`)
);

mongoose
  .connect(process.env.DATA_BASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.error("not connected to db"));
