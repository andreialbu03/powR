// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import TopBar from "./components/TopBar";
import BottomMenuBar from "./components/BottomMenuBar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <TopBar />
      <BottomMenuBar />
    </div>
  );
}

export default App;
