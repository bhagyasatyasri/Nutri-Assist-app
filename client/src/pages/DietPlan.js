// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './DietPlan.css';

// const DietPlanPage = () => {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Assuming userId is available via context or route params
//   const userId = '67fbd526b4bbc7ee91801a48'; // Replace with dynamic user ID (e.g., from context or route)

//   // Fetch diet plans for the user
//   useEffect(() => {
//     const fetchDietPlans = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/dietplans/${userId}`);
//         setPlans(res.data.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching diet plans. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchDietPlans();
//   }, [userId]);

//   if (loading) {
//     return <p className="loading-text">Loading diet plans...</p>;
//   }

//   if (error) {
//     return <p className="error-text">{error}</p>;
//   }

//   return (
//     <div className="diet-plan-user-page">
//       <h2>My Diet Plan</h2>
//       {plans.length === 0 ? (
//         <p>No diet plans found.</p>
//       ) : (
//         <div className="plan-grid">
//           {plans.map((plan) => (
//             <div key={plan._id} className="plan-card">
//               <h4>{plan.day}</h4>
//               <p><strong>Mode:</strong> {plan.time}</p>
//               <p><strong>Meal:</strong> {plan.meal}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DietPlanPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext'; // Adjust the path according to your project structure
import './DietPlan.css';

const DietPlanPage = () => {
  const { user } = useAuthContext(); // Get the user from AuthContext
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ensure userId is available
  const userId = user ? user._id : null;

  useEffect(() => {
    if (!userId) return; // Return early if userId is not available

    const fetchDietPlans = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/dietplans/${userId}`);
        setPlans(res.data.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching diet plans. Please try again later.');
        setLoading(false);
      }
    };

    fetchDietPlans();
  }, [userId]); // Re-fetch if userId changes

  if (loading) {
    return <p className="loading-text">Loading diet plans...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  return (
    <div className="diet-plan-user-page">
      <h2>My Diet Plan</h2>
      {plans.length === 0 ? (
        <p>No diet plans found.</p>
      ) : (
        <div className="plan-grid">
          {plans.map((plan) => (
            <div key={plan._id} className="plan-card">
              <h4>{plan.day}</h4>
              <p><strong>Mode:</strong> {plan.time}</p>
              <p><strong>Meal:</strong> {plan.meal}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DietPlanPage;
