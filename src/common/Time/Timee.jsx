import React, { useEffect, useState } from "react";
import styles from './style.module.scss';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time">
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;
