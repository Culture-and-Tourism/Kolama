import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
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
import Add from './container/OrderManagement/Supplier/Add/Add';
import AddKolam from './container/Arts Management/Admin/Kolam/AddKolam.jsx';
import Masks from './container/Arts Management/User/Masks/Masks';
import EventHome from './container/EventManagement/Admin/EventHome';
import './App.css';
import Kolam from './container/Arts Management/User/Kolam/Kolam';

const queryClient = new QueryClient();


const App = () => (
  <ShopContextProvider>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ToastContainer></ToastContainer>
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
          <Route
            path='/shop'
            element={
              <>
                <Shop />
                <Footer />
              </>
            }
          />
          <Route
            path='/cart'
            element={
              <>
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path='/register'
            element={
              <>
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path='/add'
            element={
              <>
                <Add />

              </>
            }
          />
          <Route
            path='/addkolam'
            element={
              <>
                <AddKolam />
              </>
            }
          />
          <Route
            path='/kolam'
            element={
              <>
                <Masks />
                <Footer />
              </>
            }
          />
          <Route
            path='/mask'
            element={
              <>
                <Kolam />
                <Footer />
              </>
            }
          />
            <Route
            path='/event'
            element={
              <>
                <EventHome />

              </>
            }
          />
        </Routes>
      </QueryClientProvider>
    </Router>
  </ShopContextProvider>
);

export default App;