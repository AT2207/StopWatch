import React from 'react'
import { useState, useEffect } from "react";


const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => {
          setTime((prevVal) =>{
            console.log(prevVal)
           return prevVal + 100
          } 
          
        );
          
        }, 100)        
      } else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }, [isRunning]);
  
    const formatTime = (ms) => {
      const minutes = Math.floor(ms / 60000);      
      const seconds = Math.floor((ms % 60000/1000));      
      const miliSec = (ms % 1000) / 100;
      
      return (minutes < 10 ? "0" + minutes : minutes) + ":" + 
      (seconds < 10 ? "0" + seconds : seconds) + ":" + 
      (miliSec < 10 ? "0" + miliSec : miliSec)
    }


  return (
    <>    
    <div>{formatTime(time)}</div>
    <div>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
    </div>
  </>
  )
}

export default Stopwatch