import React, { useState } from 'react'
import "../App.css"

const Calculator = () => {
    const [displayvalue,setDisplayvalue]=useState("");

const Storevalue=(value)=>{
    setDisplayvalue(displayvalue+value)
}
const HandleSubmit=()=>{
  try{
     const result = eval(displayvalue)
     setDisplayvalue(result)
  }catch(Error){
    setDisplayvalue(Error)
  }
}

const HandleClear=()=>{
  setDisplayvalue("")
}
  return (
    <>
       <div className="container">
      <div className="display-value">{displayvalue}</div>
      <div className="button">
        <button onClick={()=>Storevalue("-")}>-</button>
        <button onClick={()=>Storevalue("+")}>+</button>
        <button onClick={()=>Storevalue("*")}>*</button>
        <button onClick={()=>Storevalue("/")}>/</button>
        <button onClick={()=>Storevalue("1")}>1</button>
        <button onClick={()=>Storevalue("2")}>2</button>
        <button onClick={()=>Storevalue("3")}>3</button>
        <button onClick={()=>Storevalue("4")}>4</button>
        <button onClick={()=>Storevalue("5")}>5</button>
        <button onClick={()=>Storevalue("6")}>6</button>
        <button onClick={()=>Storevalue("7")}>7</button>
        <button onClick={()=>Storevalue("8")}>8</button>
        <button onClick={()=>Storevalue("9")}>9</button>
        <button onClick={()=>Storevalue("0")}>0</button>
        <button onClick={HandleClear}>Clear</button>
        <button onClick={HandleSubmit}>=</button>
      </div>
    </div>
    </>
  )
}

export default Calculator
