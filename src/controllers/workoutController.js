const {
	getAllWorkouts,
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
} = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
	const allWorkouts = getAllWorkouts();
	res.send("Get all workouts");
};

const getWorkout = (req, res) => {
	const workout = getWorkout();
	res.send("Get an existing workout");
};

const createWorkout = (req, res) => {
	const createdWorkout = createWorkout();
	res.send("Create a new workout");
};

const updateWorkout = (req, res) => {
	const updatedWorkout = updateWorkout();
	res.send("Update an existing workout");
};

const deleteWorkout = (req, res) => {
	const deletedWorkout = deleteWorkout();
	res.send("Delete an existing workout");
};

module.exports = {
	getAllWorkouts,
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
