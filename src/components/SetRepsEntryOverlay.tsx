import React from "react";
import "./SetRepsEntryOverlay.css";

type SetRepsEntryOverlayProps = {
  onSave: (weight: number, reps: number) => void;
  onClose: () => void;
};

const SetRepsEntryOverlay: React.FC<SetRepsEntryOverlayProps> = ({
  onSave,
  onClose,
}) => {
  const [weight, setWeight] = React.useState<number>(0);
  const [reps, setReps] = React.useState<number>(0);

  const handleSave = () => {
    if (weight >= 0 && reps > 0) {
      onSave(weight, reps);
      onClose();
    } else {
      // Display an error message or alert
      alert("Please enter valid values for Weight and Reps.");
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setWeight(value);
    }
  };

  const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Ensure the entered value is positive and greater than 0
    if (!isNaN(value) && value > 0) {
      setReps(value);
    }
  };

  return (
    <div className="set-reps-entry-overlay">
      <div className="set-reps-entry-content">
        <label style={{ color: "white" }}>
          Weight:
          <input type="number" onChange={handleWeightChange} />
        </label>
        <label style={{ color: "white" }}>
          Reps:
          <input type="number" onChange={handleRepsChange} />
        </label>
        {/* <button onClick={handleSave}>Save</button> */}
        <a className="btn" onClick={handleSave} style={{ color: "white" }}>
          Save
        </a>
      </div>
    </div>
  );
};

export default SetRepsEntryOverlay;
