import React from "react";
import NewWorkout from "../../components/Forms/NewWorkout";
import StrippedRows from "../../components/Tables/StrippedRows";

function Homepage() {
  return (
    <div>
      <NewWorkout />
      <StrippedRows />
    </div>
  );
}

export default Homepage;
