import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1 className="w1">Welcome to my testing Playgroung</h1>
      <nav className="navbar">
        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/darkmode">Dark Mode</Link>
          </li>
          <li>
            <Link to="/eatfood">Eat Food</Link>
          </li>
          <li>
            <Link to="/imagelib">Image Lib</Link>
          </li>
          <li>
            <Link to="/calci">Calculator</Link>
          </li>
          <li>
            <Link to="/todo">To-Do List</Link>
          </li>
          <li>
            <Link to="/formhandle">Form</Link>
          </li>
          <li>
            <Link to="/listkey">List & Key</Link>
          </li>
        </ul>
      </nav>

      <div>
        <nav className="navbara">
          <ul className="main-nava">
            <li>
              <Link to="/more">More</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
