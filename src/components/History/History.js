import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './History.css';
import redditlogo from './redditlogo.png';

function History(props) {

    return (
        <div className="nav-items-container">
            <div className="title">RECENT</div>
            {props.history.map((subreddit) => {
                if (subreddit.icon) {
                    return (
                        <div data-title={subreddit.title} data-created={subreddit.created} data-icon={subreddit.icon} data-subs={subreddit.subscribers} data-description={subreddit.description} data-id={subreddit.name} className="subreddit-history" key={uuidv4()} onClick={props.handleSubredditsClick} >
                            <img data-title={subreddit.title} data-created={subreddit.created} data-icon={subreddit.icon} data-subs={subreddit.subscribers} data-description={subreddit.description} data-id={subreddit.name} src={subreddit.icon.split('?')[0]} alt={subreddit.name} /><div data-title={subreddit.title} data-created={subreddit.created} data-icon={subreddit.icon} data-subs={subreddit.subscribers} data-description={subreddit.description} data-id={subreddit.name} className="subreddit-text">{subreddit.name}</div>
                        </div>
                    )
                } else {
                    return (
                        <div data-title={subreddit.title} data-created={subreddit.created} data-icon={subreddit.icon} data-subs={subreddit.subscribers} data-description={subreddit.description} data-id={subreddit.name} className="subreddit-history" key={uuidv4()} onClick={props.handleSubredditsClick} >
                            <img data-title={subreddit.title} data-created={subreddit.created} data-icon={subreddit.icon} data-subs={subreddit.subscribers} data-description={subreddit.description} data-id={subreddit.name} src={redditlogo} alt={subreddit.name} /><div data-title={subreddit.title} data-created={subreddit.created} data-icon={subreddit.icon} data-subs={subreddit.subscribers} data-description={subreddit.description} data-id={subreddit.name} className="subreddit-text">{subreddit.name}</div>
                        </div>
                    )
                }

            })}
        </div>
    )
};

export default History;