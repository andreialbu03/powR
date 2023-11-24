import CloseButton from "./CloseButton";

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

export default function ExpandedHistoryTile(props: ExpandedHistoryTileProps) {
  const { exercises, onClose } = props;

  return (
    <div className="expanded-history-tile-overlay">
      <div className="expanded-history-tile">
        <div className="expanded-tile-header">
          <h3 className="history-page-tile-date">{props.date}</h3>
          <CloseButton handleClick={onClose} />
        </div>
        <div className="expanded-history-duration">
          <span>Workout Time: {props.duration}</span>
        </div>
        <div>
          {exercises.map((exercise) => (
            <div key={exercise.id}>
              <span className="history-page-tile-header">{exercise.name}</span>
              {exercise.sets &&
                exercise.sets.map((set) => (
                  <div className="history-page-tile-exercises" key={set.id}>
                    <li>
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
