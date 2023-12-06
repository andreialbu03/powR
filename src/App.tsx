// Import necessary components and modules from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import custom components for the application
import TopBar from "./components/TopBar";
import BottomMenuBar from "./components/BottomMenuBar";

// Import pages for different routes
import HistoryPage from "./pages/HistoryPage";
import MindsetPage from "./pages/MindsetPage";
import WorkoutPage from "./pages/WorkoutPage";
import LearnPage from "./pages/LearnPage";
import CaloriesPage from "./pages/CaloriesPage";
import FirstLoadPage from "./pages/FirstLoadPage";

// Import styles for the main App component
import "./App.css";

// Main component for the application
function App() {
  // Render the application
  return (
    <Router>
      <div className="container">
        {/* Top bar for the application */}
        <TopBar />

        {/* Routes for different pages */}
        <Routes>
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/mindset" element={<MindsetPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/calories" element={<CaloriesPage />} />
          <Route path="/powR" element={<FirstLoadPage />} />

          {/* Default route, e.g., for the home page */}
          <Route path="/" element={<WorkoutPage />} />
        </Routes>

        {/* Bottom menu bar for the application */}
        <BottomMenuBar />
      </div>
    </Router>
  );
}

// Export the main component
export default App;
