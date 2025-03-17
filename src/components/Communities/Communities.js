import React, { useState, useEffect } from "react";
import './Communities.css';
//import mockdata from "../../mockdata/mockdata";
import redditlogo from '../History/redditlogo.png';

function Communities(props) {
    const [topFive, setTopFive] = useState([]);
    const [rest, setRest] = useState([]);

    useEffect(() => {
        setTopFive(props.subredditCommunities.slice(0,5));
    }, [props.subredditCommunities])
    useEffect(() => {
        setRest(props.subredditCommunities.slice(5));
    }, [props.subredditCommunities])

    return (
        <div id="community-list-container">
            {props.mobileViewport && <img id="close-communities" src={props.communitiesImage} alt="Open/Close navigation bar" onClick={props.handleOpenCommunitiesChange} />}
            <span id="popular-communities-text">POPULAR COMMUNITIES</span>
            <div className="community-list">
                { topFive.map((subreddit) => {
                    if (subreddit.data.community_icon) {
                        return (
                            <div className="subreddit-community" key={subreddit.data.display_name_prefixed} >
                                <img src={subreddit.data.community_icon.split('?')[0]} alt={subreddit.data.display_name_prefixed} /><div className="community-text">{subreddit.data.display_name_prefixed}</div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="subreddit-community" key={subreddit.data.display_name_prefixed} >
                                <img src={redditlogo} alt={subreddit.data.display_name_prefixed} /><div className="community-text">{subreddit.data.display_name_prefixed}</div>
                            </div>
                        )
                    }
                })}
            </div>
            {props.communities && <div className='more-communities' onClick={props.handleCommunitiesChange}>See more</div>}
            {!props.communities && 
                <div>
                    { rest.map((subreddit) => {
                        if (subreddit.data.community_icon) {
                            return (
                                <div className="subreddit-community" key={subreddit.data.display_name_prefixed} >
                                    <img src={subreddit.data.community_icon.split('?')[0]} alt={subreddit.data.display_name_prefixed} /><div className="community-text">{subreddit.data.display_name_prefixed}</div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="subreddit-community" key={subreddit.data.display_name_prefixed} >
                                    <img src={redditlogo} alt={subreddit.data.display_name_prefixed} /><div className="community-text">{subreddit.data.display_name_prefixed}</div>
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