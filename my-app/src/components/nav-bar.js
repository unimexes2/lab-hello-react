import React from "react";


import logo from '../images/1.png' // relative path to image 
import bars from "../images/menu-top-xs-dark.png"
function Navbar () {
    return(<div className="bars-up">
      <img   src={logo}/>
      <img   src={bars}/>

     </div>)
}

export default Navbar;
