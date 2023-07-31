import React,{useState} from "react";
import './Counter.css';
function Counter() {
  const[count,setCount]=useState(0);
  const increment= ()=>{
    setCount(count+1);
  };
  const decrement=()=>{
    setCount(count-1);
  };
  const resetbutton=()=>{
    setCount(0);
  };
    return(
        <>
       <div className="countener">
        <h1 className="head">Simple Counter App</h1>
       <button onClick={increment}>+</button>
        <span>{count}</span>
         <button onClick={decrement}>-</button>
         <br></br>
         <button onClick={resetbutton} className="reset">Reset</button>
       </div>
        </>
    );
}
export default Counter;