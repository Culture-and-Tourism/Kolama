import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar.jsx';
import ArtHeader from './components/ArtHeader/ArtHeader.jsx';
import PlaceHeader from './components/PlaceHeader/PlaceHeader.jsx';
import EventHeader from './components/EventHeader/EventHeader.jsx';
import ShopHeader from './components/ShopHeader/ShopHeader.jsx';
import AboutUs from './container/AboutUs/AboutUs';

const App = () => (
  <div>
    <Navbar />
    <ArtHeader />
    <PlaceHeader />
    <EventHeader />
    <ShopHeader />
    <AboutUs />
  </div>
);

export default App;
