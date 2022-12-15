import React from "react";
import { format } from 'date-fns' 

function SimpleTable({ data }) {
  
  console.log(data);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Simple Table</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Reps</th>
              <th>Load</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item,index) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{item.reps} Reps</td>
                  <td>{item.load} kgs</td>
                  <td>{format(new Date(item.createdAt), 'dd/mm/yyyy')}</td>
                  <td>
                    <span className="badge badge-pill badge-warning">Hold</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SimpleTable;
