import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Timer } from "./components/Timer";

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  function start() {
    if (!intervalId) {
      const id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
    }
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

  function reset() {
    setTimer(0);
  }

  console.log("App redering");

  return (
    <>
      <Counter count={count} inc={increment} dec={decrement} />
      <Timer timer={timer} start={start} stop={stop} reset={reset} />
    </>
  );
}

export default App;
