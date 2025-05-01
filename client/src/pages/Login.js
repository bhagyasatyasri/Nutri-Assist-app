import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useAuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const isSuccess = await login(email, password);
      if (isSuccess) {
        navigate('/dashboard');  // Redirect to dashboard if login is successful
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login">
      <h2>Welcome Back 👋</h2>
      <form onSubmit={handleLogin}>
        <InputField
          label="📧 Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="login-input"
        />
        <InputField
          label="🔒 Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="login-input"
        />
        {error && <p className="error">{error}</p>} {/* Show error message */}
        <Button text="Login" type="submit" className="btn-primary" />
      </form>
    </div>
  );
};

export default Login;
