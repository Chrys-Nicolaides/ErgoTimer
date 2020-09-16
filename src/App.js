import React from "react";
import "./App.css";

import CalculateTimeLeft from "./components/CalculateTimeLeft";
import ThemeToggle from "./themes/ThemeToggle";

function App() {
  return (
    <div>
      <div className="App">
        <ThemeToggle />
        <CalculateTimeLeft />
      </div>
    </div>
  );
}

export default App;
