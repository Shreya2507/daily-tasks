import React, { useEffect, useState } from 'react'

const DigitalWatch = () => {
    const [time, setTime] = useState("");
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
    <>
    <div>
      Digital Watch
    </div>
    <div>{time}</div>
    </>
  )
}

export default DigitalWatch
