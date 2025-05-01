// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Sidebar Toggle Icon (Desktop View) */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          NutriAssist 🥗
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link" onClick={closeMenu}>Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={closeMenu}>Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link" onClick={closeMenu}>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
