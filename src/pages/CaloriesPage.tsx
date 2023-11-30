import React from "react";
import CaloriePageTile from "../components/page-tiles/CaloriePageTile";
import CaloriePageData from "../data/CaloriePageData";
import { GoPlus } from "react-icons/go";

export default function CaloriesPage() {
  const [newWorkout, setNewWorkout] = React.useState(false);

  function handleNewWorkout() {
    setNewWorkout(!newWorkout);
  }

  const tiles = CaloriePageData.map((item) => {
    return (
      <div className="history-page-tile-feed" key={item.id}>
        <CaloriePageTile
          date={item.date}
          meals={item.meals}
          isLast={item.id === CaloriePageData.length}
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
      {/* {newWorkout && <NewWorkoutTile onClose={() => setNewWorkout(false)} />} */}
    </div>
  );
}
