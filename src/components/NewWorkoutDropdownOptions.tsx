// NewWorkoutDropdownOptions.tsx

import React from "react";

type NewWorkoutDropdownOptionsProps = {
  onRemove: () => void;
  onEnterSetReps: () => void;
  onClose: () => void;
};

const NewWorkoutDropdownOptions: React.FC<NewWorkoutDropdownOptionsProps> = ({
  onRemove,
  onEnterSetReps,
  onClose,
}) => {
  return (
    <div className="new-workout-dropdown-overlay">
      <div className="new-workout-dropdown-options">
        <div onClick={onRemove}>Remove Exercise</div>
        <div onClick={onEnterSetReps}>Enter Set/Reps</div>
      </div>
      <div
        className="new-workout-dropdown-overlay-background"
        onClick={onClose}
      />
    </div>
  );
};

export default NewWorkoutDropdownOptions;
