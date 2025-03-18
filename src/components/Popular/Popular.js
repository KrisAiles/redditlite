import React from "react";
import './Popular.css';
import Posts from "../Posts/Posts";
import Comments from "../Comments/Comments";

function Popular(props) {

    return (
        <div id="popular-container">
            <div className="post-container">
                {props.postDisplay && props.posts.length === 0 && <h1>Loading...</h1>}
                {props.postDisplay && props.posts.length > 0 && <Posts profile={props.profile} popularOpen={props.popularOpen} handlePopularChange={props.handlePopularChange} posts={props.posts} handlePostChange={props.handlePostChange} /> }
                {props.commentsDisplay && props.comments.length === 0 && <h1>Loading...</h1>}
                {props.commentsDisplay && props.comments.length > 0 && <Comments comments={props.comments} handlePostChange={props.handlePostChange} /> }
            </div>            
        </div>

    )
};

export default Popular;