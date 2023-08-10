import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-clr-black'>
      <h1 className="w1 bg-green">
        Welcome to my testing Playgroung
      </h1>
      <nav className="navbar bg-green">
        <ul className="main-nav">
          <li className="bg-btn">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-btn">
            <Link to="/counter">Counter</Link>
          </li>
          <li className="bg-btn">
            <Link to="/darkmode">Dark Mode</Link>
          </li>
          <li className="bg-btn">
            <Link to="/eatfood">Eat Food</Link>
          </li>
          <li className="bg-btn">
            <Link to="/imagelib">Image Lib</Link>
          </li>
          <li className="bg-btn">
            <Link to="/calci">Calculator</Link>
          </li>
          <li className="bg-btn">
            <Link to="/todo">To-Do List</Link>
          </li>
          <li className="bg-btn">
            <Link to="/formhandle">Form</Link>
          </li>
          <li className="bg-btn">
            <Link to="/listkey">List & Key</Link>
          </li>
        </ul>
      </nav>

      <div>
        <nav className="navbara bg-red">
          <ul className="main-nava">
            <li className="bg-btn">
              <Link to="/more">More</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
