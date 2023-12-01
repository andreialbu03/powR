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

  const addMeal = (mealID: number) => {
    if (newMealName.trim() !== "") {
      const newMeal = {
        id: Date.now(),
        name: newMealName.trim(),
      };

      console.log("savedMeals", savedMeals, "mealID", mealID);

      savedMeals[mealID - 1].foods.push(newMeal);
      setSavedMeals(savedMeals);
      setNewMealName("");
    }
  };

  const meals = savedMeals.map((meal) => (
    <div>
      <h3 className="meal-type">{meal.mealName}</h3>

      {meal.foods.map((food) => (
        <div className="history-page-tile-exercises" key={meal.id}>
          <li>
            <span>• {food.name}</span>
          </li>
          <RemoveWorkoutButton handleClick={() => removeMeal(food.id)} />
        </div>
      ))}

      <div>
        <input
          type="text"
          value={newMealName}
          onChange={(e) => setNewMealName(e.target.value)}
          placeholder="Enter meal name"
          className="modern-input"
        />
        <div>
          <a className="btn" onClick={() => addMeal(meal.id)}>
            Add Meal
          </a>
          <a className="btn">Add Calories</a>
        </div>
      </div>
    </div>
  ));

  const removeMeal = (foodId: number) => {
    const updatedMealData = savedMeals.map((meal) => ({
      ...meal,
      foods: meal.foods.filter((food) => food.id !== foodId),
    }));

    console.log("updatedWorkoutData", updatedMealData);
    setSavedMeals(updatedMealData);
  };

  return (
    <div className="expanded-history-tile-overlay">
      <div className="expanded-history-tile">
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date">{props.date}</h3>
          <CloseButton handleClick={props.onClose} />
        </div>
        <div className="saved-exercise">{meals}</div>
        {/* <div>
          <input
            type="text"
            value={newMealName}
            onChange={(e) => setNewMealName(e.target.value)}
            placeholder="Enter exercise name"
            className="modern-input"
          />
          <a className="btn">Add Exercise</a>
        </div> */}
      </div>
    </div>
  );
}
