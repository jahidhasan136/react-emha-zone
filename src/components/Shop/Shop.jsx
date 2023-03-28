import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='card-container'>
                {
                    products.map(product => <Products product={product} key={product.id}
                    handleAddToCart={handleAddToCart}></Products>)
                }
            </div>
            <div>
                <h4>Order summary</h4>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;