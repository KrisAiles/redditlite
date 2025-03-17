import React from "react";
import './Comments.css';
import commentsLogo from './comment_logo.png';
import backArrow from './back_arrow.png';

function Comments(props) {
    const post = props.comments[0].data.children[0].data;
    let timePosted = post.created;

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
        <div className="comments-container">
            <div id="back-arrow" onClick={props.handlePostChange}><img src={backArrow} alt="back arrow" /></div>                
            <div className="comment" key={post.title}>
                <div className="comment-box">
                    <span className="commentBy">r/{post.subreddit}</span> <div className="dot-container"><span className="dot">.</span></div> <span className="time">{timeSincePost(timePosted)}</span><br/>
                    <span className="author">{post.author}</span>
                    <p>{post.title}</p>
                    <span className="votes">{post.score <= 1000 ? post.score : (post.score / 1000).toFixed(1) + 'K'} votes</span> <div className="dot-container"><span className="dot">.</span></div> <span className="comments">{post.num_comments <= 1000 ? post.num_comments : (post.num_comments / 1000).toFixed(1) + 'K'} comments</span> <div className="dot-container"><span className="dot">.</span></div> <a id="post-link" href={post.url} rel="noreferrer" target="_blank">view full post on Reddit</a>
                </div>
                <span className="comments-title">Comments:</span>
            </div>
            {props.comments[1].data.children.map((comment) => {
                return (
                    comment.data.body && <div>
                    <div className="comments-para" key={comment.data.link_id}>
                        <img src={commentsLogo} alt="Reddit Logo" /> <span className="commentBy">r/{comment.data.author}</span> <div className="comment-dot-container"><span className="comment-dot">.</span></div> <span className="time">{timeSincePost(comment.data.created)}</span><br/>
                    </div>  
                    <div className="comment-body">
                        <span className="comments-text">{comment.data.body}</span>
                    </div>
                </div>
                )          
            })}
        </div>
    )
};

export default Comments;