import React, { useState } from "react";
import * as math from "mathjs";
import NavBar from "../components/NavBar";

function Calculator() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
      setResult(0);
    } else if (value === "+/-") {
      setInput(input.charAt(0) === "-" ? input.substr(1) : "-" + input);
      /* In this case, the condition is input.charAt(0) === '-', which checks whether the first character of the input string is a hyphen ("-"), indicating a negative number. 
      If the condition is true, it returns the substring of input starting from the second character (input.substr(1)), effectively removing the negative sign. 
      If the condition is false, it returns a string that concatenates a negative sign with the input string ('-' + input), effectively making it a negative number.
      This is used in the handleClick function of the Calculator component to toggle the sign of the input number when the "+/-" button is clicked. ̰ */
    } else if (value === "%") {
      setInput(String(parseFloat(input) / 100));
      /*In JavaScript, parseFloat function is used to parse a string and return a floating-point number. 
        Some alternatives to parseFloat function that can be used in JavaScript include:
        - Number: The Number function can be used to convert a string to a number. It can be used like this: Number('3.14').
        - parseInt: The parseInt function can be used to parse a string and return an integer. It can be used like this: parseInt('3.14'). */
    } else if (value === "=") {
      setResult(math.evaluate(input));
      setInput(String(math.evaluate(input)));
      /*Math.js is a JavaScript library that provides a lot of features for mathematical operations. 
      One of its features is to evaluate mathematical expressions in string format.
      To use math.js, you can install it using npm: */
    } else {
      setInput(input === "0" ? String(value) : input + value);
    }
  };

  //   const handleClick = (value) => {
  //     if (value === 'AC') {
  //       setInput('0');
  //       setResult(0);
  //     } else if (value === '+/-') {
  //       setInput(input.charAt(0) === '-' ? input.substr(1) : '-' + input);
  //     } else if (value === '%') {
  //       setInput(String(parseFloat(input) / 100));
  //     } else if (value === '=') {
  //       setResult(eval(input));
  //       setInput(String(eval(input)));
  //     } else {
  //       setInput(input === '0' ? String(value) : input + value);
  //     }
  //   };

  return (
    <div>
      <NavBar />
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly />
      <div>
        <button onClick={() => handleClick("AC")}>AC</button>
        <button onClick={() => handleClick("+/-")}>+/-</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")}>Ans</button>
      </div>
      <div>
        <p>
          Result: <button>{result}</button>
        </p>
      </div>
    </div>
  );
}

export default Calculator;
