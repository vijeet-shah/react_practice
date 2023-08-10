import React from 'react'
import { useNavigate } from 'react-router-dom'

const More = ({ isDarkMode }) => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  return (
    <div style={{ textAlign: 'center' }} className={isDarkMode ? 'clr-white' : 'clr-black'}>
      <button
        onClick={goToHome}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          marginTop: '20px',
        }}
      >
        Take Me to testing Phase 1
      </button>
    </div>
  )
}

export default More
