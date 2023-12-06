// Import necessary modules and components from React and other files
import React from "react";
import CaloriePageTile from "../components/page-tiles/CaloriePageTile";
import CaloriePageData from "../data/CaloriePageData";

// Define the CaloriesPage component
export default function CaloriesPage() {
  // State to manage the visibility of a new workout
  const [newWorkout] = React.useState(false);

  // Map over CaloriePageData to create CaloriePageTile components
  const tiles = CaloriePageData.map((item) => {
    return (
      <div className="history-page-tile-feed" key={item.id}>
        {/* Display CaloriePageTile component with data from CaloriePageData */}
        <CaloriePageTile
          date={item.date}
          meals={item.meals}
          isLast={item.id === CaloriePageData.length}
          plusButtonClicked={newWorkout}
        />
      </div>
    );
  });

  // Render the CaloriesPage component
  return <div className="history-page">{tiles}</div>;
}
