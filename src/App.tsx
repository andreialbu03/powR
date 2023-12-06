import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import BottomMenuBar from "./components/BottomMenuBar";

import HistoryPage from "./pages/HistoryPage";
import MindsetPage from "./pages/MindsetPage";
import WorkoutPage from "./pages/WorkoutPage";
import LearnPage from "./pages/LearnPage";
import CaloriesPage from "./pages/CaloriesPage";
import FirstLoadPage from "./pages/FirstLoadPage";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="container">
        <TopBar />
        <Routes>
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/mindset" element={<MindsetPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/calories" element={<CaloriesPage />} />
          <Route path="/powR" element={<FirstLoadPage />} />
          {/* Default route, e.g., for the home page */}
          <Route path="/" element={<WorkoutPage />} />
        </Routes>
        <BottomMenuBar />
      </div>
    </Router>
  );
}

export default App;
