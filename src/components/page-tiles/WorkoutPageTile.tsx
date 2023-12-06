// Import necessary modules and components from React and other files
import React from "react";
import SavedWorkoutTile from "./SavedWorkoutTile";

// Define custom types for Exercise and WorkoutPageTileProps
type ExerciseType = {
  id: number;
  exerciseName: string;
};

type WorkoutPageTileProps = {
  tileTitle: string;
  exercises: ExerciseType[];
  isLast: boolean;
};

// Define the WorkoutPageTile component
export default function WorkoutPageTile(props: WorkoutPageTileProps) {
  // State to manage the display of the SavedWorkoutTile component
  const [viewSavedWorkout, setViewSavedWorkout] = React.useState(false);

  // Function to handle the display of the SavedWorkoutTile component
  function handleViewSavedWorkout() {
    setViewSavedWorkout(!viewSavedWorkout);
  }

  // Map over exercises in props to create list items for each exercise
  const exercises = props.exercises.map((item) => {
    return (
      <div className="history-page-tile-exercises" key={item.id}>
        <li>
          <span>• {item.exerciseName}</span>
        </li>
      </div>
    );
  });

  // Render the WorkoutPageTile component
  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      {/* Render the title of the workout tile */}
      <h3 className="history-page-tile-date">{props.tileTitle}</h3>

      {/* Render the list of exercises */}
      {exercises}

      {/* Render a button to view/edit the saved workout */}
      <a className="btn" onClick={handleViewSavedWorkout}>
        View/Edit
      </a>

      {/* Conditionally render the SavedWorkoutTile component */}
      {viewSavedWorkout && (
        <SavedWorkoutTile
          tileTitle={props.tileTitle}
          savedWorkoutData={props.exercises}
          onClose={() => setViewSavedWorkout(false)}
        />
      )}
    </div>
  );
}
