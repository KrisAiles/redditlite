import React from "react";
import './Popular.css';
import Posts from "../Posts/Posts";
import Communities from "../Communities/Communities";

function Popular(props) {

    return (
        <div id="popular-container">
            <div className="post-container">
                <Posts />
            </div>
            <div id="community-placeholder"></div>
            <div className="community-container">
                <Communities handleCommunitiesChange={props.handleCommunitiesChange} communities={props.communities} />
            </div>
        </div>

    )
};

export default Popular;