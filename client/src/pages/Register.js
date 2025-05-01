import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password,
      });
      setMessage('Registered successfully!');
      console.log(res.data);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed.');
      console.error('Error:', err.response?.data || err.message);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-primaryr">Register</button>
      </form>
    </div>
  );
};

export default Register;
