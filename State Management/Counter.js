import React, { useState } from 'react'

const Counter = () => {
    const [count, SetCount] = useState(99);
    const handleIncrement = () =>{
        SetCount(count + 1);
    }
    const handleDecrement = () =>{
        SetCount(count - 1);
    }
  return (
    <div style={{margin:'3rem'}}>
        <h1>Counter</h1>
        <button className='btn btn-primary' onClick={handleIncrement}>Increase</button>
        <h3>{count}</h3>
        <button className='btn btn-primary' onClick={handleDecrement}>Decrease</button>
    </div>
  )
}

export default Counter