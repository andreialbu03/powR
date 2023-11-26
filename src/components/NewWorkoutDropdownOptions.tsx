// NewWorkoutDropdownOptions.tsx

import React from "react";

type NewWorkoutDropdownOptionsProps = {
  onRemove: () => void;
  onEnterSetReps: () => void;
};

const NewWorkoutDropdownOptions: React.FC<NewWorkoutDropdownOptionsProps> = ({
  onRemove,
  onEnterSetReps,
}) => {
  return (
    <div className="new-workout-dropdown-options">
      <div onClick={onRemove}>Remove Exercise</div>
      <div onClick={onEnterSetReps}>Enter Set/Reps</div>
    </div>
  );
};

export default NewWorkoutDropdownOptions;
