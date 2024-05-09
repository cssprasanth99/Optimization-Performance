import React from "react";

const MemoizedCounter = ({ count, inc, dec }) => {
  console.log("counter rendering");
  return (
    <div>
      {count}
      <br />
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

const Counter = React.memo(MemoizedCounter);

export { Counter };
