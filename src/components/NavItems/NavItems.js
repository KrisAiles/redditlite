import React from 'react';
import './NavItems.css';
import onpopular from './onpopular.png';
import History from '../History/History';
import mockdata from "../../mockdata/mockdata";

function NavItems(props) {
    function onTopicsClick(e) {
        console.log(e.target.id);
    }

    return (
        <>
        <div id='nav-items-width'></div>
        <div id="nav-items">
            <div id='nav-items-width'></div>
            <div className="nav-items-container">
                <div id='popular'>
                    <img src={onpopular} alt="arrow" /><span id="popular-text">Popular</span>
                </div>
            </div>
            {mockdata.history.length > 0 && <History />}            
            <div className='nav-items-container'>
                <div className='title'>TOPICS</div>
                <div id='search-terms'>
                    <div id='internet culture' className='items' onClick={onTopicsClick}>Internet Culture</div>
                    <div id='games' className='items' onClick={onTopicsClick}>Games</div>
                    <div id='technology' className='items' onClick={onTopicsClick}>Technology</div>
                    <div id='pop culture' className='items' onClick={onTopicsClick}>Pop Culture</div>
                    <div id='movies' className='items' onClick={onTopicsClick}>Movies</div>
                    <div id='tv' className='items' onClick={onTopicsClick}>TV</div>
                    {props.navSearch && <div className='more-less' onClick={props.handleNavSearchChange}>See more</div>}
                </div>
                {!props.navSearch && 
                <div id='extra-search-terms'>
                    <div id='anime' className='items' onClick={onTopicsClick}>Anime</div>
                    <div id='arts' className='items' onClick={onTopicsClick}>Arts</div>
                    <div id='business' className='items' onClick={onTopicsClick}>Business</div>
                    <div id='collectibles' className='items' onClick={onTopicsClick}>Collectibles</div>
                    <div id='education' className='items' onClick={onTopicsClick}>Education</div>
                    <div id='fashion and beauty' className='items' onClick={onTopicsClick}>Fashion & Beauty</div>
                    <div id='food and drinks' className='items' onClick={onTopicsClick}>Food & Drinks</div>
                    <div id='home and garden' className='items' onClick={onTopicsClick}>Home & Garden</div>
                    <div id='humanities' className='items' onClick={onTopicsClick}>Humanities</div>
                    <div id='music' className='items' onClick={onTopicsClick}>Music</div>
                    <div id='nature and outdoors' className='items' onClick={onTopicsClick}>Nature & Outdoors</div>
                    <div id='news and politics' className='items' onClick={onTopicsClick}>News & Politics</div>
                    <div id='places and travel' className='items' onClick={onTopicsClick}>Places & Travel</div>
                    <div id='science' className='items' onClick={onTopicsClick}>Science</div>
                    <div id='sports' className='items' onClick={onTopicsClick}>Sports</div>
                    <div id='spooky' className='items' onClick={onTopicsClick}>Spooky</div>
                    <div id='vehicles' className='items' onClick={onTopicsClick}>Vehicles</div>
                    <div id='wellness' className='items' onClick={onTopicsClick}>Wellness</div>
                    <div className='more-less' onClick={props.handleNavSearchChange}>See less</div>
                </div>
                }
            </div>
        </div>
        </>
    )
};

export default NavItems;