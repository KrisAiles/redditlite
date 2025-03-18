import React from 'react';
import './NavItems.css';
import onpopular from './onpopular.png';
import offpopular from './offpopular.png';
import History from '../History/History';

function NavItems(props) {

    return (
        <>
        <div id='nav-items-width'></div>
        <div id="nav-items">
            <div id='nav-items-width'></div>
            <div className="nav-items-container">
                    {props.subredditPosts === "r/popular" && !props.commentsDisplay ? <div id='popular'><img src={onpopular} alt="arrow" /><span id="popular-text">Popular</span></div> : <div id='off-popular' onClick={props.handlePopularChange}><img src={offpopular} alt="arrow" /><span id="popular-text">Popular</span></div>}
            </div>
            {props.history.length > 0 && <History handleSubredditsClick={props.handleSubredditsClick} NavItems history={props.history} />}            
            <div className='nav-items-container'>
                <div className='title'>TOPICS</div>
                <div id='search-terms'>
                    <div id='internet culture' className='items' onClick={props.onTopicsClick}>Internet Culture</div>
                    <div id='games' className='items' onClick={props.onTopicsClick}>Games</div>
                    <div id='technology' className='items' onClick={props.onTopicsClick}>Technology</div>
                    <div id='pop culture' className='items' onClick={props.onTopicsClick}>Pop Culture</div>
                    <div id='movies' className='items' onClick={props.onTopicsClick}>Movies</div>
                    <div id='tv' className='items' onClick={props.onTopicsClick}>TV</div>
                    {props.navSearch && <div className='more-less' onClick={props.handleNavSearchChange}>See more</div>}
                </div>
                {!props.navSearch && 
                <div id='extra-search-terms'>
                    <div id='anime' className='items' onClick={props.onTopicsClick}>Anime</div>
                    <div id='arts' className='items' onClick={props.onTopicsClick}>Arts</div>
                    <div id='business' className='items' onClick={props.onTopicsClick}>Business</div>
                    <div id='collectibles' className='items' onClick={props.onTopicsClick}>Collectibles</div>
                    <div id='education' className='items' onClick={props.onTopicsClick}>Education</div>
                    <div id='fashion and beauty' className='items' onClick={props.onTopicsClick}>Fashion & Beauty</div>
                    <div id='food and drinks' className='items' onClick={props.onTopicsClick}>Food & Drinks</div>
                    <div id='home and garden' className='items' onClick={props.onTopicsClick}>Home & Garden</div>
                    <div id='humanities' className='items' onClick={props.onTopicsClick}>Humanities</div>
                    <div id='music' className='items' onClick={props.onTopicsClick}>Music</div>
                    <div id='nature and outdoors' className='items' onClick={props.onTopicsClick}>Nature & Outdoors</div>
                    <div id='news and politics' className='items' onClick={props.onTopicsClick}>News & Politics</div>
                    <div id='places and travel' className='items' onClick={props.onTopicsClick}>Places & Travel</div>
                    <div id='science' className='items' onClick={props.onTopicsClick}>Science</div>
                    <div id='sports' className='items' onClick={props.onTopicsClick}>Sports</div>
                    <div id='spooky' className='items' onClick={props.onTopicsClick}>Spooky</div>
                    <div id='vehicles' className='items' onClick={props.onTopicsClick}>Vehicles</div>
                    <div id='wellness' className='items' onClick={props.onTopicsClick}>Wellness</div>
                    <div className='more-less' onClick={props.handleNavSearchChange}>See less</div>
                </div>
                }
            </div>
        </div>
        </>
    )
};

export default NavItems;