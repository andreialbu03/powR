import React from "react";
import CloseButton from "../CloseButton";
import RemoveWorkoutButton from "../RemoveWorkoutButton";

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

type SavedMealTileProps = {
  date: string;
  meals: MealType[];
  onClose: () => void;
};

export default function SavedMealTile(props: SavedMealTileProps) {
  const [savedMeals, setSavedMeals] = React.useState<MealType[]>(props.meals);
  const [newMealName, setNewMealName] = React.useState<string>("");

  const meals = props.meals.map((meal) => (
    <div>
      <h3 className="meal-type">{meal.mealName}</h3>

      {meal.foods.map((food) => (
        <div className="history-page-tile-exercises" key={meal.id}>
          <li>
            <span>• {food.name}</span>
          </li>
          <RemoveWorkoutButton handleClick={() => removeWorkout(meal.id)} />
        </div>
      ))}
    </div>
  ));

  const removeWorkout = (exerciseId: number) => {
    const updatedWorkoutData = savedMeals.filter(
      (exercise) => exercise.id !== exerciseId
    );
    setSavedMeals(updatedWorkoutData);
  };

  //   const addExercise = () => {
  //     if (newMealName.trim() !== "") {
  //       const newMeal = {
  //         id: Date.now(),
  //         exerciseName: newMealName.trim(),
  //       };

  //       const updatedWorkoutData = [...savedMeals, newMeal];
  //       setSavedMeals(updatedWorkoutData);
  //       setNewMealName("");
  //     }
  //   };

  return (
    <div className="expanded-history-tile-overlay">
      <div className="expanded-history-tile">
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date">{props.date}</h3>
          <CloseButton handleClick={props.onClose} />
        </div>
        <div className="saved-exercise">{meals}</div>
        <div>
          <input
            type="text"
            value={newMealName}
            onChange={(e) => setNewMealName(e.target.value)}
            placeholder="Enter exercise name"
            className="modern-input"
          />
          <a className="btn">Add Exercise</a>
        </div>
      </div>
    </div>
  );
}
