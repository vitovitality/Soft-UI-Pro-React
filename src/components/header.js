import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink Large">
            DateYork Speed Dating
          </Link>
          <div className="header-menu">
            <Link to="/" className="header-navlink01 Large">
              Home
            </Link>
            <Link to="/" className="header-link Large">
              Anmelden
            </Link>
            <Link to="/profile" className="header-navlink02 Large">
              Gutscheine
            </Link>
            <Link to="/coming-soon" className="header-navlink03 Large">
              Infos
            </Link>
            <Link to="/profile" className="header-navlink04 Large">
              Hilfe
            </Link>
            <Link to="/profile" className="header-navlink05 Large">
              Kontakt
            </Link>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <PrimaryPinkButton login="Login"></PrimaryPinkButton>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink06 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink07 Large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink08 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink09 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton login="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

export default Header
