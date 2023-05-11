import React, { useContext } from 'react';
import { ShopContext } from '../../../../context/shop-context';
import { CartItem } from './cart-item';
import './Cart.css';
import "./shoppingCart.css"
import { PRODUCTS } from '../../../../products';
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
      {PRODUCTS.map((product) => {
  if (cartItems[product._id] !== 0) {
    return <CartItem data={product} />;
  }
  return null; // Add this return statement
})}

      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h4> Subtotal: ${totalAmount} </h4>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h3> Your Shopping Cart is Empty</h3>
      )}
    </div>
  );
};

export default Cart;

