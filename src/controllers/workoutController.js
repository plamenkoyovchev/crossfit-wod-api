const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
	const allWorkouts = workoutService.getAllWorkouts();
	res.send({ status: "OK", data: allWorkouts });
};

const getWorkout = (req, res) => {
	const workout = workoutService.getWorkout();
	res.send("Get an existing workout");
};

const createWorkout = (req, res) => {
	const createdWorkout = workoutService.createWorkout();
	res.send("Create a new workout");
};

const updateWorkout = (req, res) => {
	const updatedWorkout = workoutService.updateWorkout();
	res.send("Update an existing workout");
};

const deleteWorkout = (req, res) => {
	const deletedWorkout = workoutService.deleteWorkout();
	res.send("Delete an existing workout");
};

module.exports = {
	getAllWorkouts,
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
