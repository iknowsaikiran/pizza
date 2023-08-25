import React, { useState } from "react";

import "./styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Padding } from "@mui/icons-material";

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <navbar>
      <div  className="title">
        <img src="pizzaLogo.png" style={{width:"70px" }}/>
        Tops pizza
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">AboutUs</NavLink>
        </li>
       
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </navbar>
  );
};
export default Navbar;