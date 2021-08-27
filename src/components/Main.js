import React, { useState, useEffect } from "react";

export default function Main() {
  const [counter, setCounter] = useState(0);

  const decrease = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const increase = () => {
    setCounter(counter + 1);
  };

  const getColor = (count) => {
    console.log(count);
    if (count < 0) {
      return "#CE050F";
    } else if (count == 0) {
      return "#000";
    } else {
      return "#547900";
    }
  };

  const backColor = (count) => {
    console.log(count);
    if (count < 0) {
      return "#05CCC2";
    } else if (count == 0) {
      return "#b87d4b";
    } else {
      return "#00567A";
    }
  };

  // Set Interval
  const timer30 = setInterval(() => {
    setCounter(30 - 1);
  }, 1000);
  clearInterval(timer30);

  const timer60 = () => {};

  return (
    <div>
      <div className="main" style={{ backgroundColor: backColor(counter) }}>
        <h2>Counter</h2>
        <h1 style={{ color: getColor(counter) }}>{counter}</h1>
        <div className="buttons">
          <button onClick={decrease} className="btn">
            Decrease
          </button>
          <button onClick={reset} className="btn">
            Reset
          </button>
          <button onClick={increase} className="btn">
            Increase
          </button>
          <br />
          <button onClick={timer30} className="btn">
            30 Sec Timer
          </button>
          <button onClick={timer60} className="btn">
            60 Sec Timer
          </button>
        </div>
      </div>
    </div>
  );
}
