import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './container/OrderManagement/User/shop/Shop';
import Cart from './container/OrderManagement/User/ShopingCart/Cart';
import './App.css';
import { ShopContextProvider } from './context/shop-context';

const App = () => (
  <div>
  <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
    </ShopContextProvider>
  </div>
);

export default App;
