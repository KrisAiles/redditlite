import React from "react";
import './Popular.css';
import Posts from "../Posts/Posts";
import Communities from "../Communities/Communities";
import Comments from "../Comments/Comments";

function Popular(props) {

    return (
        <div id="popular-container">
            <div className="post-container">
                {props.postDisplay && <Posts popularOpen={props.popularOpen} handlePopularChange={props.handlePopularChange} posts={props.posts} handlePostChange={props.handlePostChange} /> }
                {props.commentsDisplay && props.comments.length === 0 && <h1>Loading...</h1>}
                {props.commentsDisplay && props.comments.length > 0 && <Comments comments={props.comments} handlePostChange={props.handlePostChange} /> }
            </div>
            <div id="community-placeholder"></div>
            {props.communitiesOpen && props.subredditCommunities && <div className="community-container">
                <Communities subredditCommunities={props.subredditCommunities} handleCommunitiesChange={props.handleCommunitiesChange} communities={props.communities} handleOpenCommunitiesChange={props.handleOpenCommunitiesChange} communitiesOpen={props.communitiesOpen} communitiesImage={props.communitiesImage} mobileViewport={props.mobileViewport} />
            </div>}
            
        </div>

    )
};

export default Popular;