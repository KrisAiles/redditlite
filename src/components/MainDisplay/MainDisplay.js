import React from "react";
import './MainDisplay.css';
import Popular from "../Popular/Popular";
//import Posts from "../Posts/Posts";
//import SubReddit from "../SubReddit/SubReddit";

function MainDisplay(props) {
    
    return (
        <>
            {props.navOpen && <div id="nav-placeholder"></div>}
            <Popular handleCommunitiesChange={props.handleCommunitiesChange} communities={props.communities} />
        </>
    )
};

export default MainDisplay;

/*
            <Posts />
            <SubReddit />
            
            <div id="main-display-container">
            </div>
*/