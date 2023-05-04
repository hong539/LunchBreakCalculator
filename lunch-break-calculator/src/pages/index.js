import { useState, useEffect } from 'react';

export default function LunchBreakTimer() {
  const [restTime, setRestTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    setRemainingTime(restTime);
  }, [restTime]);

  const handleStart = () => {
    if (restTime > 0 && !intervalId) {
      const id = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setRemainingTime(restTime);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Lunch Break Timer</h1>
      <div>
        <label>
          Rest Time (in seconds):
          <input type="number" value={restTime} onChange={e => setRestTime(parseInt(e.target.value))} />
        </label>
      </div>
      <p>Time remaining: {formatTime(remainingTime)}</p>
      <div>
        <button onClick={handleStart}>Start <br></br></button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}