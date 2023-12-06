// Import necessary modules and components from React and other files
import React from "react";
import ShareMenu from "./ShareMenu";
import { IoShareSocial } from "react-icons/io5";

// Import styling for the component
import "./TopBar.css";

// Define the TopBar component
export default function TopBar() {
  // State to track the ShareMenu's open/closed status
  const [isShareOpen, setIsShareOpen] = React.useState(false);

  // Function to handle the Share button click and toggle ShareMenu visibility
  function handleShareClick() {
    setIsShareOpen(!isShareOpen);
  }

  // Render the TopBar component
  return (
    <div className="top-bar">
      {/* Application title */}
      <h1 className="title">powR</h1>

      {/* Share button container with click handler and color styling */}
      <div
        className="share-container"
        onClick={handleShareClick}
        style={{ color: isShareOpen ? "#3549ff" : "white" }}
      >
        {/* Share icon */}
        <IoShareSocial size={30} />

        {/* Share text */}
        <span className="share-text">Share</span>
      </div>

      {/* Conditionally render ShareMenu */}
      {isShareOpen && <ShareMenu handleClick={handleShareClick} />}
    </div>
  );
}
