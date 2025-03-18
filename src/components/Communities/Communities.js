import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Communities.css';
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
                            <div data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} className="subreddit-community" key={uuidv4()} onClick={props.handleSubredditsClick} >
                                <img  data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} src={subreddit.data.community_icon.split('?')[0]} alt={subreddit.data.display_name_prefixed} /><div data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} className="community-text">{subreddit.data.display_name_prefixed}</div>
                            </div>
                        )
                    } else {
                        return (
                            <div data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} className="subreddit-community" key={uuidv4()} onClick={props.handleSubredditsClick} >
                                <img data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} src={redditlogo} alt={subreddit.data.display_name_prefixed} /><div data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} className="community-text">{subreddit.data.display_name_prefixed}</div>
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
                                <div data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} className="subreddit-community" key={uuidv4()} onClick={props.handleSubredditsClick} >
                                    <img data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} src={subreddit.data.community_icon.split('?')[0]} alt={subreddit.data.display_name_prefixed} /><div data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} className="community-text">{subreddit.data.display_name_prefixed}</div>
                                </div>
                            )
                        } else {
                            return (
                                <div data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} className="subreddit-community" key={uuidv4()} onClick={props.handleSubredditsClick} >
                                    <img data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} src={redditlogo} alt={subreddit.data.display_name_prefixed} /><div data-title={subreddit.data.title} data-created={subreddit.data.created_utc} data-icon={subreddit.data.community_icon} data-subs={subreddit.data.subscribers} data-description={subreddit.data.public_description} data-id={subreddit.data.display_name_prefixed} className="community-text">{subreddit.data.display_name_prefixed}</div>
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