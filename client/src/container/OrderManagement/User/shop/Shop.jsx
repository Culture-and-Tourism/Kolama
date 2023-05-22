import React, { useContext } from 'react';

import newRequest from '../../../../utils/newRequest';

import {  useQuery, useQueryClient } from '@tanstack/react-query';
import { Product } from './product';

import './Shop.css';
import './main.css';
import { ShopContext } from '../../../../context/shop-context';

const Shop = () => {
  // const queryClient = useQueryClient();
  const { setAllItems } = useContext(ShopContext);
  const { isLoading, error, data } = useQuery({
    queryKey: ['myProducts'],
    queryFn: () =>
      newRequest.get(`/adds?`).then((res) => {
        setAllItems(res.data);
        return res.data;
      }),
  });

  return (
    <div className='shop'>
      {isLoading ? (
        'loading'
      ) : error ? (
        'error'
      ) : (
        <div>
          <div className='shopTitle'>
            <h1>Kolama Online Store</h1>
          </div>
          <div className='products'>
            {data.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
