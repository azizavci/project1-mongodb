import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import NewWorkoutPage from "./pages/NewWorkout/NewWorkoutPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Add/Workout" element={<NewWorkoutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
