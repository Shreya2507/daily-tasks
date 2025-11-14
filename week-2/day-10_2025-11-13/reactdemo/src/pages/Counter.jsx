import React, { useState } from 'react'
import "../styles/counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div class='counter'>
      <div class='count'>{count}</div>
      <div class='buttons'>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
