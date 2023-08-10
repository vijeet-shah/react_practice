import React from 'react'

function Home({ isDarkMode }) {
  return (
    <div className={isDarkMode ? 'clr-white' : 'clr-black'}>
      <h2>I am practicing various use of react js on this App</h2>
    </div>
  )
}

export default Home
