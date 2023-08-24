import { Link } from "react-router-dom";
import React, {useState} from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import './styles/Navbar.css'
const Navbar=()=>{
    const [openLinks,setOpenLinks]=useState(false);
    const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
    };
    return(
        <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src="pizzaLogo.png" alt=""/>
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/aboutus"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/aboutus"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    );
  }
    
        

            

export default Navbar;