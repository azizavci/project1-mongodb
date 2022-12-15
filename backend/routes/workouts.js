const express = require("express");
const router = express.Router(); //Router için bir nesne oluşturmuş olduk.
const {
  createWorkout,
  getAllWorkouts,
  deleteWorkout,
  updateWorkout,
  getWorkout,
} = require("../controllers/workoutController");

// GET all workouts
router.get("/", getAllWorkouts);

// GET single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// PATCH a workout
router.patch("/:id", updateWorkout);

module.exports = router;
