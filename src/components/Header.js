import React, { useState, useCallback,useEffect } from 'react'
import { FaSearch, FaCalendar, FaCalendarAlt, FaBell, FaLessThan, FaAngleDown } from 'react-icons/fa'
import { BiCalendar, BiBell, BiCalendarAlt, BiX, BiCog, BiBarChart, BiBarChartAlt, BiBarChartAlt2, BiComment, BiPlus, BiLogOut, BiPowerOff } from 'react-icons/bi';
import { user } from '../assets/assets'
import '../stylesheets/Header.css'
import { Link } from 'react-router-dom';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';

const Header = () => {

    const [value, setValue] = useState();

    const onChange = useCallback(
        (value) => {
            setValue(value);
        },
        [setValue],
    );

    const handleCalendar = () => {
        const showCalendar = document.getElementById('calendar');

        const computedStyle = window.getComputedStyle(showCalendar);
        const currentDisplay = computedStyle.getPropertyValue('display');

        if (currentDisplay === 'none') {
            showCalendar.style.display = 'block';
        } else {
            showCalendar.style.display = 'none';
        }
    };
    const showMenu = () => {
        const menu = document.getElementById("menuBox");
        menu.style.display = "inherit";

    }


    const hideMenu = () => {
        const menu = document.getElementById("menuBox");
        menu.style.display = "none";
    }

    //date
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
  
    const getCurrentDate = () => {
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-US', options);
      return formattedDate;
    };

    setCurrentDate(getCurrentDate());
  }, []);

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

                    <div className='h-date' onClick={handleCalendar}>
                        <i>
                            <BiCalendar />
                        </i>
                        <b>{currentDate}</b>
                        <div className='calendar' id='calendar'>
                            <Calendar value={value} onChange={onChange} color="green" />
                        </div>

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
                                <img src={user} />
                                <h3>Justin Bergson</h3>
                            </div>
                        </div>
                        <div className='mb-md'>
                            <ul className='menu-links'>
                                <div className='ml-top'>
                                    <li><Link>
                                        <i className='m-icon'>
                                            <BiCog />
                                        </i>
                                        <span>Account Settings</span>
                                    </Link></li>
                                    <li><Link>
                                        <i className='m-icon'>
                                            <BiBarChart />
                                        </i>
                                        <span>Project Usage</span>
                                    </Link></li>
                                    <li><Link>
                                        <i className='m-icon'>
                                            <BiComment />
                                        </i>
                                        <span>Support</span>
                                    </Link></li>
                                </div>
                                <div className='ml-btm'>
                                    <li><Link>
                                        <i className='m-icon'>
                                            <img src={user} />
                                        </i>
                                        <span>Justin@gmail</span>
                                    </Link></li>
                                    <li><Link>
                                        <i className='m-icon'>
                                            <BiPlus />
                                        </i>
                                        <span>Create Team</span>
                                    </Link></li>

                                </div>
                            </ul>
                        </div>
                        <div className='mb-btm'>
                            <li><Link onClick={hideMenu} >
                                <i className='m-icon'>
                                    <BiX className='close-icon' />
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