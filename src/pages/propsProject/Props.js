import React, { useState } from "react";
import NavBar2 from "../../components/Navbar2";

let arr = [
  { name: "vijeet", age: 23, adult: "isTrue" },
  { name: "kirat", age: 19, adult: "isFalse" },
  { name: "deepak", age: 21, adult: "isTrue" },
  { name: "saurabh", age: 18, adult: "isFalse" },
];

const Props = () => {
  const [a, b] = useState(0);
  function clickFun() {
    b(a + 1);
  }

  console.log("hello");
  return (
    <div>
      <NavBar2 />
      {arr.map((arrr) => {
        return (
          <div>
            {arrr.name}
            <br />
            {arrr.age}
          </div>
        );
      })}
      <div>
        {arr.map((index) => {
          return <ChildProps name={index.name} age={index.age}></ChildProps>;
        })}
      </div>

      <h1>Click {a}</h1>
      <button onClick={clickFun}>Click</button>
    </div>
  );
};

function ChildProps(props) {
  return (
    <div>
      <br />
      {props.name}
      <br />
      {props.age}
    </div>
  );
}

export default Props;
