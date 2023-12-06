// Import necessary modules and components from React and other files
import React from "react";
import "./SetRepsEntryOverlay.css";

// Define custom SetRepsEntryOverlayProps type
type SetRepsEntryOverlayProps = {
  onSave: (weight: number, reps: number) => void;
  onClose: () => void;
};

// Define the SetRepsEntryOverlay component
const SetRepsEntryOverlay: React.FC<SetRepsEntryOverlayProps> = ({
  onSave,
  onClose,
}) => {
  // State to track entered weight and reps
  const [weight, setWeight] = React.useState<number>(0);
  const [reps, setReps] = React.useState<number>(0);

  // Handler for saving the entered weight and reps
  const handleSave = () => {
    // Handler for saving the entered weight and reps
    if (weight >= 0 && reps > 0) {
      // Call the onSave callback with entered weight and reps and close the overlay
      onSave(weight, reps);
      onClose();
    } else {
      // Display an error message or alert
      alert("Please enter valid values for Weight and Reps.");
    }
  };

  // Handler for updating weight on input change
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Ensure the entered value is a non-negative number
    if (!isNaN(value) && value >= 0) {
      setWeight(value);
    }
  };

  // Handler for updating reps on input change
  const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Ensure the entered value is positive and greater than 0
    if (!isNaN(value) && value > 0) {
      setReps(value);
    }
  };

  // Render the SetRepsEntryOverlay component
  return (
    <div className="set-reps-entry-overlay">
      <div className="set-reps-entry-content">
        {/* Input for entering weight */}
        <label style={{ color: "white" }}>
          Weight:
          <input type="number" onChange={handleWeightChange} />
        </label>

        {/* Input for entering reps */}
        <label style={{ color: "white" }}>
          Reps:
          <input type="number" onChange={handleRepsChange} />
        </label>

        {/* Save button to save entered values */}
        <a className="btn" onClick={handleSave} style={{ color: "white" }}>
          Save
        </a>
      </div>
    </div>
  );
};

// Export the SetRepsEntryOverlay component
export default SetRepsEntryOverlay;
