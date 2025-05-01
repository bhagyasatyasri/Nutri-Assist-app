import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar-container ${isOpen ? 'show' : ''}`}>
        <div className="sidebar-content">
          <ul> </ul>
          <ul>
            <li><Link to="/dashboard" onClick={toggleSidebar}>Dashboard</Link></li>
            <li><Link to="/log-meal" onClick={toggleSidebar}>Meals</Link></li>
            <li><Link to="/About-us" onClick={toggleSidebar}>About us</Link></li>
          </ul>
        </div>
      </div>

      {/* Background overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
