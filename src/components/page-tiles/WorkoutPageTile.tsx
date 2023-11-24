import React from "react";
import SavedWorkoutTile from "./SavedWorkoutTile";

type ExerciseType = {
  id: number;
  exerciseName: string;
};

type WorkoutPageTileProps = {
  tileTitle: string;
  exercises: ExerciseType[];
  isLast: boolean;
};

export default function WorkoutPageTile(props: WorkoutPageTileProps) {
  const [viewSavedWorkout, setViewSavedWorkout] = React.useState(false);

  function handleViewSavedWorkout() {
    setViewSavedWorkout(!viewSavedWorkout);
  }

  const exercises = props.exercises.map((item) => {
    return (
      <div className="history-page-tile-exercises" key={item.id}>
        <li>
          <span>• {item.exerciseName}</span>
        </li>
      </div>
    );
  });

  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      <h3 className="history-page-tile-date">{props.tileTitle}</h3>
      {exercises}
      <a className="btn" onClick={handleViewSavedWorkout}>
        View/Edit
      </a>
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
