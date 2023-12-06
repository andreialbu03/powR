// Import necessary modules and components from React and other files
import React from "react";
import CloseButton from "../CloseButton";
import RemoveWorkoutButton from "../RemoveWorkoutButton";

// Import styling for the component
import "./SavedWorkoutTile.css";

// Define custom type for Exercise and SavedWorkoutTileProps
type Exercise = {
  id: number;
  exerciseName: string;
};

type SavedWorkoutTileProps = {
  tileTitle: string;
  savedWorkoutData: Exercise[];
  onClose: () => void;
};

// Define the SavedWorkoutTile component
export default function SavedWorkoutTile(props: SavedWorkoutTileProps) {
  // States to manage the saved workout data and the input for adding a new exercise
  const [savedWorkoutData, setSavedWorkoutData] = React.useState<Exercise[]>(
    props.savedWorkoutData
  );
  const [newExerciseName, setNewExerciseName] = React.useState<string>("");

  // Function to remove an exercise from the saved workout data
  const removeWorkout = (exerciseId: number) => {
    const updatedWorkoutData = savedWorkoutData.filter(
      (exercise) => exercise.id !== exerciseId
    );
    setSavedWorkoutData(updatedWorkoutData);
  };

  // Function to add an exercise to the saved workout data
  const addExercise = () => {
    if (newExerciseName.trim() !== "") {
      const newExercise = {
        id: Date.now(),
        exerciseName: newExerciseName.trim(),
      };

      const updatedWorkoutData = [...savedWorkoutData, newExercise];
      setSavedWorkoutData(updatedWorkoutData);
      setNewExerciseName("");
    }
  };

  // Render the SavedWorkoutTile component
  return (
    <div className="expanded-history-tile-overlay">
      <div className="expanded-history-tile">
        {/* Header with title and close button */}
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date">{props.tileTitle}</h3>
          <CloseButton handleClick={props.onClose} />
        </div>

        {/* Display saved exercises and remove workout buttons */}
        <div className="saved-exercise">
          {savedWorkoutData.map((exercise) => (
            <div className="history-page-tile-exercises" key={exercise.id}>
              <li>
                <span>• {exercise.exerciseName}</span>
              </li>
              <RemoveWorkoutButton
                handleClick={() => removeWorkout(exercise.id)}
              />
            </div>
          ))}
        </div>

        {/* Input for adding a new exercise */}
        <div>
          <input
            type="text"
            value={newExerciseName}
            onChange={(e) => setNewExerciseName(e.target.value)}
            placeholder="Enter exercise name"
            className="modern-input"
          />
          <a className="btn" onClick={addExercise}>
            Add Exercise
          </a>
        </div>
      </div>
    </div>
  );
}
