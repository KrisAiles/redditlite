import React from "react";
import './MainDisplay.css';
import Popular from "../Popular/Popular";
import Comments from "../Comments/Comments";
//import Posts from "../Posts/Posts";
//import SubReddit from "../SubReddit/SubReddit";

function MainDisplay(props) {
    
    return (
        <>
            {props.navOpen && <div id="nav-placeholder"></div>}
            <Popular subredditCommunities={props.subredditCommunities} comments={props.comments} popularOpen={props.popularOpen} handlePopularChange={props.handlePopularChange} posts={props.posts} postDisplay={props.postDisplay} commentsDisplay={props.commentsDisplay} handlePostChange={props.handlePostChange} handleCommunitiesChange={props.handleCommunitiesChange} communities={props.communities} handleOpenCommunitiesChange={props.handleOpenCommunitiesChange} communitiesOpen={props.communitiesOpen} communitiesImage={props.communitiesImage} mobileViewport={props.mobileViewport} />
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