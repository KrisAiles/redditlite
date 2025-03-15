import React from "react";
import './History.css';
import mockdata from "../../mockdata/mockdata";
import redditlogo from './redditlogo.png';

function History() {

    return (
        <div className="nav-items-container">
            <div className="title">RECENT</div>
            { mockdata.history.map((subreddit) => {
                if (subreddit.community_icon) {
                    return (
                        <div className="subreddit-history" key={subreddit.display_name_prefixed} >
                            <img src={subreddit.community_icon.split('?')[0]} alt={subreddit.display_name_prefixed} /><div className="subreddit-text">{subreddit.display_name_prefixed}</div>
                        </div>
                    )
                } else {
                    return (
                        <div className="subreddit-history" key={subreddit.display_name_prefixed} >
                            <img src={redditlogo} alt={subreddit.display_name_prefixed} /><div className="subreddit-text">{subreddit.display_name_prefixed}</div>
                        </div>
                    )
                }

            })}
        </div>
    )
};

export default History;