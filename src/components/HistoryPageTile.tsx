// Import necessary modules and components from React and other files
import React from "react";
import ExpandedHistoryTile from "./ExpandedHistoryTile";

// Define custom ExerciseType and HistoryPageTileProps types
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

type HistoryPageTileProps = {
  date: string;
  duration: string;
  exercises: ExerciseType[];
  isLast: boolean;
};

// Define the HistoryPageTile component
export default function HistoryPageTile(props: HistoryPageTileProps) {
  // State to manage the expansion/collapse of the tile
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Function to handle the click event for expanding/collapsing the tile
  function handleExpandClick() {
    setIsExpanded(!isExpanded);
  }

  // Map over exercises to create list items for each exercise
  const exercises = props.exercises.map((item) => {
    return (
      <div className="history-page-tile-exercises" key={item.id}>
        <li>
          <span>• {item.name}</span>
        </li>
        <span>{item.prSet}</span>
      </div>
    );
  });

  // Render the HistoryPageTile component
  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      {/* Display the date of the history page tile */}
      <h3 className="history-page-tile-date">{props.date}</h3>

      {/* Display header for exercise and PR Set */}
      <div className="history-page-tile-header">
        <span>Exercise</span>
        <span>PR Set</span>
      </div>

      {/* Display the list of exercises */}
      {exercises}

      {/* Display "View More" button for expanding the tile */}
      <a className="btn" onClick={handleExpandClick}>
        View More
      </a>

      {/* Conditionally display ExpandedHistoryTile */}
      {isExpanded && (
        <ExpandedHistoryTile
          date={props.date}
          duration={props.duration}
          exercises={props.exercises}
          onClose={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}
