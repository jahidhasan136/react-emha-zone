import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div className='cart'>
            <h2 style={{textAlign: 'center', marginBottom: '50px'}}>Order summary</h2>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <h4>Grand Total: </h4>
        </div>
    );
};

export default Cart;