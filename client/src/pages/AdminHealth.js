// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import AdminNavbar from '../components/AdminNavbar';
// import './AdminHealth.css';


// const AdminHealth = () => {
//   const { userId } = useParams();
//   const [details, setDetails] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user details
//     axios.get(`http://localhost:5000/api/users/${userId}`)
//       .then((res) => setUser(res.data.data))
//       .catch((err) => console.error('Error fetching user:', err));

//     // Fetch health details
//     axios.get(`http://localhost:5000/api/users/${userId}/healthdetails`)
//       .then((res) => setDetails(res.data.data[0])) // Assuming 1 record
//       .catch((err) => console.error('Error fetching health details:', err));
//   }, [userId]);

//   return (
//     <div className="health-details-page">
//       <AdminNavbar />
//       <h2>User Health Details</h2>
//       {user && <h3>{user.name}</h3>}
//       {details ? (
//         <div className="details-box">
//           <p><strong>Height:</strong> {details.height} cm</p>
//           <p><strong>Weight:</strong> {details.weight} kg</p>
//           <p><strong>BMI:</strong> {details.bmi}</p>
//           <p><strong>Goal:</strong> {details.goal}</p>
//         </div>
//       ) : (
//         <p>No health details found for this user.</p>
//       )}
//     </div>
//   );
// };

// export default AdminHealth;

//Just create
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import AdminNavbar from '../components/AdminNavbar';
// import './AdminHealth.css';

// const AdminHealth = () => {
//   const { userId } = useParams(); // Assuming you pass the userId via the route params
//   const [user, ] = useState(null);
//   const [healthDetails, setHealthDetails] = useState(null);
//   const [dietPlans, setDietPlans] = useState([]);
//   const [newPlan, setNewPlan] = useState({
//     day: '',
//     time: '',
//     meal: ''
//   });
//   const [editPlan, setEditPlan] = useState(null);

//   // Fetch user and health details
//   useEffect(() => {
//     fetchHealthDetails();
//     fetchDietPlans();
//   }, [userId]);


//   // Fetch health details from the backend
//   const fetchHealthDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/users/${userId}/healthdetails`);
//       setHealthDetails(response.data.data[0]); // Assuming only 1 health record exists
//     } catch (error) {
//       console.error('Error fetching health details:', error);
//     }
//   };

//   // Fetch diet plans from the backend
//   const fetchDietPlans = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/users/${userId}/dietplans`);
//       setDietPlans(response.data.data);
//     } catch (error) {
//       console.error('Error fetching diet plans:', error);
//     }
//   };

//   // Create a new diet plan
//   const handleCreate = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/dietplan', newPlan);
//       alert('Plan added successfully');
//       fetchDietPlans();
//       setNewPlan({ day: '', time: '', meal: '' });
//     } catch (error) {
//       console.error('Error creating diet plan:', error);
//     }
//   };

//   // Update an existing diet plan
//   const handleUpdate = async () => {
//     try {
//       const response = await axios.put(`http://localhost:5000/api/dietplan/${editPlan._id}`, editPlan);
//       alert('Plan updated successfully');
//       fetchDietPlans();
//       setEditPlan(null);
//     } catch (error) {
//       console.error('Error updating diet plan:', error);
//     }
//   };

//   // Delete a diet plan
//   const handleDelete = async (planId) => {
//     try {
//       const response = await axios.delete(`http://localhost:5000/api/dietplan/${planId}`);
//       alert('Plan deleted successfully');
//       fetchDietPlans();
//     } catch (error) {
//       console.error('Error deleting diet plan:', error);
//     }
//   };

//   return (
//     <div className="health-details-page">
//       <AdminNavbar />
//       <h2>User Health Details</h2>

//       {/* Display health details */}
//       {healthDetails ? (
//         <div className="health-details">

//           <p><strong>Height:</strong> {healthDetails.height} cm</p>
//           <p><strong>Weight:</strong> {healthDetails.weight} kg</p>
//           <p><strong>BMI:</strong> {healthDetails.bmi}</p>
//           <p><strong>Goal:</strong> {healthDetails.goal}</p>
//         </div>
//       ) : (
//         <p>No health details found for this user.</p>
//       )}

//       {/* Add functionality for creating, updating, and displaying diet plans */}
//       <div className="create-plan">
//         <h3>Create New Plan</h3>
//         <input
//           type="text"
//           placeholder="Day"
//           value={newPlan.day}
//           onChange={(e) => setNewPlan({ ...newPlan, day: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Time"
//           value={newPlan.time}
//           onChange={(e) => setNewPlan({ ...newPlan, time: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Meal"
//           value={newPlan.meal}
//           onChange={(e) => setNewPlan({ ...newPlan, meal: e.target.value })}
//         />
//         <button onClick={handleCreate}>Add Plan</button>
//       </div>

