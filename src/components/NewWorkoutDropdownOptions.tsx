import React from "react";

// Define custom NewWorkoutDropdownOptionsProps type
type NewWorkoutDropdownOptionsProps = {
  onRemove: () => void;
  onEnterSetReps: () => void;
  onClose: () => void;
};

// Define the NewWorkoutDropdownOptions component
const NewWorkoutDropdownOptions: React.FC<NewWorkoutDropdownOptionsProps> = ({
  onRemove,
  onEnterSetReps,
  onClose,
}) => {
  // Handler for clicking on the overlay
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent clicks on the background from triggering onClose
    event.stopPropagation();
  };

  // Render the NewWorkoutDropdownOptions component
  return (
    <div className="new-workout-dropdown-overlay" onClick={onClose}>
      <div
        className="new-workout-dropdown-options"
        onClick={handleOverlayClick}
      >
        {/* Option to remove exercise */}
        <div style={{ color: "white" }} onClick={onRemove}>
          Remove Exercise
        </div>

        {/* Option to enter weight and reps */}
        <div style={{ color: "white" }} onClick={onEnterSetReps}>
          Enter Weight & Reps
        </div>
      </div>
    </div>
  );
};

// Export the NewWorkoutDropdownOptions component
export default NewWorkoutDropdownOptions;
