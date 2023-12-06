// Import React and useState from React
import React, { useState } from "react";

// Define the MealDropdownProps type, specifying the onSelect callback
type MealDropdownProps = {
  onSelect: (calories: number) => void;
};

// Define the MealDropdown component
const MealDropdown: React.FC<MealDropdownProps> = ({ onSelect }) => {
  // State to track the dropdown's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown's visibility
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle selecting an option and close the dropdown
  const handleOptionClick = (calories: number) => {
    onSelect(calories);
    setIsOpen(false);
  };

  // Render the MealDropdown component
  return (
    <div className="dropdown">
      <button onClick={handleButtonClick}>Add Calories</button>
      {isOpen && (
        <div className="dropdown-menu">
          {/* Options with calorie values; each one triggers the onSelect callback */}
          <div onClick={() => handleOptionClick(100)}>100 calories</div>
          <div onClick={() => handleOptionClick(200)}>200 calories</div>
          <div onClick={() => handleOptionClick(200)}>300 calories</div>
          <div onClick={() => handleOptionClick(200)}>400 calories</div>
          <div onClick={() => handleOptionClick(200)}>500 calories</div>
          <div onClick={() => handleOptionClick(200)}>600 calories</div>
          <div onClick={() => handleOptionClick(200)}>700 calories</div>
          <div onClick={() => handleOptionClick(200)}>800 calories</div>
        </div>
      )}
    </div>
  );
};

// Export the MealDropdown component
export default MealDropdown;
