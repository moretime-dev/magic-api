import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar container">
      <ul className="ul">
        <li>
          <NavLink to="/" className="link">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/sets" className="link">
            SETS
          </NavLink>
        </li>
        <li>
          <NavLink to="/singles" className="link">
            SINGLES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
