import { useState, useEffect } from 'react';

export default function CurrentTime({ className = "", style = {} }) {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const myTimeStr = now.toLocaleString("en-US", {
        timeZone: "America/Chicago",
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const parts = myTimeStr.match(/(\d+)\/(\d+)\/(\d+),\s(\d+):(\d+):(\d+)/);

      if (parts) {
        const [_, month, day, year, hour24, minute, second] = parts;
        const ms = String(now.getMilliseconds()).padStart(3, '0');

        const hourNum = parseInt(hour24);
        const ampm = hourNum >= 12 ? 'PM' : 'AM';
        const displayHours = String(hourNum % 12 || 12).padStart(2, '0');

        setTime(`${displayHours}:${minute}:${second}.${ms} ${ampm}, ${year}-${month}-${day}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 10);

    return () => clearInterval(interval);
  }, []);
  
  return <span className={className} style={style}>{time}</span>;
}
