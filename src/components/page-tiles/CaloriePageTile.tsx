// Import necessary modules and components from React and other files
import React from "react";
import SavedMealTile from "./SavedMealTile";
import { GoPlus } from "react-icons/go";

// Import styling for the page
import "./CaloriePageTile.css";

// Define custom MealType, FoodType, and CaloriePageTileProps types
type MealType = {
  id: number;
  mealName: string;
  calories: number;
  foods: FoodType[];
};

type FoodType = {
  id: number;
  name: string;
};

type CaloriePageTileProps = {
  date: string;
  meals: MealType[];
  isLast: boolean;
  plusButtonClicked: boolean;
};

// Define the CaloriePageTile component
export default function CaloriePageTile(props: CaloriePageTileProps) {
  // State to manage the visibility of a saved workout
  const [viewSavedWorkout, setViewSavedWorkout] = React.useState(false);

  // Function to toggle the visibility of a saved workout
  function handleViewSavedWorkout() {
    setViewSavedWorkout(!viewSavedWorkout);
  }

  // Calculate total calories from all meals
  const totalCalories = props.meals.reduce((acc, curr) => {
    return acc + curr.calories;
  }, 0);

  // Effect to handle changes in the plusButtonClicked prop
  React.useEffect(() => {}, [props.plusButtonClicked]);

  // Map over meals to create meal components
  const meals = props.meals.map((item) => {
    // Map over foods in each meal to create food components
    const foods = item.foods.map((food) => {
      return (
        <div className="history-page-tile-exercises" key={food.id}>
          <li>
            {/* Display food name */}
            <span>• {food.name}</span>
          </li>
        </div>
      );
    });

    return (
      <div key={item.id}>
        {/* Display meal name */}
        <h3 className="meal-type">{item.mealName}</h3>
        {foods}
        {/* Display total calories for the meal */}
        <span className="total-calories">Total Calories: {item.calories}</span>
      </div>
    );
  });

  // Render the CaloriePageTile component
  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      {/* Display date */}
      <h3 className="history-page-tile-date">{props.date}</h3>

      {/* Display total daily calories */}
      <span className="total-daily-calories">
        Total Daily Calories: {totalCalories}
      </span>

      {/* Display meals */}
      {meals}

      {/* Display View/Edit button */}
      <a className="btn" onClick={handleViewSavedWorkout}>
        View/Edit
      </a>

      {/* Conditionally display SavedMealTile component */}
      {viewSavedWorkout && (
        <SavedMealTile
          date={props.date}
          meals={props.meals}
          onClose={() => setViewSavedWorkout(false)}
        />
      )}

      {/* Display GoPlus icon if it's the last tile */}
      {props.isLast && (
        <div className="GoPlus-container" onClick={handleViewSavedWorkout}>
          <GoPlus size={40} />
        </div>
      )}
    </div>
  );
}
