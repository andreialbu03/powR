import { SocialIcon } from "react-social-icons";
import CloseButton from "./CloseButton";

type ShareMenuProps = {
  handleClick: () => void;
};

export default function ShareMenu(props: ShareMenuProps) {
  const handleFacebookShare = () => {
    const customMessage = "Check out this awesome workout tracker!";

    const encodedMessage = encodeURIComponent(customMessage);
    const encodedUrl = encodeURIComponent(
      "https://andreialbu03.github.io/powR/"
    );

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedMessage}`,
      "_blank"
    );
  };

  const handleTwitterShare = () => {
    const customMessage = "Check out this awesome workout tracker! #powR";

    const encodedMessage = encodeURIComponent(customMessage);
    const encodedUrl = encodeURIComponent(
      "https://andreialbu03.github.io/powR/"
    );

    window.open(
      `https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}`,
      "_blank"
    );
  };

  const handleInstagramShare = () => {
    const customMessage = "Check out this awesome website!";

    const encodedMessage = encodeURIComponent(customMessage);

    // Check if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Open Instagram app with a pre-filled caption
      window.open(`instagram://library?Caption=${encodedMessage}`, "_blank");
    } else {
      // Open Instagram website in a new tab
      window.open("https://www.instagram.com/", "_blank");
    }
  };

  const handlePinterestShare = () => {
    const customMessage = "Check out this awesome website!";

    const encodedMessage = encodeURIComponent(customMessage);
    const encodedUrl = encodeURIComponent(
      "https://andreialbu03.github.io/powR/"
    );

    window.open(
      `https://www.pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedMessage}`,
      "_blank"
    );
  };

  const handleRedditShare = () => {
    const customMessage = "Check out this awesome website!";

    const encodedMessage = encodeURIComponent(customMessage);
    const encodedUrl = encodeURIComponent(
      "https://andreialbu03.github.io/powR/"
    );

    window.open(
      `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="share-menu">
      <div className="share-menu-header">
        <h2 className="share-menu-header">Share powR on:</h2>
        <CloseButton handleClick={props.handleClick} />
      </div>
      <div className="share-menu-icons">
        <div>
          <SocialIcon
            network="facebook"
            target="_blank"
            onClick={handleFacebookShare}
          />
        </div>
        <div>
          <SocialIcon
            network="twitter"
            target="_blank"
            onClick={handleTwitterShare}
          />
        </div>
        <div>
          <SocialIcon
            network="instagram"
            target="_blank"
            onClick={handleInstagramShare}
          />
        </div>
        <div>
          <SocialIcon
            network="pinterest"
            target="_blank"
            onClick={handlePinterestShare}
          />
        </div>
        <div>
          <SocialIcon
            network="reddit"
            target="_blank"
            onClick={handleRedditShare}
          />
        </div>
      </div>
    </div>
  );
}
