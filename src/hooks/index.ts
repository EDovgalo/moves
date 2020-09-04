import { useCallback, useEffect, useState } from 'react';

export const useToggle = (initValue = false): [boolean, () => void] => {
  const [flag, setFlag] = useState(initValue);

  const toggle = useCallback(() => {
    setFlag(!flag);
  }, [flag]);

  return [flag, toggle];
};

export const useTimer = (time = 0, callback: any): boolean[] => {
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTimerDone(true);
      if (callback) {
        callback();
      }
    }, time);
    return () => clearInterval(timerID);
  }, []);

  return [timerDone];
};
