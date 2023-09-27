import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <div>
      <h1 className="w1">Welcome 2nd to my testing Playgroung</h1>
      <nav className="navbar">
        <ul className="main-nav">
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/pass">Password Generator</Link>
          </li>
          <li>
            <Link to="/contextdarkmode">ContextDarkMode</Link>
          </li>
          <li>
            <Link to="/filter">Filter</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/crud">CRUD</Link>
          </li>
          <li>
            <Link to="/scroll">Scroll</Link>
          </li>
          <li>
            <Link to="/pagination">Pagination</Link>
          </li>
          <li>
            <Link to="/advinput">Adv. Input</Link>
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

export default NavBar2;
