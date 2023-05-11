import React, {  useContext } from 'react';
import { ShopContext } from '../../../../context/shop-context';
import './main.css';
import RatingStars from './RatingStars';



export const Product = (props) => {
  const { _id, title, price, cover, shortDesc,totalStars } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[_id];





  return (
    <div className='product'>
      <div className='product' key={_id}>
        <img className='product-image' src={cover} alt={cover} />
        <h4 className='product-name'>{title}</h4>
        <RatingStars rating={totalStars} />
        
        <p>{shortDesc}</p>
        <span className='product-price'>{price}$</span>
        <div className='buttons'>
          <button className='btn'>Detail</button>
          <button className="btn" onClick={() => addToCart(_id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        </div>
      </div>
    </div>
  );
};
