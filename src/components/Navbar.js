import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo, nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8, nav9, moon, sun } from '../assets/assets'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <span className='logo_box'>
          <NavLink to="/">
            <img src={logo} />
          </NavLink>
        </span>

        <span className='middle_nav_box'>
          <li>
            <NavLink to="/">
              <img src={nav1} />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/trending">
              <img src={nav2} />
              <span>Trending</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/users">
              <img src={nav3} />
              <span>Users</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/store">
              <img src={nav4} />
              <span>Store</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/updates">
              <img src={nav5} />
              <span>Updates</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/notifications">
              <img src={nav6} />
              <span>Notifications</span>
            </NavLink>
          </li>

          <div className='switch_box'>
            <div className='switch'>
              <img src={sun} />
              <img src={moon} />
            </div>
          </div>
        </span>

        <span className='bottom_nav_box'>
          <li>
            <NavLink to="/signout">
              <img src={nav7} />
              <span>Sign out</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings">
              <img src={nav8} />
              <span>Settings</span>
            </NavLink>
          </li>

          <li>
            <img src={nav9} />
            <span>Expand</span>
          </li>

        </span>

      </ul>
    </nav>
  )
}

export default Navbar