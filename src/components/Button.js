import React from "react";

export default function Button(props) {
  const decrease = () => {
    props.setCounter(props.counter - 1);
  };

  const reset = () => {
    props.setCounter(0);
  };

  const increase = () => {
    props.setCounter(props.counter + 1);
  };

  // Set Interval
  const timer30 = setInterval(() => {
    // setCounter(counter - 1);
  }, 1000);

  const timer60 = () => {};

  return (
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
  );
}
