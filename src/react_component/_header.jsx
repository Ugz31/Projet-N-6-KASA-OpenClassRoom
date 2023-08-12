import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div />
      <nav>
        <NavLink to="/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
