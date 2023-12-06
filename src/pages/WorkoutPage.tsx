// Import necessary modules and components from React and other files
import React from "react";
import WorkoutPageTile from "../components/page-tiles/WorkoutPageTile";
import NewWorkoutTile from "../components/page-tiles/NewWorkoutTile";
import WorkoutPageData from "../data/WorkoutPageData";
import { GoPlus } from "react-icons/go";

// Import styling for the page
import "./Styles/WorkoutPage.css";

// Define the WorkoutPage component
export default function WorkoutPage() {
  // State to manage the display of the NewWorkoutTile component
  const [newWorkout, setNewWorkout] = React.useState(false);

  // Function to handle the display of the NewWorkoutTile component
  function handleNewWorkout() {
    setNewWorkout(!newWorkout);
  }

  // Map over WorkoutPageData to create WorkoutPageTile components
  const tiles = WorkoutPageData.map((item) => {
    return (
      <div className="history-page-tile-feed" key={item.id}>
        {/* Render WorkoutPageTile component with data from WorkoutPageData */}
        <WorkoutPageTile
          tileTitle={item.tileTitle}
          exercises={item.exercises}
          isLast={item.id === WorkoutPageData.length}
        />
      </div>
    );
  });

  // Render the WorkoutPage component
  return (
    <div className="history-page">
      {/* Render WorkoutPageTile components */}
      {tiles}

      {/* Render the "New Workout" button with the GoPlus icon */}
      <div className="GoPlus-container" onClick={handleNewWorkout}>
        <GoPlus size={40} />
      </div>

      {/* Conditionally render the NewWorkoutTile component */}
      {newWorkout && <NewWorkoutTile onClose={() => setNewWorkout(false)} />}
    </div>
  );
}
