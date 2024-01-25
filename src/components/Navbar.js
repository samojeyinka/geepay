import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink exact  
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/"
        >
          Home
        </NavLink>
        <NavLink 
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/products"
        >
          Products
        </NavLink>
    </nav>
  )
}

export default Navbar