import React from "react";
import "./App.css";

import CalculateTimeLeft from "./components/CalculateTimeLeft";
import Waves from "./components/Waves";
import ThemeToggle from "./themes/ThemeToggle";

function App() {
  return (
    <div>
      <div className="App">
        <ThemeToggle />
        <CalculateTimeLeft />
        <Waves />
      </div>
    </div>
  );
}

export default App;
