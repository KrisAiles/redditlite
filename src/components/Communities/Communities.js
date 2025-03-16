import React, { useState, useEffect } from "react";
import './Communities.css';
import mockdata from "../../mockdata/mockdata";
import redditlogo from '../History/redditlogo.png';

function Communities(props) {
    const [topFive, setTopFive] = useState([]);
    const [rest, setRest] = useState([]);

    useEffect(() => {
        setTopFive(mockdata.subredditArray.slice(0,5));
    }, [])
    useEffect(() => {
        setRest(mockdata.subredditArray.slice(5));
    }, [])

    return (
        <div id="community-list-container">
            <span id="popular-communities-text">POPULAR COMMUNITIES</span>
            <div className="community-list">
                { topFive.map((subreddit) => {
                    if (subreddit.community_icon) {
                        return (
                            <div className="subreddit-community" key={subreddit.display_name_prefixed} >
                                <img src={subreddit.community_icon.split('?')[0]} alt={subreddit.display_name_prefixed} /><div className="community-text">{subreddit.display_name_prefixed}</div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="subreddit-community" key={subreddit.display_name_prefixed} >
                                <img src={redditlogo} alt={subreddit.display_name_prefixed} /><div className="community-text">{subreddit.display_name_prefixed}</div>
                            </div>
                        )
                    }
                })}
            </div>
            {props.communities && <div className='more-communities' onClick={props.handleCommunitiesChange}>See more</div>}
            {!props.communities && 
                <div>
                    { rest.map((subreddit) => {
                        if (subreddit.community_icon) {
                            return (
                                <div className="subreddit-community" key={subreddit.display_name_prefixed} >
                                    <img src={subreddit.community_icon.split('?')[0]} alt={subreddit.display_name_prefixed} /><div className="community-text">{subreddit.display_name_prefixed}</div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="subreddit-community" key={subreddit.display_name_prefixed} >
                                    <img src={redditlogo} alt={subreddit.display_name_prefixed} /><div className="community-text">{subreddit.display_name_prefixed}</div>
                                </div>
                            )
                        }
                    })}
                    <div className='more-communities' onClick={props.handleCommunitiesChange}>See less</div>
                </div>
            }
        </div>        
    )
};

export default Communities;