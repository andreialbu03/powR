import React from "react";
import "./SetRepsEntryOverlay.css";

type SetRepsEntryOverlayProps = {
  onSave: (sets: number, reps: number) => void;
  onClose: () => void;
};

const SetRepsEntryOverlay: React.FC<SetRepsEntryOverlayProps> = ({
  onSave,
  onClose,
}) => {
  const [sets, setSets] = React.useState<number>(0);
  const [reps, setReps] = React.useState<number>(0);

  const handleSave = () => {
    onSave(sets, reps);
    onClose();
  };

  return (
    <div className="set-reps-entry-overlay">
      <div className="set-reps-entry-content">
        <label>
          Sets:
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(Number(e.target.value))}
          />
        </label>
        <label>
          Reps:
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(Number(e.target.value))}
          />
        </label>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SetRepsEntryOverlay;
