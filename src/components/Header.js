import React from 'react'
import { FaSearch, FaCalendar, FaCalendarAlt, FaBell, FaLessThan, FaAngleDown } from 'react-icons/fa'
import { BiCalendar, BiBell, BiCalendarAlt, BiX,BiCog,BiBarChart,BiBarChartAlt,BiBarChartAlt2,BiComment,BiPlus,BiLogOut,BiPowerOff } from 'react-icons/bi';
import { user } from '../assets/assets'
import '../stylesheets/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    const showMenu = () => {
        const menu = document.getElementById("menuBox");
        menu.style.display = "inherit";

    }


    const hideMenu = () => {
        const menu = document.getElementById("menuBox");
        menu.style.display = "none";
    }
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

                    <div className='user_details' onClick={showMenu}>
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

                {/* user menu */}

                <div id="menuBox">
                    <div className='mb-flex'>
                        <div className='mb-top'>
                            <div className='mbt-flex'>
                                <button>Admin</button>
                                <img src={user}/>
                                <h3>Justin Bergson</h3>
                            </div>
                        </div>
                        <div className='mb-md'>
                            <ul className='menu-links'>
                                <div className='ml-top'>
                                <li><Link>
                                <i className='m-icon'>
                                    <BiCog/>
                                </i>
                                <span>Account Settings</span>
                                </Link></li>
                                <li><Link>
                                <i className='m-icon'>
                                    <BiBarChart/>
                                </i>
                                <span>Project Usage</span>
                                </Link></li>
                                <li><Link>
                                <i className='m-icon'>
                                    <BiComment/>
                                </i>
                                <span>Support</span>
                                </Link></li>
                                </div>
                                <div className='ml-btm'>
                                <li><Link>
                                <i className='m-icon'>
                                    <img src={user}/>
                                </i>
                                <span>Justin@gmail</span>
                                </Link></li>
                                <li><Link>
                                <i className='m-icon'>
                                    <BiPlus/>
                                </i>
                                <span>Create Team</span>
                                </Link></li>
                                
                                </div>
                            </ul>
                        </div>
                        <div className='mb-btm'>
                        <li><Link onClick={hideMenu} >
                                <i className='m-icon'>
                                <BiX className='close-icon'/>
                                </i>
                                <span>Close</span>
                                </Link></li>

                                <li className='logout'><Link>
                                <span>Logout</span>
                                <i className='m-icon'>
                                <BiPowerOff />
                                </i>
                                </Link></li>

                        </div>
                    </div>  
                </div>
            </header>
        </>
    )
}

export default Header