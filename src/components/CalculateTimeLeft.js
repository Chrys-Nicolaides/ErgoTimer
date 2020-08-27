import React, { useState, useEffect } from "react";

const CalculateTimeLeft = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let date = value.toLocaleDateString();
  let time = value.toLocaleTimeString();

  return (
    <div>
      <p>Countdown:</p>
      <div>{date}</div>
      <div>{time}</div>
    </div>
  );
};

export default CalculateTimeLeft;
