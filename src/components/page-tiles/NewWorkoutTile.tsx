import React from "react";
import CloseButton from "../CloseButton";
import NewWorkoutData from "../../data/NewWorkoutData";
import NewWorkoutOptionsButtons from "../NewWorkoutOptionsButton";
import "./NewWorkoutTile.css";

type NewWorkoutTileProps = {
  onClose: () => void;
};

export default function NewWorkoutTile(props: NewWorkoutTileProps) {
  const [savedWorkoutData, setSavedWorkoutData] = React.useState(
    NewWorkoutData.exercises
  );
  const [newExerciseName, setNewExerciseName] = React.useState<string>("");

  const addExercise = () => {
    if (newExerciseName.trim() !== "") {
      const newExercise = {
        id: Date.now(),
        name: newExerciseName.trim(),
        prSet: "NONE",
        sets: [],
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
          <h3 className="history-page-tile-date">{NewWorkoutData.date}</h3>
          <CloseButton handleClick={props.onClose} />
        </div>
        <div className="expanded-history-duration">
          <span>Workout Time: {NewWorkoutData.duration}</span>
        </div>
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date" style={{ marginTop: "10px" }}>
            Exercises
          </h3>
        </div>
        <div className="saved-exercise">
          {savedWorkoutData.map((exercise) => (
            <div key={exercise.id}>
              <div className="history-page-tile-exercises">
                <li>
                  <span className="new-exercise-name">{exercise.name}</span>
                </li>
                <NewWorkoutOptionsButtons handleClick={() => null} />
              </div>
              <div className="new-workout-sets">
                {exercise.sets &&
                  exercise.sets.map((set) => (
                    <div className="history-page-tile-exercises" key={set.id}>
                      <li>
                        <span>• {`${set.weight} lb x ${set.reps}`}</span>
                      </li>
                    </div>
                  ))}
              </div>
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
