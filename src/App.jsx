import { useEffect, useState } from "react";

function App() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);


  useEffect(() => {
    if (!running) return;
    const intervalId = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [running]);



  const handleStart = () => {
    setRunning(true)
  }
  const handlePause = () => {
    setRunning(false)
  }
  const handleReset = () => {
    setRunning(false)
    setTime(0)
  }

  return (
    <div className="mt-5">
      <h2 className="text-center text-semibold text-4xl">{time}</h2><br />

      <div className="flex justify-center gap-5">
        {
          !running ?
            <button className="bg-yellow-600 px-5 py-2 text-white rounded" onClick={handleStart}>Start</button> :
            <button className="bg-gray-600 px-5 py-2 text-white rounded" onClick={handlePause}>Pause</button>
        }
        <button className="bg-pink-600 px-5 py-2 text-white rounded" onClick={handleReset}>Reset</button>

      </div>
    </div>
  );
}

export default App;
