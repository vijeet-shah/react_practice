import React, { useState } from "react";
import NavBar from '../components/NavBar';


function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
    <NavBar/>
      <h1>My App</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Turn Off" : "Turn On"} Dark Mode
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
        sapien at tortor imperdiet hendrerit. Sed vitae turpis vel erat
        suscipit scelerisque.
      </p>
    </div>
  );
}

export default Darkmode