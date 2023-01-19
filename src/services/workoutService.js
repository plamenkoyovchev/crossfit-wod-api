const workoutDAL = require("../database/workoutDAL");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
	const workouts = workoutDAL.getAllWorkouts();
	return workouts;
};

const getWorkout = () => {
	return;
};

const createWorkout = (newWorkout) => {
	const date = new Date().toLocaleString("en-US", { timeZone: "UTC" });
	const workoutToInsert = {
		...newWorkout,
		id: uuid(),
		createdAt: date,
		updatedAt: date,
	};
	const createdWorkout = workoutDAL.createWorkout(workoutToInsert);

	return createdWorkout;
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
