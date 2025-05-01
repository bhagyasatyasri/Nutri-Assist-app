// /*import React, { useState } from 'react';
// import { useAuthContext } from '../context/AuthContext';
// import axios from 'axios';

// const HealthDetails = () => {
//   const { user } = useAuthContext();  // Get the user data from AuthContext
//   const [transformationDetails, setTransformationDetails] = useState({
//     weight: '',
//     height: '',
//     bmi: '',
//     goal: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user?._id) {
//       alert('User not authenticated');
//       return;
//     }

//     try {
//       // Send the transformation data with the user's ID
//       const response = await axios.post('/api/transformation/save', {
//         userId: user._id,
//         transformationDetails
//       });

//       // Handle response
//       console.log('Transformation saved:', response.data);
//       // Optionally, navigate to another page or show success message
//     } catch (error) {
//       console.error('Error saving transformation:', error);
//     }
//   };

//   return (
//     <div className="healthdetails-container">
//       <h2>Enter Your Health Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Weight:</label>
//           <input
//             type="text"
//             value={transformationDetails.weight}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, weight: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Height:</label>
//           <input
//             type="text"
//             value={transformationDetails.height}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, height: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>BMI:</label>
//           <input
//             type="text"
//             value={transformationDetails.bmi}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, bmi: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Goal:</label>
//           <input
//             type="text"
//             value={transformationDetails.goal}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, goal: e.target.value })}
//           />
//         </div>
//         <button type="submit">Save Transformation</button>
//       </form>
//     </div>
//   );
// };

// export default HealthDetails;*/

// import React, { useState, useEffect } from 'react';
// import { useAuthContext } from '../context/AuthContext';  // Assuming this context provides user data
// import axios from 'axios';

// const HealthDetails = () => {
//   const { user } = useAuthContext();  // Get the user data from AuthContext
//   const [transformationDetails, setTransformationDetails] = useState({
//     weight: '',
//     height: '',
//     bmi: '',
//     goal: ''
//   });

//   const [existingTransformation, setExistingTransformation] = useState(null);

//   // Fetch existing transformation details on component mount (if available)
//   useEffect(() => {
//     if (user?._id) {
//       axios
//         .get(`http://localhost:5000/api/transformation/${user._id}`)
//         .then((response) => {
//           if (response.data.data.length > 0) {
//             setExistingTransformation(response.data.data[0]); // Assuming only one transformation per user
//             setTransformationDetails(response.data.data[0]); // Pre-fill the form if existing details are found
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching transformation details:', error);
//         });
//     }
//   }, [user?._id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user?._id) {
//       alert('User not authenticated');
//       return;
//     }

//     try {
//       let response;
//       if (existingTransformation) {
//         // If there's existing transformation data, update it
//         response = await axios.put(`http://localhost:5000/api/transformation/update/${user._id}`, {
//           transformationDetails
//         });
//       } else {
//         // If no transformation data exists, save it
//         response = await axios.post('http://localhost:5000/api/transformation/save', {
//           userId: user._id,
//           transformationDetails
//         });
//       }

//       // Handle response
//       console.log('Transformation saved/updated:', response.data);
//       // Optionally, navigate to another page or show success message
//     } catch (error) {
//       console.error('Error saving/updating transformation:', error);
//     }
//   };

//   return (
//     <div className="healthdetails-container">
//       <h2>Enter Your Health Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Weight:</label>
//           <input
//             type="text"
//             value={transformationDetails.weight}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, weight: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Height:</label>
//           <input
//             type="text"
//             value={transformationDetails.height}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, height: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>BMI:</label>
//           <input
//             type="text"
//             value={transformationDetails.bmi}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, bmi: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Goal:</label>
//           <input
//             type="text"
//             value={transformationDetails.goal}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, goal: e.target.value })}
//           />
//         </div>
//         <button type="submit">{existingTransformation ? 'Update Transformation' : 'Save Transformation'}</button>
//       </form>
//     </div>
//   );
// };

// export default HealthDetails;

// import React, { useState, useEffect } from 'react';
// import { useAuthContext } from '../context/AuthContext';  // Assuming this context provides user data
// import axios from 'axios';
// import './HealthDetails.css';

// const HealthDetails = () => {
//   const { user } = useAuthContext();  // Get the user data from AuthContext
//   const [transformationDetails, setTransformationDetails] = useState({
//     weight: '',
//     height: '',
//     bmi: '',
//     goal: ''
//   });

//   const [existingTransformation, setExistingTransformation] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');

//   // Fetch existing transformation details on component mount (if available)
//   useEffect(() => {
//     if (user?._id) {
//       axios
//         .get(`http://localhost:5000/api/transformation/${user._id}`)
//         .then((response) => {
//           if (response.data.data.length > 0) {
//             setExistingTransformation(response.data.data[0]); // Assuming only one transformation per user
//             setTransformationDetails(response.data.data[0]); // Pre-fill the form if existing details are found
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching transformation details:', error);
//         });
//     }
//   }, [user?._id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user?._id) {
//       alert('User not authenticated');
//       return;
//     }

//     try {
//       let response;
//       if (existingTransformation) {
//         // If there's existing transformation data, update it
//         response = await axios.put(`http://localhost:5000/api/transformation/update/${user._id}`, {
//           transformationDetails
//         });
//       } else {
//         // If no transformation data exists, save it
//         response = await axios.post('http://localhost:5000/api/transformation/save', {
//           userId: user._id,
//           transformationDetails
//         });
//       }

//       // Handle response
//       console.log('Transformation saved/updated:', response.data);
//       setSuccessMessage('Transformation saved/updated successfully!');  // Set success message
//       // Optionally, navigate to another page or show success message
//     } catch (error) {
//       console.error('Error saving/updating transformation:', error);
//       setSuccessMessage('Error saving/updating transformation. Please try again.');  // Show error message if it fails
//     }
//   };

//   return (
//     <div className="healthdetails-container">
//       <h1>Enter Your Health Details</h1>
//       {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success message */}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Weight:</label>
//           <input
//             type="text"
//             value={transformationDetails.weight}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, weight: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Height:</label>
//           <input
//             type="text"
//             value={transformationDetails.height}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, height: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>BMI:</label>
//           <input
//             type="text"
//             value={transformationDetails.bmi}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, bmi: e.target.value })}
//           />
//         </div>
//         {/* <div>
//           <label>Goal:</label>
//           <input
//             type="text"
//             value={transformationDetails.goal}
//             onChange={(e) => setTransformationDetails({ ...transformationDetails, goal: e.target.value })}
//           />
//         </div> */}
//         <div>
//   <label>Goal:</label>
//   <select
//     value={transformationDetails.goal}
//     onChange={(e) => setTransformationDetails({ ...transformationDetails, goal: e.target.value })}
//   >
//     <option value="">-- Select Goal --</option>
//     <option value="Weight Loss">Weight Loss</option>
//     <option value="Weight Gain">Weight Gain</option>
//     <option value="Muscle Gain">Muscle Gain</option>
//     <option value="Maintain Weight">Maintain Weight</option>
//     <option value="Improve Endurance">Improve Endurance</option>
//     <option value="Improve Overall Health">Improve Overall Health</option>
//   </select>
// </div>

//         <button type="submit">{existingTransformation ? 'Update Transformation' : 'Save Transformation'}</button>
//       </form>
//     </div>
//   );
// };

// export default HealthDetails;

import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import axios from 'axios';
import './HealthDetails.css';

const HealthDetails = () => {
  const { user } = useAuthContext();
  const userId = user?._id;

  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    bmi: '',
    goal: ''
  });
  const [exists, setExists] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!userId) return;

    // Fetch existing details
    axios.get(`http://localhost:5000/api/users/${userId}/healthdetails`)
      .then(res => {
        const [data] = res.data.data || [];
        if (data) {
          setFormData({
            weight: data.weight,
            height: data.height,
            bmi: data.bmi,
            goal: data.goal
          });
          setExists(true);
        }
      })
      .catch(err => console.error('Error fetching details:', err));
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      if (exists) {
        // Update
        const res = await axios.put(`http://localhost:5000/api/transformation/update/${userId}`, formData);
        setMessage(res.data.message);
      } else {
        // Save
        const res = await axios.post('http://localhost:5000/api/transformation/save', {
          userId,
          ...formData
        });
        setExists(true);
        setMessage(res.data.message);
      }
    } catch (err) {
      console.error('Error saving/updating:', err);
      setMessage(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="healthdetails-container">
      <h1>Your Health Details</h1>
      {message && <div className="success-message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>BMI:</label>
          <input
            type="number"
            name="bmi"
            value={formData.bmi}
            onChange={handleChange}
            step="0.1"
            required
          />
        </div>
        <div>
          <label>Goal:</label>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Goal --</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Weight Gain">Weight Gain</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Maintain Weight">Maintain Weight</option>
            <option value="Improve Endurance">Improve Endurance</option>
            <option value="Improve Overall Health">Improve Overall Health</option>
          </select>
        </div>
        <button type="submit" className="btn-primarya">
          {exists ? 'Update Details' : 'Save Details'}
        </button>
      </form>
    </div>
  );
};

export default HealthDetails;
