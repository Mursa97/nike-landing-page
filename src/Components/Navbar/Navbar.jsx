import React from 'react'
import './Navbar.css'
import Logo from '../../images/logo.svg'
import { useState } from 'react'

const Navbar = () => {
  
  const [mobileMenu, setMobileMenu] = useState(false)

  const openMenu = () => {
    if (mobileMenu === false) {
      setMobileMenu(true)
    } 
    else {
      setMobileMenu(false)
    }
  }
  return (
    
    <div className='container navbar-sticky' >

        <div className={mobileMenu ? 'mobile-nav-links' : 'mobile-nav-links not-clicked'}>
            <a href="">Men</a>
            <a href="">Woman</a>
            <a href="">Kids</a>
            <a href="">Sale</a>
        </div>

        <div className='navbar-container'>

            <div className='navbar-logo'>
                <img src={Logo} alt=""></img>
            </div>
            <div className="nav-links">
                <a href="">Men</a>
                <a href="">Woman</a>
                <a href="">Kids</a>
                <a href="">Sale</a>
            </div>
            <div className='hamburger-icon' onClick={openMenu}>
                <span className="material-symbols-outlined">menu</span>
            </div>

        </div>

    </div>
  
  )
}

export default Navbar