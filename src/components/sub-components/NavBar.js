import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/valencias" exact>
        Valências
      </NavLink>
      <NavLink to="/sobre" exact>
        Sobre
      </NavLink>
    </nav>
  );
};

export default NavBar;
