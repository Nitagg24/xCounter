import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const handleClick  = (operation) =>{
      setCount(operation==="+"?count+1:count-1);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={()=>handleClick("+")}>Intrement</button>
        <button onClick={()=>handleClick("-")}>Decrement</button>
    </div>
  )
}

export default Counter