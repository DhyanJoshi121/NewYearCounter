import React, { useEffect, useState } from 'react';
import './app.scss';

const App = () => {
  const [counterTime, setCounterTime] = useState({});
  const counter = () => {
    const newYearTime = new Date('1 jan 2023');
    const currentTime = new Date();
    const totalSeconds = (newYearTime - currentTime) / 1000;
    const seconds = Math.floor(((newYearTime - currentTime) / 1000) % 60);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);

    setCounterTime({
      seconds,
      minutes,
      hours,
      days,
    });
  };

  useEffect(() => {
    counter();
  }, [useState]);

  setInterval(counter, 1000);

  return (
    <div className="hero">
      <div className="card">
        <h1 className="title">New Year Counter</h1>
        <ul>
          <li>
            <h1 className="daysNumber">{counterTime.days}</h1>
            <span className="daysTitle">days</span>
          </li>
          <li>
            <h1 className="hoursNumber">{counterTime.hours}</h1>
            <span className="hoursTitle">hours</span>
          </li>
          <li>
            <h1 className="minsNumber">{counterTime.minutes}</h1>
            <span className="minsTitle">mins</span>
          </li>
          <li>
            <h1 className="secondsNumber">{counterTime.seconds}</h1>
            <span className="secondsNumber">seconds</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
