import React from "react";
import '../css/navbar.css';
import mailLogo from '../images/mail.png'  /*Logi image*/


function Navbar() {
    return (
        <nav> 
            <div className="logo-wrapper"> 
            <img src={mailLogo} alt="mail logo" />
            <h1>NinjaMail</h1>
            </div>
            <ul className="nav-items">
                 <li><a href="#FEATURES" className="ancr">FEATURES</a></li>
                <li><a  href="#PRICING" className="ancr">PRICING</a></li>
                <li><a href="#SERVICES" className="ancr">SERVICES</a></li>
                <li><a href="#PARTNERS" className="ancr">PARTNERS</a></li>
                <li>SIGN UP FREE</li>
                </ul>
        </nav>
    )
}

export default Navbar;