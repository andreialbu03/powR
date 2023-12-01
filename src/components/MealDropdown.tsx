// MealDropdown.tsx
import React, { useState } from "react";

type MealDropdownProps = {
  onSelect: (calories: number) => void;
};

const MealDropdown: React.FC<MealDropdownProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (calories: number) => {
    onSelect(calories);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={handleButtonClick}>Add Calories</button>
      {isOpen && (
        <div className="dropdown-menu">
          <div onClick={() => handleOptionClick(100)}>100 calories</div>
          <div onClick={() => handleOptionClick(200)}>200 calories</div>
        </div>
      )}
    </div>
  );
};

export default MealDropdown;
