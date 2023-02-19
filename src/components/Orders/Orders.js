import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <div>
      <div className='shop-container'>
        <div className='orders-container'>
          {cart.map((product) => (
            <ReviewItem key={product.id} product={product} />
          ))}
        </div>
        <div className='cart-container'>
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
