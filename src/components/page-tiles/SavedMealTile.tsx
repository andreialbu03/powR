// Import necessary modules and components from React and other files
import React from "react";
import CloseButton from "../CloseButton";
import RemoveWorkoutButton from "../RemoveWorkoutButton";
import MealDropdown from "../MealDropdown";

// Define custom MealType, FoodType, and SavedMealTileProps types
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

// Define the SavedMealTile component
export default function SavedMealTile(props: SavedMealTileProps) {
  // State to manage saved meals and input values
  const [savedMeals, setSavedMeals] = React.useState<MealType[]>(props.meals);
  const [mealInputs, setMealInputs] = React.useState<{ [key: number]: string }>(
    {}
  );
  const [mealCalories] = React.useState<{
    [key: number]: string;
  }>({});

  // Function to add a new meal to the list of saved meals
  const addMeal = (mealID: number) => {
    const mealName = mealInputs[mealID] || "";

    // Check if the meal name is not empty
    if (mealName.trim() !== "") {
      const newMeal = {
        id: Date.now(),
        name: mealName.trim(),
      };

      // Update the state with the new meal
      setSavedMeals((prevMeals) => {
        const updatedMeals = prevMeals.map((meal) =>
          meal.id === mealID
            ? { ...meal, foods: [...meal.foods, newMeal] }
            : meal
        );
        return updatedMeals;
      });

      // Clear the input value for the added meal
      setMealInputs((prevInputs) => {
        const updatedInputs = { ...prevInputs, [mealID]: "" };
        return updatedInputs;
      });
    }
  };

  // Function to handle input changes for meal names
  const handleMealInputChange = (mealID: number, value: string) => {
    setMealInputs((prevInputs) => ({ ...prevInputs, [mealID]: value }));
  };

  // Function to remove a food item from a meal
  const removeMeal = (foodId: number) => {
    const updatedMealData = savedMeals.map((meal) => ({
      ...meal,
      foods: meal.foods.filter((food) => food.id !== foodId),
    }));

    setSavedMeals(updatedMealData);
  };

  // Function to add calories to a meal
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

  // Map over saved meals to create meal components
  const meals = savedMeals.map((meal) => (
    <div key={meal.id} className="meal-container">
      {/* Display meal name */}
      <h3 className="meal-type">{meal.mealName}</h3>

      {/* Map over foods in each meal to create food components */}
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
        <div>
          {/* Display the Add Meal button and the calories dropdown */}
          <a className="btn" onClick={() => addMeal(meal.id)}>
            Add Meal
          </a>
          <MealDropdown
            onSelect={(calories) => addCalories(meal.id, calories)}
          />
        </div>
      </div>
    </div>
  ));

  // Render the SavedMealTile component
  return (
    <div className="expanded-history-tile-overlay">
      <div className="expanded-history-tile">
        {/* Display header with date and CloseButton */}
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date">{props.date}</h3>
          <CloseButton handleClick={props.onClose} />
        </div>

        {/* Display the meals */}
        <div className="saved-meals-wrapper">{meals}</div>
      </div>
    </div>
  );
}
