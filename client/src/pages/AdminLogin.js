// // src/pages/AdminLogin.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AdminLogin.css';


// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:5000/api/admins/login', {
//         email,
//         password,
//       });

//       localStorage.setItem('adminToken', res.data.token);
//       navigate('/admins/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Admin Login</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" className="form-control" value={email}
//             onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" className="form-control" value={password}
//             onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit" className="btn btn-primary mt-3">Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Link your CSS

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/admins/login', {
        email,
        password,
      });

      localStorage.setItem('adminToken', res.data.token);
      navigate('/admins/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login">
      <h2>Admin Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primarya">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
