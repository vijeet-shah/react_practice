import React, { useState } from 'react'

function Darkmode({ isDarkMode, setIsDarkMode }) {
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <div className={isDarkMode ? 'clr-white' : 'clr-black'}>
      <h1>My App</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Turn Off' : 'Turn On'} Dark Mode
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
        sapien at tortor imperdiet hendrerit. Sed vitae turpis vel erat suscipit
        scelerisque.
      </p>
    </div>
  )
}

export default Darkmode
