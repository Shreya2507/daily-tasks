import React, { useEffect, useState } from 'react'
import "../styles/digitalWatch.css"

const DigitalWatch = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const startTimer = () => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    };

    useEffect(() => {
        startTimer();

        return clearInterval(startTimer);

    }, []);

  return (
    <div class='digitalWatch'>
      <div class='watchTitle'>
        Digital Watch :
      </div>
      <div class='watchText'>{time}</div>
    </div>
  )
}

export default DigitalWatch
