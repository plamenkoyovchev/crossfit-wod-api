const getAllWorkouts = (req, res) => {
	res.send("Get all workouts");
};

const getWorkout = (req, res) => {
	res.send("Get an existing workout");
};

const createWorkout = (req, res) => {
	res.send("Create a new workout");
};

const updateWorkout = (req, res) => {
	res.send("Update an existing workout");
};

const deleteWorkout = (req, res) => {
	res.send("Delete an existing workout");
};

module.exports = {
	getAllWorkouts,
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
