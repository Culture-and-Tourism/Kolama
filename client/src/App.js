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
import AddMask from './container/Arts Management/Admin/Masks/AddMask';
import ViewKolam from './container/Arts Management/Admin/Kolam/ViewKolam';
import Puppets from './container/Arts Management/User/Puppets/Puppets';
import MasksDetails from './container/Arts Management/User/Masks/MasksDetails';
import Art from './container/Arts Management/User/Art/Art';
import AdminHome from './container/Arts Management/Admin/AdminHome/AdminHome';
import ViewMask from './container/Arts Management/Admin/Masks/ViewMask';
import KolamDetails from './container/Arts Management/User/Kolam/KolamDetails';

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
            path='/arts'
            element={
              <>
                <Art />
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
            path='/addmask'
            element={
              <>
                <AddMask />
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
            path='/puppet'
            element={
              <>
                <Puppets />
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
          <Route
            path='/viewkolam'
            element={
              <>
                <ViewKolam />

              </>
            }
          />
          <Route
            path='/viewmask'
            element={
              <>
                <ViewMask />

              </>
            }
          />
          <Route
            path='/products/:id'
            element={
              <>
                <MasksDetails/>
                <Footer />
              </>
            }
          />
          <Route
            path='/masks/:id'
            element={
              <>
                <KolamDetails />
                <Footer />
              </>
            }
          />
          <Route
            path='/adminhome'
            element={
              <>
                <AdminHome />
              </>
            }
          />
        </Routes>
      </QueryClientProvider>
    </Router>
  </ShopContextProvider>
);

export default App;