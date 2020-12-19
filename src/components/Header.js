import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./sub-components/NavBar";
import logo from "../assets/images/acra.png";

const Header = () => {
  return (
    <header>
      <Link to="/" exact>
        <img src={logo} alt="Acra 1º Dezembro" width="100" />
      </Link>
      <NavBar />

      <div>navbar social icons</div>
    </header>
  );
};

export default Header;
