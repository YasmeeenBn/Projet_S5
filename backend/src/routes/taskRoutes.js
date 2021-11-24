const express = require("express");
const TaskController = require("../controllers/taskController");

const router = express.Router();

// router.get("/", console.log("yas"));
router.get("/", TaskController.getTask);
router.post("/", TaskController.addTask);
router.delete("/:id", TaskController.deleteTask);
router.put("/:id", TaskController.updateTask);
router.get("/details/:id", TaskController.taskDetails);

module.exports = router;
