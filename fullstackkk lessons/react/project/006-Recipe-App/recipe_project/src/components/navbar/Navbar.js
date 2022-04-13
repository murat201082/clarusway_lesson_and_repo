import React from 'react';
import {Link} from "react-router-dom";
import Style from "./navbar.module.css";



const Navbar = () => {
  return (
    <div className={Style.navbar}>
    <div className={Style.nav1}>
    <Link to='/edben'className={Style.nav3}> Edben </Link>
    </div>

    <div className={Style.nav2}>
    <Link to='/about' className={Style.nav3}> About </Link>
    <Link to='/github' className={Style.nav3}> GitHub </Link>
    <Link to='/logout' className={Style.nav3}> Logout </Link>
   
    </div>
    
    
    
    </div>
    
  )
}

export default Navbar;