import React from 'react';
import {FaSearch,FaCalendar,FaCalendarAlt,FaBell,FaLessThan} from 'react-icons/fa'
import {BiCalendar,BiBell,BiCalendarAlt} from 'react-icons/bi'

const Dashboard = () => {
  return (
    <div>
      <header>
        <h2>Dashboard</h2>
      <div className='header_right'>
        <div className='search_box'>
          <i>
            <FaSearch/>
          </i>
          <input type='search' placeholder='Search...'/>
        </div>

        <div className='h-date'>
        <i>
        <BiCalendar/>
      
          </i>
          <b>November 15,2023</b>
        </div>
        <div className='h-bell'>
        <i>
            <BiBell/>
          </i>
        </div>

        <div className='user_details'>
          <div className='u_img_box'>
            <img src=''/>
          </div>
          <div>
            <p>Justin Bergson</p>
            <small>Justin@gmail.com </small>
          </div>
          <i>
            <FaLessThan style={{rotate:"-90deg"}}/>
          </i>
        </div>

        </div>
      </header>
    </div>
  )
}

export default Dashboard