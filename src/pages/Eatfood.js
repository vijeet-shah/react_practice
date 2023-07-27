import React from 'react'
import { useState } from 'react';
import NavBar from '../components/NavBar';


function Eatfood() {

    const [count, setCount] = useState(0);
    function handleIncrement() {
        setCount(count + 1);
      }

      function handleReset() {
        setCount(0);
      }  

  return (
    <>
    <NavBar/>
    <h2>How Many Fruits did you Ate : {count}</h2>
    <div><button onClick={handleIncrement}>Eat Apple</button></div><br></br>
    <div><button onClick={handleIncrement}>Eat Banana</button></div><br></br>
    <div><button onClick={handleIncrement}>Eat Mango</button></div><br></br>
    <button onClick={handleReset}>Reset</button>

    </>
  )
}

export default Eatfood