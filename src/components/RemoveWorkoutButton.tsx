// Import necessary modules and components from React and other files
import { IoIosClose } from "react-icons/io";

// Import styling for the component
import "./RemoveWorkoutButton.css";

// Define custom type for CloseButtonProps
type CloseButtonProps = {
  handleClick: () => void;
};

// Define the CloseButton component
export default function CloseButton(props: CloseButtonProps) {
  // Render the CloseButton component
  return (
    <div
      className="close-button remove-workout-button"
      onClick={props.handleClick}
    >
      {/* Render the close icon using IoIosClose from react-icons */}
      <IoIosClose size={24} />
    </div>
  );
}
