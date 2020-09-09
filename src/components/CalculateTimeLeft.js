import React, { useState, useEffect } from "react";
import MyTimers from "./MyTimers";

const CalculateTimeLeft = () => {
  const [title, setTitle] = useState("Let the Countdown begin!");
  const [secondsCounter, setSecondsCounter] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false);
  const [timeToSit, setTimeToSit] = useState(false);
  const [timer, setTimer] = useState({
    name: "",
    sit: 0,
    stand: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => setSecondsCounter(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isRunning === true) {
      if (timer.stand > 0) {
        setTimeToSit(false);
        setTitle("Stand");
        setTimer({ ...timer, stand: timer.stand - 1 });
      } else if (timer.sit > 0) {
        setTimeToSit(true);
        setTitle("Sit");
        setTimer({ ...timer, sit: timer.sit - 1 });
      } else {
        setTitle("Time is up!");
      }
    } else if (timer.stand === 0 && timer.sit === 0) {
      setTitle("Start the Timer!");
    }
  }, [secondsCounter]);

  let resetTime = () => {
    setTimer({
      sit: 0,
      stand: 0,
      name: "",
    });
    setIsRunning(false);
    setTitle("Take a break Cam!");
  };

  const CountDown = () => {
    let timers;
    if (timeToSit === true) {
      timers = timer.sit;
    } else {
      timers = timer.stand;
    }

    return <h3>{formatter(timers)}</h3>;
  };

  const formatter = (input) => {
    let hours = Math.floor(input / 60);
    let minutes = input % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <h1>ErgoTimer</h1>
      <h2>{title}</h2>
      <CountDown />
      <div className="buttons">
        {MyTimers.map((item) => (
          <button onClick={() => setTimer(item)}>{item.name}</button>
        ))}
      </div>

      <div className="buttons">
        <button
          className="startButton"
          onClick={() => setIsRunning(!isRunning)}
        >
          {!isRunning ? "Start timer" : "Pause timer"}
        </button>
        <button className="resetButton" onClick={resetTime}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CalculateTimeLeft;
