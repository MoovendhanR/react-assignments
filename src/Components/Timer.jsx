import React, { useEffect, useState } from "react";


function Timer(){
const [second,setSecond]=useState(0);
const [minute,setMinute]=useState(0);
const [hour,setHour]=useState(0);

useEffect(()=>{
    const timer=setInterval(()=>{
        setSecond((prevsec)=>prevsec+1);

    },1000)
    return ()=>{
        clearInterval(timer);
    }
},[]);

useEffect(()=>{
    if(second === 60){
        setSecond(0);
        setMinute((prevminute)=>prevminute+1);
    }
},[second]);


useEffect(()=>{
    if(minute === 60){
        setMinute(0);
        setHour((prevhour)=>prevhour+1);
    }
},[minute]);



return(
  <>
   <span>{hour.toString().padStart(2,"0")}</span>:
        <span>{minute.toString().padStart(2,"0")}</span>:
        <span>{second.toString().padStart(2,"0")}</span>
  </>
)  
}


export default Timer;