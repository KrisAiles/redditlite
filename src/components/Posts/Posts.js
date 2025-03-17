import React from "react";
import './Posts.css';

function Posts(props) {

    function timeSincePost(time) {
        let datePosted = new Date(time * 1000);
        let dateNow = new Date();
        let dateDifference = dateNow - datePosted;
        let seconds = dateDifference / 1000;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        let months = days / 30;
        let years = months / 12;
        if (minutes < 60) {
            return `${Math.floor(minutes)} min. ago`;
        } else if (hours >= 1 && hours < 24) {
            return `${Math.floor(hours)} hr. ago`;
        } else if (days < 31) {
            return `${Math.floor(days)}d ago`;
        } else if (months < 12) {
            return `${Math.floor(months)}mo ago`;
        } else {
            return `${Math.floor(years)}y ago`;
        }
    }

    return (
        <div className="top-border">
            {props.posts.map((post) => {
                let timePosted = post.data.created;
                return (
                    <div className="post" key={post.data.id} data-id={post.data.permalink}>
                        <div className="post-box" onClick={props.handlePostChange} data-id={post.data.permalink}>
                            <span data-id={post.data.permalink} className="postBy">r/{post.data.subreddit}</span> <div data-id={post.data.permalink} className="dot-container"><span data-id={post.data.permalink} className="dot">.</span></div> <span data-id={post.data.permalink} className="time">{timeSincePost(timePosted)}</span>
                            <p data-id={post.data.permalink}>{post.data.title}</p>
                            <span data-id={post.data.permalink} className="votes">{post.data.score <= 1000 ? post.data.score : (post.data.score / 1000).toFixed(1) + 'K'} votes</span> <div data-id={post.data.permalink} className="dot-container"><span data-id={post.data.permalink} className="dot">.</span></div> <span data-id={post.data.permalink} className="comments">{post.data.num_comments <= 1000 ? post.data.num_comments : (post.data.num_comments / 1000).toFixed(1) + 'K'} comments</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Posts;