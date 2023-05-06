import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar.jsx';
import ArtHeader from './components/ArtHeader/ArtHeader.jsx';
import PlaceHeader from './components/PlaceHeader/PlaceHeader.jsx';
import EventHeader from './components/EventHeader/EventHeader.jsx';
import ShopHeader from './components/ShopHeader/ShopHeader.jsx';
import AboutUs from './container/AboutUs/AboutUs';
import SriLanka from './container/SriLanka/SriLanka';
import Team from './container/Team/Team';
import Intro from './container/Intro/Intro';
import Gallery from './container/Gallery/Gallery';
import FindUs from './container/FindUs/FindUs';
import Footer from './container/Footer/Footer';

const App = () => (
  <div>
    <Navbar />
    <ArtHeader />
    <PlaceHeader />
    <EventHeader />
    <ShopHeader />
    <AboutUs />
    <SriLanka />
    <Team />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
