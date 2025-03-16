import React from "react";
import './Posts.css';
import mockdata from "../../mockdata/mockdata";

function Posts() {

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
        <div>
            {mockdata.postsArray.map((post) => {
                let timePosted = post.created;
                return (
                    <div className="post" key={post.title}>
                        <div className="post-box">
                            <span className="postBy">r/{post.subreddit}</span> <div className="dot-container"><span className="dot">.</span></div> <span className="time">{timeSincePost(timePosted)}</span>
                            <p>{post.title}</p>
                            <span className="votes">{post.score <= 1000 ? post.score : (post.score / 1000).toFixed(1) + 'K'} votes</span> <div className="dot-container"><span className="dot">.</span></div> <span className="comments">{post.num_comments <= 1000 ? post.num_comments : (post.num_comments / 1000).toFixed(1) + 'K'} comments</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Posts;