//       <div className="diet-plans-list">
//         <h3>Existing Diet Plans</h3>
//         {dietPlans.length > 0 ? (
//           dietPlans.map((plan) => (
//             <div key={plan._id} className="diet-plan-item">
//               <p><strong>Day:</strong> {plan.day}</p>
//               <p><strong>Time:</strong> {plan.time}</p>
//               <p><strong>Meal:</strong> {plan.meal}</p>
//               <button onClick={() => setEditPlan(plan)}>Edit</button>
//               <button onClick={() => handleDelete(plan._id)}>Delete</button>
//             </div>
//           ))
//         ) : (
//           <p>No diet plans available</p>
//         )}
//       </div>

//       {editPlan && (
//         <div className="edit-plan">
//           <h3>Edit Diet Plan</h3>
//           <input
//             type="text"
//             placeholder="Day"
//             value={editPlan.day}
//             onChange={(e) => setEditPlan({ ...editPlan, day: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Time"
//             value={editPlan.time}
//             onChange={(e) => setEditPlan({ ...editPlan, time: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Meal"
//             value={editPlan.meal}
//             onChange={(e) => setEditPlan({ ...editPlan, meal: e.target.value })}
//           />
//           <button onClick={handleUpdate}>Update Plan</button>
//           <button onClick={() => setEditPlan(null)}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminHealth;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';
import './AdminHealth.css';

const AdminHealth = () => {
  const { userId } = useParams();
  const [healthDetails, setHealthDetails] = useState(null);
  const [dietPlans, setDietPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({
    day: '',
    time: '',
    meal: '',
  });
  const [editPlan, setEditPlan] = useState(null);

  useEffect(() => {
    fetchHealthDetails();
    fetchDietPlans();
  }, [userId]);

  const fetchHealthDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${userId}/healthdetails`);
      setHealthDetails(res.data.data[0]);
    } catch (error) {
      console.error('Error fetching health details:', error);
    }
  };

  const fetchDietPlans = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/dietplans/${userId}`);
      setDietPlans(res.data.data);
    } catch (error) {
      console.error('Error fetching diet plans:', error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/dietplan', {
        ...newPlan,
        userId,
      });
      alert('Plan added successfully');
      fetchDietPlans();
      setNewPlan({ day: '', time: '', meal: '' });
    } catch (error) {
      console.error('Error creating diet plan:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/dietplan/${editPlan._id}`, editPlan);
      alert('Plan updated successfully');
      fetchDietPlans();
      setEditPlan(null);
    } catch (error) {
      console.error('Error updating diet plan:', error);
    }
  };

  const handleDelete = async (planId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/dietplan/${planId}`);
      alert('Plan deleted successfully');
      fetchDietPlans();
    } catch (error) {
      console.error('Error deleting diet plan:', error);
    }
  };

  return (
    <div className="health-details-page">
      <AdminNavbar />
      <h2>User Health Details</h2>

      {healthDetails ? (
        <div className="health-details">
          <p><strong>Height:</strong> {healthDetails.height} cm</p>
          <p><strong>Weight:</strong> {healthDetails.weight} kg</p>
          <p><strong>BMI:</strong> {healthDetails.bmi}</p>
          <p><strong>Goal:</strong> {healthDetails.goal}</p>
        </div>
      ) : (
        <p>No health details found for this user.</p>
      )}

      <div className="create-plan">
        <h3>Create New Plan</h3>
        <input
          type="text"
          placeholder="Day"
          value={newPlan.day}
          onChange={(e) => setNewPlan({ ...newPlan, day: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mode"
          value={newPlan.time}
          onChange={(e) => setNewPlan({ ...newPlan, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Meal"
          value={newPlan.meal}
          onChange={(e) => setNewPlan({ ...newPlan, meal: e.target.value })}
        />
        <button onClick={handleCreate}>Add Plan</button>
      </div>

      <div className="diet-plans-list">
        <h3>Existing Diet Plans</h3>
        {dietPlans.length > 0 ? (
          dietPlans.map((plan) => (
            <div key={plan._id} className="diet-plan-item">
              <p><strong>Day:</strong> {plan.day}</p>
              <p><strong>Mode:</strong> {plan.time}</p>
              <p><strong>Meal:</strong> {plan.meal}</p>
              <button onClick={() => setEditPlan(plan)}>Edit</button>
              <button onClick={() => handleDelete(plan._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No diet plans available</p>
        )}
      </div>

      {editPlan && (
        <div className="edit-plan">
          <h3>Edit Diet Plan</h3>
          <input
            type="text"
            value={editPlan.day}
            onChange={(e) => setEditPlan({ ...editPlan, day: e.target.value })}
          />
          <input
            type="text"
            value={editPlan.time}
            onChange={(e) => setEditPlan({ ...editPlan, time: e.target.value })}
          />
          <input
            type="text"
            value={editPlan.meal}
            onChange={(e) => setEditPlan({ ...editPlan, meal: e.target.value })}
          />
          <button onClick={handleUpdate}>Update Plan</button>
          <button onClick={() => setEditPlan(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default AdminHealth;
