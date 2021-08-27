import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function Main() {
  const [counter, setCounter] = useState(0);

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

  return (
    <div>
      <div className="main" style={{ backgroundColor: backColor(counter) }}>
        <h2>Counter</h2>
        <h1 style={{ color: getColor(counter) }}>{counter}</h1>
      </div>
      <Button counter={counter} setCounter={setCounter} />
    </div>
  );
}
