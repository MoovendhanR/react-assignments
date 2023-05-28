import React, { useEffect, useState } from 'react'

const ReverseTimer = () => {
    const [time,setTime] = useState(0);
    const [isPaused,setIspaused] = useState(true);

    useEffect(()=>{
       let timer = null;
       if(!isPaused && time > 0){
        timer = setInterval(()=>{
           setTime((prevTime)=>prevTime-1);
        },1000)
       }
       return ()=>{
        clearInterval(timer);
       }
    },[isPaused,time])
    
    const timeFormat = (time) => {
        let min = Math.floor(time/60);
        let sec = time % 60;
        return(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)
    }

    const handleStart = () => {
        setIspaused(false);
    }
    const handlePaused = () => {
        setIspaused(true);
    }

    const handleReset = () => {
        setTime(0);
        setIspaused(true);
    }


  return (
    <>
      <h2>Reverse Timer</h2>
      <input type="Number" placeholder='type a time here...' onChange={(e)=>setTime(e.target.value)} />
      <button onClick={handleStart} disabled={!isPaused}>start</button>
      <button onClick={handlePaused} disabled={isPaused}>paused</button>
      <button onClick={handleReset} disabled={!isPaused}>Reset</button>
       <h2>{timeFormat(time)}</h2>
    </>
  )
}

export default ReverseTimer
