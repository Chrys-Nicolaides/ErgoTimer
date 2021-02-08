import React from "react";
import "./App.css";

import CalculateTimeLeft from "./components/CalculateTimeLeft";
import Waves from "./components/Waves";
import ThemeToggle from "./themes/ThemeToggle";
import { ReactComponent as TimerLogo } from "./images/timer-logo.svg";

// import waveLines from "./components/waveLines";

function App() {
  return (
    <div>
      <div className="App">
        <div>
          <div className="app-title-logo">
            <h1 className="bold-header">ERG</h1>
            <TimerLogo className="timer-logo" />
            <h1 className="regular-header">TIMER</h1>
          </div>
          <div className="container">
            <ThemeToggle />
            <CalculateTimeLeft />
            <Waves />
            {/* <waveLines /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
