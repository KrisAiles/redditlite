import React from "react";
import './MainDisplay.css';
import Popular from "../Popular/Popular";
import Communities from "../Communities/Communities";

function MainDisplay(props) {
    
    return (
        <>
            {props.navOpen && <div id="nav-placeholder"></div>}
            <Popular profile={props.profile} comments={props.comments} popularOpen={props.popularOpen} handlePopularChange={props.handlePopularChange} posts={props.posts} postDisplay={props.postDisplay} commentsDisplay={props.commentsDisplay} handlePostChange={props.handlePostChange} handleOpenCommunitiesChange={props.handleOpenCommunitiesChange} />
            <div id="community-placeholder"></div>
            {props.communitiesOpen && props.subredditCommunities && <div className="community-container">
            <Communities handleSubredditsClick={props.handleSubredditsClick} subredditCommunities={props.subredditCommunities} handleCommunitiesChange={props.handleCommunitiesChange} communities={props.communities} handleOpenCommunitiesChange={props.handleOpenCommunitiesChange} communitiesOpen={props.communitiesOpen} communitiesImage={props.communitiesImage} mobileViewport={props.mobileViewport} />
            </div>}
        </>
    )
};

export default MainDisplay;