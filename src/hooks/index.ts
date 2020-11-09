import { useCallback, useEffect,useRef, useState } from 'react';

export const useToggle = (initValue = false): [boolean, () => void] => {
  const [flag, setFlag] = useState(initValue);
  const toggle = useCallback(() => {
    setFlag(f => !f);
  }, []);
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


export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};