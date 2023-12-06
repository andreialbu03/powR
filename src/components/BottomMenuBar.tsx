// Import necessary modules and components
import { MdHistory, MdOutlineFastfood } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaDumbbell, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import styling for the component
import "./BottomMenuBar.css";

// Define the BottomMenuBar component
export default function BottomMenuBar() {
  // Render the BottomMenuBar component
  return (
    <div className="bottom-menu-bar">
      {/* Navigation link to History section */}
      <Link to="/history" className="bottom-menu-bar-button">
        <MdHistory size={40} />
        <span>History</span>
      </Link>

      {/* Navigation link to Mindset section */}
      <Link to="/mindset" className="bottom-menu-bar-button">
        <RiMentalHealthFill size={40} />
        <span>Mindset</span>
      </Link>

      {/* Navigation link to Workout section */}
      <Link to="/" className="bottom-menu-bar-button">
        <FaDumbbell size={40} />
        <span>Workout</span>
      </Link>

      {/* Navigation link to Learn section */}
      <Link to="/learn" className="bottom-menu-bar-button">
        <FaBook size={40} />
        <span>Learn</span>
      </Link>

      {/* Navigation link to Calories section */}
      <Link to="/calories" className="bottom-menu-bar-button">
        <MdOutlineFastfood size={40} />
        <span>Calories</span>
      </Link>
    </div>
  );
}
