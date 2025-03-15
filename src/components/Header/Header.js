import React from "react";
import './Header.css';
import logo from './redditlogo.png';
import magnify from './magnify.png';

function Header() {

    return (
        <div id="header">
         <div id="logo-container">
            <img id="logo" src={logo} alt="Logo" />
         </div>
         <div id="search-container">
            <div id="input-container">
                <input id="search" type="text" placeholder="Search Redditlite" />
                <img id="magnify" src={magnify} alt="magnifying glass" />
            </div>
         </div>
        </div>
    )
}

export default Header;