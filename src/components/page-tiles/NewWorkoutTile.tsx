import React from "react";
import CloseButton from "../CloseButton";
import NewWorkoutData from "../../data/NewWorkoutData";
import NewWorkoutOptionsButtons from "../NewWorkoutOptionsButton";
import NewWorkoutDropdownOptions from "../NewWorkoutDropdownOptions";
import SetRepsEntryOverlay from "../SetRepsEntryOverlay";
import "./NewWorkoutTile.css";
type NewWorkoutTileProps = {
  onClose: () => void;
};

export default function NewWorkoutTile(props: NewWorkoutTileProps) {
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

  // iterate through the savedWorkoutData array and add each list of sets to an array
  const setsArray = [];
  for (let exercise of savedWorkoutData) {
    setsArray.push(exercise.sets);
  }

  const [setsList, setSets] = React.useState(setsArray);

  const handleEnterSetReps = () => {
    setShowSetRepsEntryOverlay(true);
    closeDropdown();
  };

  const handleSaveSetReps = (
    exerciseId: number,
    sets: number,
    reps: number
  ) => {
    // Handle saving sets and reps (you can update your data structure here)
    // console.log(
    //   "Sets:",
    //   sets,
    //   "Reps:",
    //   reps,
    //   "Exercise ID:",
    //   selectedExerciseId
    // );
    const newSet = {
      id: Date.now(),
      reps: reps,
      weight: sets,
    };

    if (selectedExerciseId) {
      console.log("Exercise ID:", selectedExerciseId, "Set:", newSet);
      //   const updatedSets = [...setsList[selectedExerciseId - 1], newSet];
      //   setSets(setsList);
    }
  };

  const handleOverlayClose = () => {
    setShowSetRepsEntryOverlay(false);
  };

  const toggleDropdown = (exerciseId: number) => {
    setDropdownVisible(!dropdownVisible);
    setSelectedExerciseId(exerciseId);
    // console.log("Exercise ID:", exerciseId);
    // console.log("Exercise ID from selectedExerciseId:", selectedExerciseId);
  };
  //   React.useEffect(() => {
  //     // This code will run after the render is committed
  //     console.log("Exercise ID:", selectedExerciseId);
  //   }, [selectedExerciseId]);

  const closeDropdown = () => {
    setDropdownVisible(false);
    // setSelectedExerciseId(null);
  };

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

  const removeExercise = (exerciseId: number) => {
    const updatedWorkoutData = savedWorkoutData.filter(
      (exercise) => exercise.id !== exerciseId
    );
    setSavedWorkoutData(updatedWorkoutData);
    closeDropdown();
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
                    onSave={(sets, reps) =>
                      handleSaveSetReps(exercise.id, sets, reps)
                    }
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
