import React, { useState }  from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import closeArrow from './close_arrow.png';
import openNav from './open_nav.png';

function App() {
const [navOpen, setNavOpen] = useState(true);
const [navImage, setNavImage] = useState(closeArrow);
const [navSearch, setNavSearch] = useState(true);

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
  
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id='nav-bar'>
          <Navigation handleNavChange={handleNavChange} navOpen={navOpen} navImage={navImage} handleNavSearchChange={handleNavSearchChange} navSearch={navSearch} />
        </section>
        
      </main>
    </>
  );
}

export default App;