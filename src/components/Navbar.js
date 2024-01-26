import React from 'react';
import { NavLink } from 'react-router-dom';
import {logo} from '../assets/assets'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
        <NavLink to="/">
          Home
        </NavLink>
        <img src={logo}/>
        </li>
        <li>
        <NavLink to="/products">
          Products
        </NavLink>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar