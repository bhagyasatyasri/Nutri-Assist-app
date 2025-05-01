// // // src/pages/AdminDashboard.js
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import AdminNavbar from '../components/AdminNavbar';

// // const AdminDashboard = () => {
// //   const [admins, setAdmins] = useState([]);

// //   useEffect(() => {
// //     const fetchAdmins = async () => {
// //       const token = localStorage.getItem('adminToken');
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/admin/all', {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setAdmins(res.data);
// //       } catch (err) {
// //         console.error('Failed to fetch admin data:', err);
// //       }
// //     };

// //     fetchAdmins();
// //   }, []);

// //   return (
// //     <div className="container mt-5">
// //          <AdminNavbar />
// //       <h2>Admin Dashboard</h2>
// //       <ul className="list-group">
// //         {admins.map((admin) => (
// //           <li key={admin._id} className="list-group-item">
// //             {admin.name} - {admin.email}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [dietPlan, setDietPlan] = useState({
//     userId: '',
//     meals: {
//       breakfast: '',
//       lunch: '',
//       dinner: '',
//       snacks: ''
//     }
//   });

//   // Update the nested meal fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const [mealType, field] = name.split('.'); // Split by the period to update nested fields

//     if (mealType === 'meals') {
//       setDietPlan((prev) => ({
//         ...prev,
//         meals: {
//           ...prev.meals,
//           [field]: value // Update the specific meal type
//         }
//       }));
//     } else {
//       setDietPlan((prev) => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   // Create a new diet plan
//   const handleCreateDietPlan = async () => {
//     try {
//       await axios.post('/admin/dietplan/create', dietPlan);
//       alert('Diet plan created successfully');
//     } catch (err) {
//       console.error(err);
//       alert('Error creating diet plan');
//     }
//   };

//   // Update existing diet plan
//   const handleUpdateDietPlan = async () => {
//     try {
//       await axios.put(`/admin/dietplan/update/${dietPlan.userId}`, dietPlan);
//       alert('Diet plan updated successfully');
//     } catch (err) {
//       console.error(err);
//       alert('Error updating diet plan');
//     }
//   };

//   // Delete diet plan
//   const handleDeleteDietPlan = async () => {
//     try {
//       await axios.delete(`/admin/dietplan/delete/${dietPlan.userId}`);
//       alert('Diet plan deleted successfully');
//     } catch (err) {
//       console.error(err);
//       alert('Error deleting diet plan');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <div>
//         {/* User ID Input */}
//         <input
//           type="text"
//           name="userId"
//           value={dietPlan.userId}
//           onChange={handleChange}
//           placeholder="User ID"
//         />
//         {/* Breakfast Input */}
//         <input
//           type="text"
//           name="meals.breakfast"
//           value={dietPlan.meals.breakfast}
//           onChange={handleChange}
//           placeholder="Breakfast"
//         />
//         {/* Lunch Input */}
//         <input
//           type="text"
//           name="meals.lunch"
//           value={dietPlan.meals.lunch}
//           onChange={handleChange}
//           placeholder="Lunch"
//         />
//         {/* Dinner Input */}
//         <input
//           type="text"
//           name="meals.dinner"
//           value={dietPlan.meals.dinner}
//           onChange={handleChange}
//           placeholder="Dinner"
//         />
//         {/* Snacks Input */}
//         <input
//           type="text"
//           name="meals.snacks"
//           value={dietPlan.meals.snacks}
//           onChange={handleChange}
//           placeholder="Snacks"
//         />
//       </div>
//       <div>
//         <button onClick={handleCreateDietPlan}>Create Diet Plan</button>
//         <button onClick={handleUpdateDietPlan}>Update Diet Plan</button>
//         <button onClick={handleDeleteDietPlan}>Delete Diet Plan</button>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminDashboard.css'; 
// import AdminNavbar from '../components/AdminNavbar';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);

//   // Fetch all users on component mount
//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/users') // Ensure the URL is correct
//       .then((response) => {
//         setUsers(response.data.data);  // Set users to state
//       })
//       .catch((error) => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);
  

//   return (
    
//     <div className="admin-dashboard">
//       <AdminNavbar />
//       <h2>Admin Dashboard</h2>
//       <div className="user-tiles-container">
//         {users.map((user) => (
//           <div key={user._id} className="user-tile">
//             <h3>{user.name}</h3> {/* Display user name */}
//             {/* Add more details or actions for each user here */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminDashboard.css'; 
// import AdminNavbar from '../components/AdminNavbar';
// import { Link } from 'react-router-dom';  // For navigation

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);

//   // Fetch all users on component mount
//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/users') // Ensure the URL is correct
//       .then((response) => {
//         setUsers(response.data.data);  // Set users to state
//       })
//       .catch((error) => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       <AdminNavbar />
//       <h2>Admin Dashboard</h2>
//       <div className="user-tiles-container">
//         {users.map((user) => (
//           <div key={user._id} className="user-tile">
//             <h3>{user.name}</h3> {/* Display user name */}
//             <Link to={`/admin/healthdetails/${user._id}`} className="btn btn-primary">View Health Details</Link> {/* Link to health details page */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';
import AdminNavbar from '../components/AdminNavbar';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  const handleTileClick = (userId) => {
    navigate(`/admin/healthdetails/${userId}`);
  };

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <h2>Admin Dashboard</h2>
      <div className="user-tiles-container">
        {users.map((user) => (
          <div
            key={user._id}
            className="user-tile"
            onClick={() => handleTileClick(user._id)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
