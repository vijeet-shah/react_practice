import React from 'react';
import { useState } from 'react';


function Counter({ isDarkMode }) {
    // Initialize a state variable called 'count' with an initial value of 0
    const [count, setCount] = useState(0);
  // Event handler for incrementing the count
  function handleIncrement() {
    setCount(count + 1);
  }
  // Event handler for decrementing the count
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div className={isDarkMode ? 'clr-white' : 'clr-black'}>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter