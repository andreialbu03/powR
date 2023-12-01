import React from "react";
import CloseButton from "../CloseButton";
import RemoveWorkoutButton from "../RemoveWorkoutButton";
import MealDropdown from "../MealDropdown";

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
  const [mealInputs, setMealInputs] = React.useState<{ [key: number]: string }>(
    {}
  );
  const [mealCalories, setMealCalories] = React.useState<{
    [key: number]: string;
  }>({});
  const handleMealCaloriesChange = (mealID: number, value: string) => {
    setMealCalories((prevCalories) => ({ ...prevCalories, [mealID]: value }));
  };

  const addMeal = (mealID: number) => {
    const mealName = mealInputs[mealID] || "";

    if (mealName.trim() !== "") {
      const newMeal = {
        id: Date.now(),
        name: mealName.trim(),
      };

      setSavedMeals((prevMeals) => {
        const updatedMeals = prevMeals.map((meal) =>
          meal.id === mealID
            ? { ...meal, foods: [...meal.foods, newMeal] }
            : meal
        );
        return updatedMeals;
      });

      setMealInputs((prevInputs) => {
        const updatedInputs = { ...prevInputs, [mealID]: "" };
        return updatedInputs;
      });
    }
  };

  const handleMealInputChange = (mealID: number, value: string) => {
    setMealInputs((prevInputs) => ({ ...prevInputs, [mealID]: value }));
  };

  const removeMeal = (foodId: number) => {
    const updatedMealData = savedMeals.map((meal) => ({
      ...meal,
      foods: meal.foods.filter((food) => food.id !== foodId),
    }));

    setSavedMeals(updatedMealData);
  };

  const addCalories = (mealID: number, calories: number) => {
    const selectedCalories = mealCalories[mealID] || "";

    console.log("selected Calories", calories);
    if (selectedCalories !== "") {
      setSavedMeals((prevMeals) => {
        const updatedMeals = prevMeals.map((meal) =>
          meal.id === mealID
            ? { ...meal, calories: parseInt(selectedCalories, 10) }
            : meal
        );
        return updatedMeals;
      });
    }
  };

  const meals = savedMeals.map((meal) => (
    <div key={meal.id} className="meal-container">
      <h3 className="meal-type">{meal.mealName}</h3>

      {meal.foods.map((food) => (
        <div className="history-page-tile-exercises" key={food.id}>
          <li>
            <span>• {food.name}</span>
          </li>
          <RemoveWorkoutButton handleClick={() => removeMeal(food.id)} />
        </div>
      ))}

      <div>
        <input
          type="text"
          value={mealInputs[meal.id] || ""}
          onChange={(e) => handleMealInputChange(meal.id, e.target.value)}
          placeholder="Enter meal name"
          className="modern-input"
        />

        {/* <select
          value={mealCalories[meal.id] || ""}
          onChange={(e) => handleMealCaloriesChange(meal.id, e.target.value)}
          className="modern-input"
        >
          <option value="">Select Calories</option>
          <option value="100">100 calories</option>
          <option value="200">200 calories</option>
        </select> */}
        <div>
          <a className="btn" onClick={() => addMeal(meal.id)}>
            Add Meal
          </a>
          {/* <a className="btn" onClick={() => addCalories(meal.id)}>
            Add Calories
          </a> */}
          <MealDropdown
            onSelect={(calories) => addCalories(meal.id, calories)}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="expanded-history-tile-overlay">
      <div className="expanded-history-tile">
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date">{props.date}</h3>
          <CloseButton handleClick={props.onClose} />
        </div>
        <div className="saved-meals-wrapper">{meals}</div>
      </div>
    </div>
  );
}