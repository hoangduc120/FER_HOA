import React from "react";
import "./_navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  
  return (
    <nav className="nav">
      <ul className="navbar-list">
        <li className="active">
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
