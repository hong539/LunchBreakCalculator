import React, { useState } from 'react';

function LunchBreakCalculator() {
  const [lunchTime, setLunchTime] = useState('');
  const [restDuration, setRestDuration] = useState(0);

  const handleLunchTimeChange = (event) => {
    setLunchTime(event.target.value);
  };

  const handleCalculateClick = () => {
    const lunchTimestamp = new Date(lunchTime).getTime();
    const restEndTimestamp = lunchTimestamp + restDuration * 60 * 1000;
    const restEndTime = new Date(restEndTimestamp).toLocaleTimeString();

    alert(`休息結束時間為：${restEndTime}`);
  };

  return (
    <div>
      <h3>午餐休息時間計算器</h3>
      <label htmlFor="lunch-time">午餐時間：</label>
      <input
        id="lunch-time"
        type="time"
        value={lunchTime}
        onChange={handleLunchTimeChange}
      />
      <br />
      <label htmlFor="rest-duration">休息時長（分鐘）：</label>
      <input
        id="rest-duration"
        type="number"
        value={restDuration}
        onChange={(event) => setRestDuration(parseInt(event.target.value))}
      />
      <br />
      <button onClick={handleCalculateClick}>計算休息結束時間</button>
    </div>
  );
}

export default LunchBreakCalculator;