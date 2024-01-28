import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo, nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8, nav9, moon, sun } from '../assets/assets'
import '../stylesheets/navbar.css';
import { useTheme } from '../contexts/ThemeContext';
import {BiSun,BiSolidSun,BiMoon,BiSolidMoon,BiAnchor} from 'react-icons/bi'

const Navbar = () => {
  const { theme, toggleTheme} = useTheme();

  const handleNav = () => {
    const linkTexts = document.querySelectorAll('.link_txt');
    const expandIcon = document.getElementById('expand_icon');

  linkTexts.forEach(linkText => {
   if(linkText.style.maxWidth === '0px'){
    linkText.style.maxWidth = 'fit-content';
    expandIcon.style.rotate = '360deg'
   } else{
    linkText.style.maxWidth = '0px'
    expandIcon.style.rotate = '180deg'
   }
  }
)};

const handleSidebar = () => {
  const navbar = document.getElementById('navbar');
  const openSB = document.getElementById('openSB');

  const computedStyle = window.getComputedStyle(navbar);
  const currentDisplay = computedStyle.getPropertyValue('display');

  if (currentDisplay === 'none') {
    navbar.style.display = 'inherit';
    openSB.style.rotate = 'inherit';
    openSB.style.left = '20%';
  } else {
    navbar.style.display = 'none';
    openSB.style.rotate = '180deg';
    openSB.style.left = '5%';
  }
};

  return (
    <div>
    <i className='open-sidebar' onClick={handleSidebar} id='openSB'>
                        <BiAnchor />
    </i>
    <nav className={`navbar ${theme}`} id='navbar'>
    
      <ul>
      <span className='top_nav_box'>
        <span className='logo_box'>
          <NavLink to="/">
            <img src={logo} />
          </NavLink>
        </span>

          <li>
            <NavLink to="/">
              <img src={nav1} />
              <span className='link_txt'>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/trending">
              <img src={nav2} />
              <span className='link_txt'>Analytics</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/users">
              <img src={nav3} />
              <span className='link_txt'>Users</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/store">
              <img src={nav4} />
              <span className='link_txt'>Store</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/updates">
              <img src={nav5} />
              <span className='link_txt'>Updates</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/notifications">
              <img src={nav6} />
              <span className='link_txt'>Notifications</span>
            </NavLink>
          </li>

          <div className='switch_box'>
            <div className='switch_flex' onClick={toggleTheme}>
              <i className='toggle-icon sun'><BiSun/></i>
              <i className='toggle-icon moon'>  <BiMoon/></i>
            </div>
          </div>
        </span>

        <span className='bottom_nav_box'>
          <li>
            <NavLink to="/signout">
              <img src={nav7} />
              <span className='link_txt'>Sign out</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings">
              <img src={nav8} />
              <span className='link_txt'>Settings</span>
            </NavLink>
          </li>

          <li className='nav_handle' onClick={handleNav}>
            <img src={nav9} id='expand_icon' />
            <span className='link_txt'>Collapse</span>
          </li>

        </span>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar