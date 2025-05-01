// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './LogMeal.css';

// const LogMeal = () => {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get current day of the week
//   const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });

//   useEffect(() => {
//     const fetchMeals = async () => {
//       try {
//         // Assuming meals are fetched by userId, replace with dynamic userId if needed
//         const userId = '67fbd526b4bbc7ee91801a48'; // Replace with dynamic userId
//         const res = await axios.get(`http://localhost:5000/api/dietplans/${userId}`);
        
//         // Filter meals based on the current day
//         const todaysMeals = res.data.data.filter(meal => meal.day === currentDay);
//         setMeals(todaysMeals);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching meals. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchMeals();
//   }, [currentDay]);

//   if (loading) {
//     return <p className="loading-text">Loading meals for today...</p>;
//   }

//   if (error) {
//     return <p className="error-text">{error}</p>;
//   }

//   return (
//     <div className="log-meal-page">
//       <h2>Today's Meals - {currentDay}</h2>
//       {meals.length === 0 ? (
//         <p>No meals found for today.</p>
//       ) : (
//         <div className="meal-grid">
//           {meals.map((meal) => (
//             <div key={meal._id} className="meal-card">
//               <h4>{meal.time}</h4>
//               <p><strong>Meal:</strong> {meal.meal}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LogMeal;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import './LogMeal.css';


const LogMeal = () => {
  const { user } = useAuthContext(); // Get the user from AuthContext to get user ID
  const [todaysMeals, setTodaysMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to get today's meals based on the day of the week
  const getTodayMeals = async () => {
    try {
      const today = new Date().toLocaleString('en-us', { weekday: 'long' }).toLowerCase(); // Get the day of the week
      const res = await axios.get(`http://localhost:5000/api/dietplans/${user._id}`); // Fetch diet plans for the user
      const mealsForToday = res.data.data.filter(meal => meal.day.toLowerCase() === today); // Filter meals for today
      setTodaysMeals(mealsForToday); // Set meals to today's meals for the user
      setLoading(false);
    } catch (err) {
      console.error('Error fetching today\'s meals:', err);
      setLoading(false);
    }
  };

  // Fetch meals when the component mounts
  useEffect(() => {
    if (user) {
      getTodayMeals(); // Fetch meals based on the user's ID and today's day
    }
  }, [user]);

  if (loading) return <p>Loading today's meals...</p>;

  return (
    <div className="log-meal">
      
      {todaysMeals.length === 0 ? (
        <p>No meals logged for today.</p>
      ) : (
        <div className="today-meals">
          <h3>Today's Meals:</h3>
          <ul>
            {todaysMeals.map((meal, index) => (
              <li key={index}>
                <strong>{meal.time}:</strong> {meal.meal}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LogMeal;
