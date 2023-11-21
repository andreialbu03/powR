import React from "react";
import ShareMenu from "./ShareMenu";
import { IoShareSocial } from "react-icons/io5";

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
      {isShareOpen && <ShareMenu handleClick={handleShareClick} />}
    </div>
  );
}
