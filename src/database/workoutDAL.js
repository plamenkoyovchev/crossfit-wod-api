// Workout Data access layer

const DB = require("./db.json");

const getAllWorkouts = () => {
	return DB.workouts;
};

module.exports = {
	getAllWorkouts,
};
