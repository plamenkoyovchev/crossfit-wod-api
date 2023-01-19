const express = require("express");
const workoutController = require("../../controllers/workoutController.js");

const router = express.Router();

router
	.get("/", workoutController.getAllWorkouts)
	.post("/", workoutController.createWorkout);

router
	.get("/:workoutId", workoutController.getWorkout)
	.patch("/:workoutId", workoutController.updateWorkout)
	.delete("/:workoutId", workoutController.deleteWorkout);

module.exports = router;
