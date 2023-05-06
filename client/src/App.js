import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './container/OrderManagement/User/shop/Shop';
import Cart from './container/OrderManagement/User/ShopingCart/Cart';
import ArtHeader from './components/ArtHeader/ArtHeader.jsx';
import PlaceHeader from './components/PlaceHeader/PlaceHeader.jsx';
import EventHeader from './components/EventHeader/EventHeader.jsx';
import ShopHeader from './components/ShopHeader/ShopHeader.jsx';
import AboutUs from './container/AboutUs/AboutUs';
import SriLanka from './container/SriLanka/SriLanka';
import Team from './container/Team/Team';
import Intro from './container/Intro/Intro';
import './App.css';
import { ShopContextProvider } from './context/shop-context';

const App = () => (
  <div>
  <ShopContextProvider>
    <Router>
      <Navbar />
       <ArtHeader />
    <PlaceHeader />
    <EventHeader />
    <ShopHeader />
    <AboutUs />
    <SriLanka />
    <Team />
    <Intro />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
    </ShopContextProvider>

export default App;
