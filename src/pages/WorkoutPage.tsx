import React from "react";
import WorkoutPageTile from "../components/page-tiles/WorkoutPageTile";
import NewWorkoutTile from "../components/page-tiles/NewWorkoutTile";
import WorkoutPageData from "../data/WorkoutPageData";
import { GoPlus } from "react-icons/go";
import "./Styles/WorkoutPage.css";

export default function WorkoutPage() {
  const [newWorkout, setNewWorkout] = React.useState(false);

  function handleNewWorkout() {
    setNewWorkout(!newWorkout);
  }

  const tiles = WorkoutPageData.map((item) => {
    return (
      <div className="history-page-tile-feed" key={item.id}>
        <WorkoutPageTile
          tileTitle={item.tileTitle}
          exercises={item.exercises}
          isLast={item.id === WorkoutPageData.length}
        />
      </div>
    );
  });

  return (
    <div className="history-page">
      {tiles}
      <div className="GoPlus-container" onClick={handleNewWorkout}>
        <GoPlus size={40} />
      </div>
      {newWorkout && <NewWorkoutTile onClose={() => setNewWorkout(false)} />}
    </div>
  );
}
