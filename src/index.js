const express = require("express");

const workoutV1Router = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", workoutV1Router);

app.listen(PORT, () => {
	console.log(`API is listening on port ${PORT}`);
});
