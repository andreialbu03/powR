import CloseButton from "./CloseButton";

type ExerciseType = {
  id: number;
  name: string;
  prSet: string;
  sets?: {
    id: number;
    reps: number;
    weight: number;
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

  // Move console.log outside the return statement if needed
  //   console.log(exercises[0]?.sets?.[0]?.reps);

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
                  //   <div key={set.id}>
                  //     <p>{`Set ${set.id}: Reps - ${set.reps}, Weight - ${set.weight}lb`}</p>
                  //   </div>
                  <div className="history-page-tile-exercises" key={set.id}>
                    <li>
                      <span>{`${set.weight} lb x ${set.reps}`}</span>
                    </li>
                  </div>
                ))}
            </div>
          ))}
        </div>
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
}
