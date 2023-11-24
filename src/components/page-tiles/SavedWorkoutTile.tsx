import React from "react";
import CloseButton from "../CloseButton";
import RemoveWorkoutButton from "../RemoveWorkoutButton";
import "./SavedWorkoutTile.css";

type Exercise = {
  id: number;
  exerciseName: string;
};

type SavedWorkoutTileProps = {
  tileTitle: string;
  savedWorkoutData: Exercise[];
  onClose: () => void;
};

export default function SavedWorkoutTile(props: SavedWorkoutTileProps) {
  const [savedWorkoutData, setSavedWorkoutData] = React.useState<Exercise[]>(
    props.savedWorkoutData
  );

  const [newExerciseName, setNewExerciseName] = React.useState<string>("");

  const removeWorkout = (exerciseId: number) => {
    const updatedWorkoutData = savedWorkoutData.filter(
      (exercise) => exercise.id !== exerciseId
    );
    setSavedWorkoutData(updatedWorkoutData);
  };

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

  return (
    <div className="expanded-history-tile-overlay">
      <div className="expanded-history-tile">
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date">{props.tileTitle}</h3>
          <CloseButton handleClick={props.onClose} />
        </div>
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
