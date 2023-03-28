import React from 'react';
import './Products.css';

const Products = (props) => {
    console.log(props.product)
    const { name, price, seller, ratings, img } = props.product
    return (
        <div className='product-container'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <div className='btn'>
                <button className='btn-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;