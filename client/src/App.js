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
import Register from './components/Registration/Register.jsx';
import { ShopContextProvider } from './context/shop-context';
import Gallery from './container/Gallery/Gallery';
import FindUs from './container/FindUs/FindUs';
import Footer from './container/Footer/Footer';
import Art from './container/Arts Management/User/Art/Art';
import Masks from './container/Arts Management/User/Masks/Masks';
import Dashboard from './container/Arts Management/Admin/Dashboard/Dashboard';
import './App.css';

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
                <Team />
                <Intro />
                <Gallery />
                <FindUs />
                <Footer /> 
              </>
            }
          />
          <Route path='/art' element={<> <Art /> <Footer /></> } />
          <Route path='/mask' element={<> <Masks /> <Footer /> </>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dash' element={<Dashboard />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  </div>
);

export default App;
