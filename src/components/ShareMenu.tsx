// Import necessary modules and components
import { SocialIcon } from "react-social-icons";
import CloseButton from "./CloseButton";

// Define custom ShareMenuProps type
type ShareMenuProps = {
  handleClick: () => void;
};

// Define the ShareMenu component
export default function ShareMenu(props: ShareMenuProps) {
  // Function to handle Facebook sharing
  const handleFacebookShare = () => {
    const customMessage = "Check out this awesome workout tracker!";

    // Encode the message and URL
    const encodedMessage = encodeURIComponent(customMessage);
    const encodedUrl = encodeURIComponent(
      "https://andreialbu03.github.io/powR/"
    );

    // Open the Facebook share dialog in a new tab
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedMessage}`,
      "_blank"
    );
  };

  // Function to handle Twitter sharing
  const handleTwitterShare = () => {
    const customMessage = "Check out this awesome workout tracker! #powR";

    // Encode the message and URL
    const encodedMessage = encodeURIComponent(customMessage);
    const encodedUrl = encodeURIComponent(
      "https://andreialbu03.github.io/powR/"
    );

    // Open the Twitter share dialog in a new tab
    window.open(
      `https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}`,
      "_blank"
    );
  };

  // Function to handle Instagram sharing
  const handleInstagramShare = () => {
    const customMessage = "Check out this awesome website!";

    // Encode the message
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

  // Function to handle Pinterest sharing
  const handlePinterestShare = () => {
    const customMessage = "Check out this awesome website!";

    // Encode the message and URL
    const encodedMessage = encodeURIComponent(customMessage);
    const encodedUrl = encodeURIComponent(
      "https://andreialbu03.github.io/powR/"
    );

    // Open the Pinterest share dialog in a new tab
    window.open(
      `https://www.pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedMessage}`,
      "_blank"
    );
  };

  // Function to handle Reddit sharing
  const handleRedditShare = () => {
    const customMessage = "Check out this awesome website!";

    // Encode the message and URL
    const encodedMessage = encodeURIComponent(customMessage);
    const encodedUrl = encodeURIComponent(
      "https://andreialbu03.github.io/powR/"
    );

    // Open the Reddit share dialog in a new tab
    window.open(
      `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedMessage}`,
      "_blank"
    );
  };

  // Render the ShareMenu component
  return (
    <div className="share-menu">
      {/* Header of the share menu */}
      <div className="share-menu-header">
        <h2 className="share-menu-header">Share powR on:</h2>
        <CloseButton handleClick={props.handleClick} />
      </div>

      {/* Icons for different social media platforms */}
      <div className="share-menu-icons">
        {/* Facebook share icon */}
        <div>
          <SocialIcon
            network="facebook"
            target="_blank"
            onClick={handleFacebookShare}
          />
        </div>

        {/* Twitter share icon */}
        <div>
          <SocialIcon
            network="twitter"
            target="_blank"
            onClick={handleTwitterShare}
          />
        </div>

        {/* Instagram share icon */}
        <div>
          <SocialIcon
            network="instagram"
            target="_blank"
            onClick={handleInstagramShare}
          />
        </div>

        {/* Pinterest share icon */}
        <div>
          <SocialIcon
            network="pinterest"
            target="_blank"
            onClick={handlePinterestShare}
          />
        </div>

        {/* Reddit share icon */}
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
