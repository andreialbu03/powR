import { IoIosClose } from "react-icons/io";
import "./RemoveWorkoutButton.css";

type CloseButtonProps = {
  handleClick: () => void;
};

export default function CloseButton(props: CloseButtonProps) {
  return (
    <div
      className="close-button remove-workout-button"
      onClick={props.handleClick}
    >
      <IoIosClose size={24} />
    </div>
  );
}
