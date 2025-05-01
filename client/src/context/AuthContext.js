import React, { createContext, useState, useContext, useEffect } from 'react';
import { registerUser, loginUser } from '../services/api';
import {jwtDecode} from 'jwt-decode'; // Add jwt-decode to verify token expiry

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const decodedToken = jwtDecode(storedToken); // Decode the token

        // Check if token has expired
        if (decodedToken.exp * 1000 < Date.now()) {
          logout(); // Token is expired, log out the user
        } else {
          setUser(parsedUser); // Set user if the token is valid
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error parsing user data or decoding token:', error);
        logout(); // Token is invalid or expired, log out
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await loginUser(email, password);
      if (res?.token) {
        localStorage.setItem('user', JSON.stringify(res.user));  // Store user data
        localStorage.setItem('token', res.token);  // Store token
        setUser(res.user);  // Update user state
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const registeredUser = await registerUser(email, password);
      setIsAuthenticated(true);
      setUser(registeredUser);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
