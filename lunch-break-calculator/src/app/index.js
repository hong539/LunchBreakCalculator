import React, { useState } from 'react';

export default function Home() {
  const [duration, setDuration] = useState(60);
  const [breakTime, setBreakTime] = useState(15);
  const [totalTime, setTotalTime] = useState(duration + breakTime);

  const handleDurationChange = (e) => {
    const newDuration = parseInt(e.target.value);
    setDuration(newDuration);
    setTotalTime(newDuration + breakTime);
  };

  const handleBreakTimeChange = (e) => {
    const newBreakTime = parseInt(e.target.value);
    setBreakTime(newBreakTime);
    setTotalTime(duration + newBreakTime);
  };

  return (
    <div>
      <h1>Lunch Break Calculator</h1>
      <div>
        <label>
          Duration (minutes):
          <input
            type="number"
            value={duration}
            onChange={handleDurationChange}
          />
        </label>
      </div>
      <div>
        <label>
          Break Time (minutes):
          <input
            type="number"
            value={breakTime}
            onChange={handleBreakTimeChange}
          />
        </label>
      </div>
      <div>
        Total Time: {totalTime} minutes
      </div>
    </div>
  );
}