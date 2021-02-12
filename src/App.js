import React, { useState } from "react";
import "./App.css";

import CalculateTimeLeft from "./components/CalculateTimeLeft";
import Waves from "./components/Waves";
import ThemeToggle from "./themes/ThemeToggle";
import { ReactComponent as TimerLogo } from "./images/timer-logo.svg";

function App() {
  const [theme, setTheme] = useState("light-theme");

  return (
    <div>
      <div className={`App ${theme}`}>
        <div>
          <div className="app-title-logo">
            <div className="app-title">
              <h1 className="bold-header">ERG</h1>
              <TimerLogo className="timer-logo" />
              <h1 className="regular-header">TIMER</h1>
            </div>
            <div>
              <ThemeToggle setTheme={setTheme} />
            </div>
          </div>
          <div className="container">
            <CalculateTimeLeft />
            <div className="white-blur"></div>
            <Waves />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
