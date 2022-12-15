import React, { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";

function StrippedRows() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  const handleDeleteWorkout = async (workout) => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Striped rows</h5>

        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="chall"
                  />
                  <label className="custom-control-label" htmlFor="d1"></label>
                </div>
              </th>
              <th>ID</th>
              <th>Title</th>
              <th>Reps</th>
              <th>Load</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {workouts &&
              workouts.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={index}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={index}
                      ></label>
                    </div>
                  </td>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{item.reps} Reps</td>
                  <td>{item.load} kgs</td>
                  <td>
                    {item &&
                      formatDistanceToNow(new Date(item.createdAt), {
                        addSuffix: true,
                      })}
                  </td>

                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-sm dropdown-toggle"
                        type="button"
                        id={item._id}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="text-muted sr-only">Action</span>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dr1"
                      >
                        <span
                          className="dropdown-item"
                          onClick={() => handleDeleteWorkout(item)}
                        >
                          Edit
                        </span>
                        <a className="dropdown-item" href="/">
                          Remove
                        </a>
                        <a className="dropdown-item" href="/">
                          Assign
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StrippedRows;
