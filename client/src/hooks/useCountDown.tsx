import { useEffect, useState } from "react";

const useCountDown = (cb: () => void, timeInSeconds: number) => {
  const [count, setCount] = useState(timeInSeconds);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (isPaused) {
      clearTimeout(timeout);
    }

    if (count === 0) {
      cb();
      clearTimeout(timeout);
      setCount(0);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [count, isPaused]);

  const start = () => {
    setIsPaused(false);
  };

  return { count, start };
};

export default useCountDown;
