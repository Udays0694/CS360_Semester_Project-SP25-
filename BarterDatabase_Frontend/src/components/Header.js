import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';  // Ensure this path is correct based on your folder structure

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Barter Database</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/electronics" className="nav-link">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/furniture" className="nav-link">
              Furniture
            </Link>
          </li>
          <li>
            <Link to="/books" className="nav-link">
              Books
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
