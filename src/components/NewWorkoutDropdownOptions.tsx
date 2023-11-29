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
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent clicks on the background from triggering onClose
    event.stopPropagation();
  };

  return (
    <div className="new-workout-dropdown-overlay" onClick={onClose}>
      <div
        className="new-workout-dropdown-options"
        onClick={handleOverlayClick}
      >
        <div style={{ color: "white" }} onClick={onRemove}>
          Remove Exercise
        </div>
        <div style={{ color: "white" }} onClick={onEnterSetReps}>
          Enter Weight & Reps
        </div>
      </div>
    </div>
  );
};

export default NewWorkoutDropdownOptions;
