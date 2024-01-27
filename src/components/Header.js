import React from 'react'
import { FaSearch, FaCalendar, FaCalendarAlt, FaBell, FaLessThan, FaAngleDown } from 'react-icons/fa'
import { BiCalendar, BiBell, BiCalendarAlt } from 'react-icons/bi';
import { user } from '../assets/assets'
import '../stylesheets/Header.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <h2>Dashboard</h2>
                <div className='header_right'>

                    <div className='search_box'>
                        <i>
                            <FaSearch />
                        </i>
                        <input type='search' placeholder='Search...' />
                    </div>

                    <div className='h-date'>
                        <i>
                            <BiCalendar />
                        </i>
                        <b>November 15,2023</b>
                    </div>
                    <div className='h-bell'>
                        <i>
                            <BiBell />
                        </i>
                    </div>

                    <div className='user_details'>
                        <div className='u_img_box'>
                            <img src={user} />
                        </div>
                        <div>
                            <p>Justin Bergson</p>
                            <small>Justin@gmail.com </small>
                        </div>
                        <i>
                            <FaAngleDown />
                        </i>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header