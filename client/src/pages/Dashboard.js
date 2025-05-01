import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import './Dashboard.css';


const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <h2>Hello {user?.name || 'User'} 🥳</h2>
        <h1><i>When diet is wrong, medicine is of no use</i></h1>
        <div className="tiles">
          <div className="tile" onClick={() => navigate('/health-details')}>
            📝<br />Enter Health Details
          </div>
          <div className="tile" onClick={() => navigate('/diet-plan')}>
            📋<br />View Suggested Diet Plan
          </div>
          <div className="tile" onClick={() => navigate('/log-meal')}>
            🍽️<br />Today's Meal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
