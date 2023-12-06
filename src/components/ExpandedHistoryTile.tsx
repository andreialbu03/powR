// Import component from file
import CloseButton from "./CloseButton";

// Define custom ExerciseType and ExpandedHistoryTileProps types
type ExerciseType = {
  id: number;
  name: string;
  prSet: string;
  sets?: {
    id: number;
    reps: number;
    weight: number | string;
  }[];
};

type ExpandedHistoryTileProps = {
  date: string;
  duration: string;
  exercises: ExerciseType[];
  onClose: () => void;
};

// Define the ExpandedHistoryTile component
export default function ExpandedHistoryTile(props: ExpandedHistoryTileProps) {
  // Destructure props to extract exercises and onClose
  const { exercises, onClose } = props;

  // Render the ExpandedHistoryTile component
  return (
    <div className="expanded-history-tile-overlay">
      <div className="expanded-history-tile">
        {/* Display header with date and CloseButton */}
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date">{props.date}</h3>
          <CloseButton handleClick={onClose} />
        </div>

        {/* Display workout duration */}
        <div className="expanded-history-duration">
          <span>Workout Time: {props.duration}</span>
        </div>

        {/* Display exercises and sets */}
        <div>
          {exercises.map((exercise) => (
            <div key={exercise.id}>
              {/* Display exercise name */}
              <span className="history-page-tile-header">{exercise.name}</span>

              {/* Display sets for the exercise if available */}
              {exercise.sets &&
                exercise.sets.map((set) => (
                  <div className="history-page-tile-exercises" key={set.id}>
                    <li>
                      {/* Display set details */}
                      <span>• {`${set.weight} lb x ${set.reps}`}</span>
                    </li>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
