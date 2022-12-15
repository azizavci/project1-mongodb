import React, { useState } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";

function NewWorkout() {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleNewWorkout = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setEmptyFields([]);
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card shadow mb-4">
          <div className="card-header">
            <strong className="card-title">Inline Form</strong>
          </div>
          <div className="card-body">
            <form className="form-inline ">
              <label className="sr-only" htmlFor="txt_title">
                Title
              </label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                id="txt_title"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <label className="sr-only" htmlFor="txt_preps">
                Preps
              </label>
              <input
                type="number"
                className="form-control mb-2 mr-sm-2"
                id="txt_preps"
                placeholder="Enter preps count"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
              />
              <label className="sr-only" htmlFor="txt_load">
                Load
              </label>
              <input
                className="form-control mb-2 mr-sm-2"
                id="txt_load"
                onChange={(e) => setLoad(e.target.value)}
                placeholder="Enter load (kg)"
                type="number"
                value={load}
              />

              <button
                type="submit"
                className="btn btn-outline-dark mb-2"
                onClick={handleNewWorkout}
              >
                Submit
              </button>
            </form>
            {error && (
              <div class="alert alert-danger" role="alert">
                <span class="fe fe-minus-circle fe-16 mr-2"></span> {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewWorkout;
