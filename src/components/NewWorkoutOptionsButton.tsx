import { IoIosOptions } from "react-icons/io";
import "./NewWorkoutOptionsButton.css";

type NewWorkoutOptionsBtnProps = {
  handleClick: () => void;
};

export default function NewWorkoutOptionsButtons(
  props: NewWorkoutOptionsBtnProps
) {
  return (
    <div
      className="close-button options-workout-button"
      onClick={props.handleClick}
    >
      <IoIosOptions size={24} />
    </div>
  );
}
