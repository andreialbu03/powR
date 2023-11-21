import { MdHistory, MdOutlineFastfood } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaDumbbell, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./BottomMenuBar.css"; // Create a CSS file for styling if needed

export default function BottomMenuBar() {
  return (
    <div className="bottom-menu-bar">
      <Link to="/history" className="bottom-menu-bar-button">
        <MdHistory size={40} />
        <span>History</span>
      </Link>
      <Link to="/mindset" className="bottom-menu-bar-button">
        <RiMentalHealthFill size={40} />
        <span>Mindset</span>
      </Link>
      <Link to="/" className="bottom-menu-bar-button">
        <FaDumbbell size={40} />
        <span>Workout</span>
      </Link>
      <Link to="/learn" className="bottom-menu-bar-button">
        <FaBook size={40} />
        <span>Learn</span>
      </Link>
      <Link to="/calories" className="bottom-menu-bar-button">
        <MdOutlineFastfood size={40} />
        <span>Calories</span>
      </Link>
    </div>
  );
}
