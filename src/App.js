import React, { useEffect, useState }  from 'react';
import './App.css';
import redditSearch from './Utilities/redditSearch';
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
const [subredditPosts, setSubredditPosts] = useState("r/popular");
const [posts, setPosts] = useState([]);
const [permalink, setPermalink] = useState('');
const [comments, setComments] = useState([]);
const [subredditCommunities, setSubredditCommunities] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [searchInput, setSearchInput] = useState('');
const [profile, setProfile] = useState("");
const [history, setHistory] = useState([]);

useEffect(() => {
  if (!profile) {
    return;
  } else if (history.length === 0) {
    setHistory([profile, ...history]);
  } else if (history.length > 0) {
    let newArray = history.filter(subreddit =>
      subreddit.name !== profile.name);
    setHistory([profile, ...newArray.slice(0, 4)]);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [profile])
useEffect(() => {
  redditSearch(setPosts, searchTerm);
}, [searchTerm])
useEffect(() => {
  subreddits(setSubredditCommunities);
}, [])
useEffect(() => {
  postComments(setComments, permalink);
}, [permalink])
useEffect(() => {
  subredditsearch(setPosts, subredditPosts);
}, [subredditPosts])
const handleSearchChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
}
const handleSearchSubmit = (e) => {
  e.preventDefault();
  if (searchInput) {
    setProfile("");
    setPosts([]);
    setSearchTerm("");
    setSearchTerm(searchInput);
    setSearchInput("");
  } else {
    return;
  };
}
const onTopicsClick = (e) => {
  setProfile("");
  setPosts([]);
  setSubredditPosts("");
  setSearchTerm("");
  setSearchTerm(e.target.id);
  setPostDisplay(true);
  window.scrollTo(0, 0);
  setCommentsDisplay(false);
}
const handleSubredditsClick = (e) => {
  if (subredditPosts === e.target.dataset.id) {
    return;
  } else {
    setPosts([]);
    setSearchTerm("");
    setSubredditPosts("");
    setSubredditPosts(e.target.dataset.id);
    setProfile({
      name: e.target.dataset.id, 
      title: e.target.dataset.title, 
      created: e.target.dataset.created, 
      icon: e.target.dataset.icon, 
      subscribers: e.target.dataset.subs, 
      description: e.target.dataset.description
    });
    setPostDisplay(true);
    window.scrollTo(0, 0);
    setCommentsDisplay(false);
  }
}
const handlePopularChange = () => {
    setProfile("");
    setPosts([]);
    setSearchTerm("");
    setSubredditPosts("");
    setSubredditPosts("r/popular");
    setPostDisplay(true);
    window.scrollTo(0, 0);
    setCommentsDisplay(false);
    setPermalink('');
}
const handlePostChange = (e) => {
  if (postDisplay) {
    setComments([]);
    setPermalink(e.target.dataset.id);
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
    <div id='body-container'>
      <header id='header-section'>
        <Header searchInput={searchInput} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} handleNavChange={handleNavChange} navOpen={navOpen} navImage={navImage} handleOpenCommunitiesChange={handleOpenCommunitiesChange} communitiesOpen={communitiesOpen} communitiesImage={communitiesImage} mobileViewport={mobileViewport} />
      </header>
      <main>
        {navOpen && mobileViewport && <section id='nav-bar'>
          <Navigation handleSubredditsClick={handleSubredditsClick} history={history} onTopicsClick={onTopicsClick} subredditPosts={subredditPosts} handlePopularChange={handlePopularChange} handleNavChange={handleNavChange} navOpen={navOpen} navImage={navImage} handleNavSearchChange={handleNavSearchChange} navSearch={navSearch} />
        </section>}
        {!mobileViewport && <section id='nav-bar'>
          <Navigation handleSubredditsClick={handleSubredditsClick} history={history} onTopicsClick={onTopicsClick} commentsDisplay={commentsDisplay} subredditPosts={subredditPosts} handlePopularChange={handlePopularChange} handleNavChange={handleNavChange} navOpen={navOpen} navImage={navImage} handleNavSearchChange={handleNavSearchChange} navSearch={navSearch} />
        </section>}
        <section id='main-display'>
          <MainDisplay profile={profile} handleSubredditsClick={handleSubredditsClick} subredditCommunities={subredditCommunities} comments={comments} handlePopularChange={handlePopularChange} posts={posts} postDisplay={postDisplay} commentsDisplay={commentsDisplay} handlePostChange={handlePostChange} navOpen={navOpen} handleCommunitiesChange={handleCommunitiesChange} communities={communities} handleOpenCommunitiesChange={handleOpenCommunitiesChange} communitiesOpen={communitiesOpen} communitiesImage={communitiesImage} mobileViewport={mobileViewport} />
        </section>            
      </main>
    </div>
  );
}

export default App;