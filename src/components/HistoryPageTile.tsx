import React from "react";
import ExpandedHistoryTile from "./ExpandedHistoryTile";

type ExerciseType = {
  id: number;
  name: string;
  prSet: string;
};

type HistoryPageTileProps = {
  date: string;
  exercises: ExerciseType[];
  isLast: boolean;
};

export default function HistoryPageTile(props: HistoryPageTileProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function handleExpandClick() {
    setIsExpanded(!isExpanded);
  }

  const exercises = props.exercises.map((item) => {
    return (
      <div className="history-page-tile-exercises" key={item.id}>
        <li>
          <span>{item.name}</span>
        </li>
        <span>{item.prSet}</span>
      </div>
    );
  });
  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      <h3 className="history-page-tile-date">{props.date}</h3>
      <div className="history-page-tile-header">
        <span>Exercise</span>
        <span>PR Set</span>
      </div>
      {exercises}
      <a className="btn" onClick={handleExpandClick}>
        View More
      </a>
      {isExpanded && <ExpandedHistoryTile exercises={props.exercises} />}
    </div>
  );
}
