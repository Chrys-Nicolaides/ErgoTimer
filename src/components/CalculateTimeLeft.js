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
    main();
  }, [secondsCounter]);

  let main = () => {
    if (isRunning === true) {
      if (timer.stand > 0) {
        setTimeToSit(false);
        setTitle("Stand!");
        setTimer({ ...timer, stand: timer.stand - 1 });
      } else if (timer.sit > 0) {
        setTimeToSit(true);
        setTitle("Sit!");
        setTimer({ ...timer, sit: timer.sit - 1 });
      } else {
        setTitle("Time is up!");
      }
    } else if (timer.stand === 0 && timer.sit === 0) {
      setTitle("Start the Timer!");
    }
  };

  let resetTime = () => {
    setTimer({
      sit: 0,
      stand: 0,
      name: "",
    });
    setIsRunning(false);
  };

  const CountDown = () => {
    let timers;
    if (timeToSit === true) {
      timers = timer.sit;
    } else {
      timers = timer.stand;
    }

    return (
      <TimeDisplay
        hours={formatter(timers).hours}
        minutes={formatter(timers).minutes}
      />
    );
  };

  const formatter = (input) => {
    let hours;
    if (Math.floor(input / 60) > 10) {
      hours = Math.floor(input / 60);
    } else hours = `0${Math.floor(input / 60)}`;
    let minutes = input % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return { hours: hours, minutes: minutes };
  };

  const TimeDisplay = (props) => {
    return (
      <div className="countdown-container">
        <div className="content">
          <div className="time-display">
            <h3 className="time-container">{props.hours}</h3>
            <h5>minutes</h5>
          </div>
          <h3>:</h3>
          <div className="time-display">
            <h3 className="time-container">{props.minutes}</h3>
            <h5>seconds</h5>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="time-buttons">
        {MyTimers.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setTimer(item);
              setIsRunning(false);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <CountDown />
      <div className="action-buttons">
        <button
          className="startButton"
          onClick={() => setIsRunning(!isRunning)}
        >
          {!isRunning ? "Start" : "Pause"}
        </button>
        <button className="resetButton" onClick={resetTime}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CalculateTimeLeft;
