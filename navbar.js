import React from "react";
import Logo from "../images/bnb-logo.png" 
export default function Navbar(){
    return (
        <nav className="bnb--nav">
            <div><img src={Logo} className="bnb--logo"/></div>
            <div className="logo--name"><h3>airbnb</h3></div>
        </nav>
    )
}