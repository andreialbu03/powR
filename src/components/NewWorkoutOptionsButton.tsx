// Import icons and styling for the component
import { IoIosOptions } from "react-icons/io";
import "./NewWorkoutOptionsButton.css";

// Define custom NewWorkoutOptionsBtnProps type
type NewWorkoutOptionsBtnProps = {
  handleClick: () => void;
};

// Define the NewWorkoutOptionsButton component
export default function NewWorkoutOptionsButtons(
  props: NewWorkoutOptionsBtnProps
) {
  // Render the NewWorkoutOptionsButton component
  return (
    <div
      className="close-button options-workout-button"
      onClick={props.handleClick}
    >
      <IoIosOptions size={24} />
    </div>
  );
}
