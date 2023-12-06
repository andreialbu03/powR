// Import necessary modules and components from React and other files
import React from "react";
import CloseButton from "../CloseButton";
import NewWorkoutData from "../../data/NewWorkoutData";
import NewWorkoutOptionsButtons from "../NewWorkoutOptionsButton";
import NewWorkoutDropdownOptions from "../NewWorkoutDropdownOptions";
import SetRepsEntryOverlay from "../SetRepsEntryOverlay";

// Import styling for the component
import "./NewWorkoutTile.css";

// Define custom type for NewWorkoutTileProps and Set
type NewWorkoutTileProps = {
  onClose: () => void;
};

type Set = {
  id: number;
  reps: number;
  weight: number;
};

// Define the NewWorkoutTile component
export default function NewWorkoutTile(props: NewWorkoutTileProps) {
  // States to manage the saved workout data, new exercise name, dropdown visibility, selected exercise, and set entry overlay
  const [savedWorkoutData, setSavedWorkoutData] = React.useState(
    NewWorkoutData.exercises
  );
  const [newExerciseName, setNewExerciseName] = React.useState<string>("");
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(false);
  const [selectedExerciseId, setSelectedExerciseId] = React.useState<
    number | null
  >(null);
  const [showSetRepsEntryOverlay, setShowSetRepsEntryOverlay] =
    React.useState(false);

  // Iterate through the savedWorkoutData array and add each list of sets to an array
  const setsArray: Set[][] = [];
  for (let exercise of savedWorkoutData) {
    setsArray.push(exercise.sets);
  }

  const [setsList, setSets] = React.useState<Set[][]>(setsArray);

  // Function to handle entering set reps and show the overlay
  const handleEnterSetReps = () => {
    setShowSetRepsEntryOverlay(true);
    closeDropdown();
  };

  // Function to save set reps to the selected exercise
  const handleSaveSetReps = (weight: number, reps: number) => {
    const newSet = {
      id: Date.now(),
      reps: reps,
      weight: weight,
    };

    if (selectedExerciseId) {
      const updatedSets = [...setsList];
      if (updatedSets[selectedExerciseId - 1]) {
        updatedSets[selectedExerciseId - 1].push(newSet);
      } else {
        updatedSets[selectedExerciseId - 1] = [newSet];
      }
      setSets(updatedSets);
    }
  };

  // Function to handle closing the set reps entry overlay
  const handleOverlayClose = () => {
    setShowSetRepsEntryOverlay(false);
  };

  // Function to toggle the dropdown visibility for a specific exercise
  const toggleDropdown = (exerciseId: number) => {
    setDropdownVisible(!dropdownVisible);
    setSelectedExerciseId(exerciseId);
  };

  // Function to close the dropdown
  const closeDropdown = () => {
    setDropdownVisible(false);
    // setSelectedExerciseId(null);
  };

  // Function to add an exercise to the saved workout data
  const addExercise = () => {
    if (newExerciseName.trim() !== "") {
      const newExercise = {
        id: setsList.length + 1,
        name: newExerciseName.trim(),
        prSet: "NONE",
        sets: [],
      };

      const updatedWorkoutData = [...savedWorkoutData, newExercise];
      setSavedWorkoutData(updatedWorkoutData);
      setNewExerciseName("");
    }
  };

  // Function to remove an exercise from the saved workout data
  const removeExercise = (exerciseId: number) => {
    const updatedWorkoutData = savedWorkoutData.filter(
      (exercise) => exercise.id !== exerciseId
    );
    setSavedWorkoutData(updatedWorkoutData);
    closeDropdown();
  };

  // Render the NewWorkoutTile component
  return (
    <div className="expanded-history-tile-overlay">
      <div className="expanded-history-tile">
        {/* Header with title and close button */}
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date">{NewWorkoutData.date}</h3>
          <CloseButton handleClick={props.onClose} />
        </div>

        {/* Display workout duration */}
        <div className="expanded-history-duration">
          <span>Workout Time: {NewWorkoutData.duration}</span>
        </div>

        {/* Header for the list of exercises */}
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date" style={{ marginTop: "10px" }}>
            Exercises
          </h3>
        </div>

        {/* Display saved exercises and related components */}
        <div className="saved-exercise">
          {savedWorkoutData.map((exercise) => (
            <div key={exercise.id}>
              <div className="history-page-tile-exercises">
                <li>
                  <span className="new-exercise-name">{exercise.name}</span>
                </li>
                <NewWorkoutOptionsButtons
                  handleClick={() => toggleDropdown(exercise.id)}
                />
                {dropdownVisible && selectedExerciseId === exercise.id && (
                  <NewWorkoutDropdownOptions
                    onRemove={() => removeExercise(exercise.id)}
                    onEnterSetReps={handleEnterSetReps}
                    onClose={closeDropdown}
                  />
                )}
                {showSetRepsEntryOverlay && (
                  <SetRepsEntryOverlay
                    onSave={handleSaveSetReps}
                    onClose={handleOverlayClose}
                  />
                )}
              </div>
              <div className="new-workout-sets">
                {setsList[exercise.id - 1] &&
                  setsList[exercise.id - 1].map((set) => (
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
