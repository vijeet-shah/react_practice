import { React, useEffect, useRef, useState } from "react";
import "./PassGen.css";
import NavBar2 from "../../components/Navbar2";

const PassGen = () => {
  let [password, setPassword] = useState("");
  let [range, setRange] = useState(0);
  let [isNumber, setIsNumber] = useState(false);
  let [isCharacter, setIsCharacter] = useState(false);

  let clipRef = useRef(null);

  useEffect(() => {
    RandomValue();
  }, [range, isNumber, isCharacter]);

  let RandomValue = () => {
    let a = "";
    let text = "ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuvwxyz";
    if (isNumber) text += "1234567890";
    if (isCharacter) text += "~!@#$%^&*()_+=-";

    for (let i = 1; i < range; i++) {
      let x = Math.floor(Math.random() * text.length + 1);
      let pass = text.charAt(x);
      a += pass;
    }
    setPassword(a);
  };

  function CopyToClip() {
    clipRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  //window.navigator.clipboard.writeText(text)

  return (
    <div>
      <NavBar2 />
      <div className="container">
        <div className="input">
          <input
            type="text"
            value={password}
            placeholder="Password"
            ref={clipRef}
            readOnly
          />
          <button onClick={() => CopyToClip()}>Copy</button>
        </div>
        <input
          type="range"
          min="0"
          max="20"
          onChange={(e) => {
            setRange(e.target.value);
          }}
        />
        <span>Length {range} </span>
        <input
          type="checkbox"
          onChange={() => {
            setIsNumber((prev) => !prev);
          }}
        />
        Number
        <input
          type="checkbox"
          onChange={() => setIsCharacter((prev) => !prev)}
        />
        Special Char
      </div>
    </div>
  );
};

export default PassGen;
