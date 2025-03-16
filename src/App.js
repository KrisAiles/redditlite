import React, { useEffect, useState }  from 'react';
import './App.css';
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
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
const handleresize = () => {
  setWindowWidth(window.innerWidth);
}
useEffect(() => {
  window.addEventListener("resize", handleresize);
  return () => window.removeEventListener("resize", handleresize);
}, [windowWidth])
useEffect(() => {
  if (windowWidth < 880) {
    setNavOpen(false);
    setNavImage(openNav);
  }
}, [windowWidth])
  
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id='nav-bar'>
          <Navigation handleNavChange={handleNavChange} navOpen={navOpen} navImage={navImage} handleNavSearchChange={handleNavSearchChange} navSearch={navSearch} />
        </section>
        <section id='main-display'>
          <MainDisplay navOpen={navOpen} handleCommunitiesChange={handleCommunitiesChange} communities={communities} />
        </section>            
      </main>
    </>
  );
}

export default App;

//<section id='nav-bar'></section> <section id='main-display'></section>