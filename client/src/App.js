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
import Login from './components/Login/Login';
import './App.css';
import { ShopContextProvider } from './context/shop-context';

const App = () => (
  <div>
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <ArtHeader />
                <PlaceHeader />
                <EventHeader />
                <ShopHeader />
                <AboutUs />
                <SriLanka />
                <Intro />
                <Team />
              </>
            }
          />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  </div>
);

export default App;
