import React from 'react';
import './Products.css';

const Products = (props) => {
    console.log(props.product)
    const {name, price, seller, ratings, img} = props.product
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>price: ${price}</h4>
            <p>Manufacturer: {seller}</p>
            <p>Raing: {ratings}</p>
        </div>
    );
};

export default Products;