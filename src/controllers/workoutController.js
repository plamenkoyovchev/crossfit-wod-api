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
	const { body } = req;
	if (
		!body.name ||
		!body.mode ||
		!body.equipment ||
		!body.exercises ||
		!body.trainerTips
	) {
		return;
	}

	const newWorkout = {
		name: body.name,
		mode: body.mode,
		equipment: body.equipment,
		exercises: body.exercises,
		trainerTips: body.trainerTips,
	};

	const createdWorkout = workoutService.createWorkout(newWorkout);
	res.status(201).send({ status: "OK", data: createdWorkout });
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
