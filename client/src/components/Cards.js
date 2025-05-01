import React from 'react';

const Cards = ({ title, image, calories, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={`/uploads/${image}`} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>Calories: {calories}</p>
      </div>
    </div>
  );
};

export default Cards;
