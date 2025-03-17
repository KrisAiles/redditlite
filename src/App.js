import React, { useEffect, useState }  from 'react';
import './App.css';
import subredditsearch from './Utilities/subredditsearch';
import postComments from './Utilities/postComments';
import subreddits from './Utilities/subreddits';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainDisplay from './components/MainDisplay/MainDisplay';
import closeArrow from './close_arrow.png';
import openNav from './open_nav.png';

function App() {
const [navOpen, setNavOpen] = useState(true);
const [navImage, setNavImage] = useState(closeArrow);
const [navSearch, setNavSearch] = useState(true);
const [communities, setCommunities] = useState(true);
const [communitiesOpen, setCommunitiesOpen] = useState(true);
const [communitiesImage, setCommunitiesImage] = useState(closeArrow);
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [mobileViewport, setMobileViewport] = useState(false);
const [postDisplay, setPostDisplay] = useState(true);
const [commentsDisplay, setCommentsDisplay] = useState(false);
const [popularOpen, setPopularOpen] = useState(true);
const [subredditPosts, setSubredditPosts] = useState("r/popular");
const [posts, setPosts] = useState([]);
const [permalink, setPermalink] = useState('');
const [comments, setComments] = useState([]);
const [subredditCommunities, setSubredditCommunities] = useState([]);

useEffect(() => {
  subreddits(setSubredditCommunities);
}, [])
useEffect(() => {
  postComments(setComments, permalink);
}, [permalink])
useEffect(() => {
  subredditsearch(setPosts, subredditPosts);
}, [subredditPosts])
const handleCommentsClick = () => {

}
const handlePopularChange = () => {
  if (popularOpen) {
    setPopularOpen(false);
  } else {
    setPopularOpen(true);
    subredditsearch(setPosts, subredditPosts);
  }
}
const handlePostChange = (e) => {
  if (postDisplay) {
    setPermalink(e.target.dataset.id);
    console.log(e.target.dataset.id);
    window.scrollTo(0, 0);
    setPostDisplay(false);
    setCommentsDisplay(true);
  } else {
    setPostDisplay(true);
    setCommentsDisplay(false);
    setPermalink('');
  }
}
const handleNavChange = () => {
  if (navOpen) {
    setNavOpen(false);
    setNavImage(openNav);
  } else {
    setNavOpen(true);
    setNavImage(closeArrow);
  }
}
const handleNavSearchChange = () => {
  if (navSearch) {
    setNavSearch(false);
  } else {
    setNavSearch(true);
  }
}
const handleCommunitiesChange = () => {
  if (communities) {
    setCommunities(false);
  } else {
    setCommunities(true);
  }
}
const handleOpenCommunitiesChange = () => {
  if (communitiesOpen) {
    setCommunitiesOpen(false);
    setCommunitiesImage(openNav);
  } else {
    setCommunitiesOpen(true);
    setCommunitiesImage(closeArrow);
  }
}
const handleresize = () => {
  setWindowWidth(window.innerWidth);
}
useEffect(() => {
  window.addEventListener("resize", handleresize);
  return () => window.removeEventListener("resize", handleresize);
}, [windowWidth])
useEffect(() => {
  if (windowWidth < 881) {
    setNavOpen(false);
    setNavImage(openNav);
    setCommunitiesOpen(false);
    setCommunitiesImage(openNav);
    setMobileViewport(true);
  } else {
    setNavOpen(true);
    setNavImage(closeArrow);
    setCommunitiesOpen(true);
    setCommunitiesImage(closeArrow);
    setMobileViewport(false);
  }
}, [windowWidth])
  
  return (
    <>
      <header>
        <Header handleNavChange={handleNavChange} navOpen={navOpen} navImage={navImage} handleOpenCommunitiesChange={handleOpenCommunitiesChange} communitiesOpen={communitiesOpen} communitiesImage={communitiesImage} mobileViewport={mobileViewport} />
      </header>
      <main>
        {navOpen && mobileViewport && <section id='nav-bar'>
          <Navigation popularOpen={popularOpen} handlePopularChange={handlePopularChange} handleNavChange={handleNavChange} navOpen={navOpen} navImage={navImage} handleNavSearchChange={handleNavSearchChange} navSearch={navSearch} />
        </section>}
        {!mobileViewport && <section id='nav-bar'>
          <Navigation popularOpen={popularOpen} handlePopularChange={handlePopularChange} handleNavChange={handleNavChange} navOpen={navOpen} navImage={navImage} handleNavSearchChange={handleNavSearchChange} navSearch={navSearch} />
        </section>}
        <section id='main-display'>
          <MainDisplay subredditCommunities={subredditCommunities} comments={comments} popularOpen={popularOpen} handlePopularChange={handlePopularChange} posts={posts} postDisplay={postDisplay} commentsDisplay={commentsDisplay} handlePostChange={handlePostChange} navOpen={navOpen} handleCommunitiesChange={handleCommunitiesChange} communities={communities} handleOpenCommunitiesChange={handleOpenCommunitiesChange} communitiesOpen={communitiesOpen} communitiesImage={communitiesImage} mobileViewport={mobileViewport} />
        </section>            
      </main>
    </>
  );
}

export default App;

//<section id='nav-bar'></section> <section id='main-display'></section>