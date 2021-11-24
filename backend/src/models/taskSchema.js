const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: {
    type: String,
  },
  status: {
    type: String,
    default: "In progress",
  },
  description: {
    type: String,
  },
  deadline: {
    type: String,
  },
});

module.exports = mongoose.model("Task", taskSchema);
