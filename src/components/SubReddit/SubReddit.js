import React from "react";
import './SubReddit.css';
import redditLogo from '../History/redditlogo.png'

function SubReddit(props) {
    let date = new Date(props.profile.created * 1000);
    let subscribers;
    if (props.profile.subscribers < 1000) {
        subscribers = props.profile.subscribers;
    } else if (props.profile.subscribers >= 1000 && props.profile.subscribers < 1000000) {
        subscribers = (props.profile.subscribers / 1000).toFixed(1) + 'K';
    } else {
        subscribers = (props.profile.subscribers / 1000000).toFixed(1) + 'M';
    }
    return (
        <div>
            <div id="subreddit-container">   
                <div id="logo-name">
                    {props.profile.icon ? <img id="subreddit-icon" src={props.profile.icon.split('?')[0]} alt="icon" /> : <img id="subreddit-icon" src={redditLogo} alt="icon" />} 
                    <span id="subreddit-name">{props.profile.name}</span>
                </div>             
                <h2 id="subreddit-title">{props.profile.title}</h2>
                <p id="subreddit-description">{props.profile.description}</p>
                <p id="subreddit-date">Created {date.toDateString()}</p>
                <p id="subreddit-subs">{subscribers} Members</p>
            </div>
        </div>
    )
};

export default SubReddit;