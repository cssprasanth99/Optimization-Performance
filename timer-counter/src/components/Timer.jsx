import React from "react";

export const Timer = ({ timer, start, stop, reset }) => {
  return (
    <div>
      {timer}
      <br />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
