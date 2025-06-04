
'use client';

import { useEffect, useRef } from 'react';

const Time = () => {
  const timeDisplay = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateClock = () => {
      const time = new Date();
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      const formattedTime = formatter.format(time);

      if (timeDisplay.current) {
        timeDisplay.current.innerText = formattedTime;
      }
    };

    updateClock(); // Run once immediately
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div ref={timeDisplay} className="mb-8">
      --
    </div>
  );
};

export default Time;