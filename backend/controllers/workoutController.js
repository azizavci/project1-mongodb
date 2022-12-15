const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GETALL workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// GET A single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id type" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json({ data: workout, message: "A single workout listed!" });
};

// CREATE new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // error handling
  let emptyFields = [];
  if (!title || title=='') {
    emptyFields.push("title");
  }
  if (!reps || reps==0) {
    emptyFields.push("reps");
  }
  if (!load || load == 0) {
    emptyFields.push("load");
  }

  if(emptyFields.length>0){return res.status(400).json({error:'Please fill in all the fields.',emptyFields})}

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json({ data: workout, message: "A workout created!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id type" });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json({ data: workout, message: "A workout deleted!" });
};

// UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id type" });
  }

  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json({
    data: workout,
    updatedData: { ...req.body },
    message: "A workout updated!",
  });
};

var aziz=1;
module.exports = {
  createWorkout,
  getAllWorkouts,
  deleteWorkout,
  updateWorkout,
  getWorkout,
};

