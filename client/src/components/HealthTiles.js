import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HealthTiles.css';

const HealthTiles = () => {
  const navigate = useNavigate();

  return (
    <div className="tiles-container">
      <div className="tile" onClick={() => navigate('/health-details')}>Enter Health Details</div>
      <div className="tile" onClick={() => navigate('/diet-plan')}>View Diet Plan</div>
      <div className="tile" onClick={() => navigate('/log-meal')}>Log a Meal</div>
    </div>
  );
};

export default HealthTiles;
