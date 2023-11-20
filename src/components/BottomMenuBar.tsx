import React from "react";
import { MdHistory, MdOutlineFastfood } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaDumbbell, FaBook } from "react-icons/fa";

import "./BottomMenuBar.css"; // Create a CSS file for styling if needed

interface BottomMenuBarProps {
  // You can define any additional props you may need
}

const BottomMenuBar: React.FC<BottomMenuBarProps> = () => {
  return (
    <div className="bottom-menu-bar">
      <button>
        <MdHistory size={40} />
        <span>History</span>
      </button>
      <button>
        <RiMentalHealthFill size={40} />
        <span>Mindset</span>
      </button>
      <button>
        <FaDumbbell size={40} />
        <span>Workout</span>
      </button>
      <button>
        <FaBook size={40} />
        <span>Learn</span>
      </button>
      <button>
        <MdOutlineFastfood size={40} />
        <span>Calories</span>
      </button>
    </div>
  );
};

export default BottomMenuBar;
