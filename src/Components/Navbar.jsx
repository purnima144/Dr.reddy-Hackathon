import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo1.png";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">Pharmark</div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="main">Home</Link>
          </li>
          <li>
            <Link to="/Namegenerator">Generator</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="sign-up">Sign up</Link>
          </li>
        </ul>
        <Link to="#" className="hey">
          Code Crushers
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
