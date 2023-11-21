import { IoIosClose } from "react-icons/io";

type CloseButtonProps = {
  handleClick: () => void;
};

export default function CloseButton(props: CloseButtonProps) {
  return (
    <div className="close-button" onClick={props.handleClick}>
      <IoIosClose size={40} />
    </div>
  );
}
