import React, { useState, useEffect } from "react";
import MyTimers from "./MyTimers";

const CalculateTimeLeft = () => {
  const [value, setValue] = useState(new Date());
  const [counting, setCounting] = useState(false);
  const [timer, setTimer] = useState({
    sit: 0,
    stand: 0,
    name: "",
  });

  const [selectedTimer, setSelectedTimer] = useState({
    sit: 0,
    stand: 0,
    name: "",
  });

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimer(selectedTimer);
  }, [selectedTimer]);

  useEffect(() => {
    if (counting === true) {
      if (timer.sit > 0) {
        setTimer({ ...timer, sit: timer.sit - 1 });
      } else if (timer.stand > 0) {
        setTimer({ ...timer, stand: timer.stand - 1 });
      } else {
        resetTime();
      }
    }
  }, [value]);

  let resetTime = () => {
    setTimer(selectedTimer);
  };

  let date = value.toLocaleDateString();
  let time = value.toLocaleTimeString();

  const CountDown = () => {
    let minutes = Math.floor(timer.sit / 60);
    let seconds = timer.sit % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (
      <p>
        {minutes}:{seconds}
      </p>
    );
  };

  return (
    <div>
      <h1 style={{ color: "CornflowerBlue" }}>ErgoTimer</h1>
      <p style={{ color: "grey" }}>{date}</p>
      <p style={{ color: "grey" }}>{time}</p>
      <button onClick={() => setCounting(!counting)}>
        {!counting ? "start timer" : "pause timer"}
      </button>
      <CountDown />
      {MyTimers.map((item) => (
        <button onClick={() => setTimer(item)}>{item.name}</button>
        // <button onClick={() => setSelectedTimer(item)}>{item.name}</button>
      ))}
    </div>
  );
};

export default CalculateTimeLeft;
