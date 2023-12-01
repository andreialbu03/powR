import React from "react";
import CaloriePageTile from "../components/page-tiles/CaloriePageTile";
import CaloriePageData from "../data/CaloriePageData";

export default function CaloriesPage() {
  const [newWorkout] = React.useState(false);

  const tiles = CaloriePageData.map((item) => {
    return (
      <div className="history-page-tile-feed" key={item.id}>
        <CaloriePageTile
          date={item.date}
          meals={item.meals}
          isLast={item.id === CaloriePageData.length}
          plusButtonClicked={newWorkout}
        />
      </div>
    );
  });

  return <div className="history-page">{tiles}</div>;
}
