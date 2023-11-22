import { SocialIcon } from "react-social-icons";
import CloseButton from "./CloseButton";

type ShareMenuProps = {
  handleClick: () => void;
};

export default function ShareMenu(props: ShareMenuProps) {
  return (
    <div className="share-menu">
      <div className="share-menu-header">
        <h2 className="share-menu-header">Share powR on:</h2>
        {/* <IoIosClose size={40} /> */}
        <CloseButton handleClick={props.handleClick} />
      </div>
      <div className="share-menu-icons">
        <div>
          <SocialIcon url="https://facebook.com" target="_blank" />
        </div>
        <div>
          <SocialIcon url="https://twitter.com" target="_blank" />
        </div>
        <div>
          <SocialIcon url="https://instagram.com" target="_blank" />
        </div>
        <div>
          <SocialIcon url="https://pinterest.com" target="_blank" />
        </div>
        <div>
          <SocialIcon url="https://telegram.org/" target="_blank" />
        </div>
      </div>
    </div>
  );
}
