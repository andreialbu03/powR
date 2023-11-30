import React from "react";
import "./CaloriePageTile.css";

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
};

export default function CaloriePageTile(props: CaloriePageTileProps) {
  const [viewSavedWorkout, setViewSavedWorkout] = React.useState(false);

  function handleViewSavedWorkout() {
    setViewSavedWorkout(!viewSavedWorkout);
  }

  const totalCalories = props.meals.reduce((acc, curr) => {
    return acc + curr.calories;
  }, 0);

  const meals = props.meals.map((item) => {
    const foods = item.foods.map((food) => {
      return (
        <div className="history-page-tile-exercises" key={food.id}>
          <li>
            <span>• {food.name}</span>
          </li>
        </div>
      );
    });

    return (
      <div key={item.id}>
        <h3 className="meal-type">{item.mealName}</h3>
        {foods}
        <span className="total-calories">Total Calories: {item.calories}</span>
      </div>
    );
  });

  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      <h3 className="history-page-tile-date">{props.date}</h3>
      <span className="total-daily-calories">
        Total Daily Calories: {totalCalories}
      </span>
      {meals}
      <a className="btn" onClick={handleViewSavedWorkout}>
        View/Edit
      </a>
      {/* {viewSavedWorkout && (
        <SavedWorkoutTile
          tileTitle={props.tileTitle}
          savedWorkoutData={props.exercises}
          onClose={() => setViewSavedWorkout(false)}
        />
      )} */}
    </div>
  );
}
