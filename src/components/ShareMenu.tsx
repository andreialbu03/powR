import { IoIosClose } from "react-icons/io";
import { SocialIcon } from "react-social-icons";
import CloseButton from "./CloseButton";

type ShareMenuProps = {
  handleClick: () => void;
};

export default function ShareMenu(props: ShareMenuProps) {
  return (
    <div className="share-menu">
      <div className="share-menu-header">
        <h2>Share</h2>
        {/* <IoIosClose size={40} /> */}
        <CloseButton handleClick={props.handleClick} />
      </div>
      <div className="share-menu-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SocialIcon url="https://facebook.com" target="_blank" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SocialIcon url="https://twitter.com" target="_blank" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SocialIcon url="https://instagram.com" target="_blank" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SocialIcon url="https://pinterest.com" target="_blank" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SocialIcon url="https://telegram.org/" target="_blank" />
        </a>
      </div>
    </div>
  );
}
