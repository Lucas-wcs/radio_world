import { useState } from "react";

function Clock() {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="clock">
      <h1 className="clockh1">{currentTime}</h1>
    </div>
  );
}

export default Clock;
