import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Nutrition Assistant</h1>
      <p className="home-subtitle">Your personalized wellness journey starts here</p>

      <div className="tiles">
        <div className="tile" onClick={() => navigate('/login')}>Login</div>
        <div className="tile" onClick={() => navigate('/register')}>Register</div>
        </div>
    </div>
  );
};

export default Home;
