// Import the React and ReactDOM modules
import React from "react";
import ReactDOM from "react-dom/client";

// Import  main application components and styling
import App from "./App.tsx";
import "./index.css";

// Render the application and main component
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
