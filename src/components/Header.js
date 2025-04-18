import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaUser, FaShoppingCart, FaBookOpen, FaTv, FaCouch } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import '../styles/global.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <header className="header">
      <div className="container flex flex-space-between flex-center">
        <div className="logo">
          <h1 className="text-left">Barter Database</h1>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list flex">
            <li>
              <Link to="/" className="nav-link">
                <FaHome style={{ marginRight: '6px' }} /> Home
              </Link>
            </li>

            <li className="dropdown">
              <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
                <FaBookOpen style={{ marginRight: '6px' }} /> Categories <MdArrowDropDown />
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/electronics" className="dropdown-item">
                      <FaTv style={{ marginRight: '6px' }} /> Electronics
                    </Link>
                  </li>
                  <li>
                    <Link to="/furniture" className="dropdown-item">
                      <FaCouch style={{ marginRight: '6px' }} /> Furniture
                    </Link>
                  </li>
                  <li>
                    <Link to="/books" className="dropdown-item">
                      <FaBookOpen style={{ marginRight: '6px' }} /> Books
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/signup" className="nav-link">
                <FaUserPlus style={{ marginRight: '6px' }} /> Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-link">
                <FaSignInAlt style={{ marginRight: '6px' }} /> Login
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link">
                <FaUser style={{ marginRight: '6px' }} /> Profile
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="nav-link">
                <FaShoppingCart style={{ marginRight: '6px' }} /> Checkout
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="menu-toggle button-outline"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;

