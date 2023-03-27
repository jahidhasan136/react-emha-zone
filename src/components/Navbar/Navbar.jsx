import React from 'react';
import './Navbar.css';
import logo from '../../images/Logo.svg'

const Navbar = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;