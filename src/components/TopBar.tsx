import React from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import "./TopBar.css";

export default function BottomMenuBar() {
  const [isShareOpen, setIsShareOpen] = React.useState(false);

  function handleShareClick() {
    setIsShareOpen(!isShareOpen);
  }

  return (
    <div className="top-bar">
      <h1 className="title">powR</h1>
      <div className="share-container" onClick={handleShareClick}>
        <IoShareSocial size={30} />
        <span className="share-text">Share</span>
      </div>
      {isShareOpen && (
        <div className="share-menu">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      )}
    </div>
  );
}
