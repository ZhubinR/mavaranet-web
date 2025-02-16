'use client'
import { useState, useEffect } from 'react';

const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = date - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [date]);

  return (
    <div className='countDown d-flex align-items-center justify-content-between'>
      <div className='countDown_box'> <p>{timeLeft.seconds}</p><span>ثانیه</span></div>
      <span>:</span>
      <div className='countDown_box'> <p>{timeLeft.minutes}</p><span>دقیقه</span></div>
      <span>:</span>
      <div className='countDown_box'> <p>{timeLeft.hours}</p><span>ساعت</span></div>
      <span>:</span>
      <div className='countDown_box'> <p>{timeLeft.days}</p> <span>روز</span></div>
    </div>
  );
};

export default Countdown;