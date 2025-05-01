import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admins/login');
  };

  return (
    <nav className="navbar-theme">
      <Link className="navbar-brand" to="/admins/dashboard">Admin Panel</Link>
      <div className="nav-links">
        <Link className="nav-link" to="/admins/dashboard">Dashboard</Link>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
