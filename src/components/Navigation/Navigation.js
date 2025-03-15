import React from "react";
import './Navigation.css';
import NavItems from "../NavItems/NavItems";

function Navigation(props) {

    return (
        <nav>
            <img id="close-arrow" src={props.navImage} alt="Open/Close navigation bar" onClick={props.handleNavChange} />
            { props.navOpen && <NavItems handleNavSearchChange={props.handleNavSearchChange} navSearch={props.navSearch} /> }
        </nav>
    )

};

export default Navigation;