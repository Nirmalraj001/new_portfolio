import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end: number, duration: number = 1500, trigger: boolean = true) => {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        hasRun.current = true;
      }
    };
    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, trigger]);

  return count;
};
