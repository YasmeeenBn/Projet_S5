var Task = require("../models/taskSchema");
const mongoose = require("mongoose");

exports.getTask = async (req, res, next) => {
  let items = await Task.find().sort({ name: 1 });
  res.status(200).json(items);
};

exports.addTask = async (req, res, next) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Task.deleteOne({ _id: id });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.taskDetails = async (req, res, next) => {
  const id = req.params.id;
  const task_find = await Task.findById(id);
  res.status(200).json(task_find);
};

exports.updateTask = async (req, res, next) => {
  const { id } = req.params;
  if (req.body.name == "") req.body.name = null;
  if (req.body.description == "") req.body.description = null;
  if (req.body.deadline == "") req.body.deadline = null;
  if (req.body.status == "") req.body.status = null;
  mongoose.set("useFindAndModify", false);
  Task.findByIdAndUpdate(id, req.body, function (err) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({
        message: "Task updated successfully",
      });
    }
  });
};
