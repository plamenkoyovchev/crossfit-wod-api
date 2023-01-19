const workoutDAL = require("../database/workoutDAL");

const getAllWorkouts = () => {
	const workouts = workoutDAL.getAllWorkouts();
	return workouts;
};

const getWorkout = () => {
	return;
};

const createWorkout = () => {
	return;
};

const updateWorkout = () => {
	return;
};

const deleteWorkout = () => {
	return;
};

module.exports = {
	getAllWorkouts,
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
