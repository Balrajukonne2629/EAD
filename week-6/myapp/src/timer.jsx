import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && seconds >= 0) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const reset = () => {
    setIsRunning(false); 
    setSeconds(0);      
  };

  return (
    <div className="timer-container">
      <h2>Timer: {seconds}s</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;