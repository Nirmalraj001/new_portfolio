import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end: number, duration: number = 1500, trigger: boolean = true) => {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        hasRun.current = true;
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return count;
};
