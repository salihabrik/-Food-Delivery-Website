import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='logo' className='logo' />
        <ul className='navbar-menu'>
            <li className='navbar-menu-item'>Home</li>
            <li className='navbar-menu-item'>menu</li>
            <li className='navbar-menu-item'>mobile-app</li>
            <li className='navbar-menu-item'>contact us</li>
        </ul>
        <div className='navbar right'>
            <img src={assets.search_icon} alt='Search
            icon' className='search-icon' />
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt='' />
                <div className='dot'></div>
            </div>
            <button>sign in</button>

        </div>

      
    </div>
  )
}

export default navbar
