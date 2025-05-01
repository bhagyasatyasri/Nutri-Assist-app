import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // For token expiration check

const AdminAuthContext = createContext();

export const useAdminAuth = () => useContext(AdminAuthContext);

export const AdminAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem('admin');
    const storedToken = localStorage.getItem('adminToken');

    if (storedAdmin && storedToken) {
      try {
        const parsedAdmin = JSON.parse(storedAdmin);
        const decodedToken = jwtDecode(storedToken);

        if (decodedToken.exp * 1000 < Date.now()) {
          logout();
        } else {
          setAdmin(parsedAdmin);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error decoding token or parsing admin data:', error);
        logout();
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/admins/login', { email, password });

      if (res?.data?.token) {
        localStorage.setItem('admin', JSON.stringify(res.data.admin));
        localStorage.setItem('adminToken', res.data.token);
        setAdmin(res.data.admin);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Admin login error:', err.response?.data || err.message);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('adminToken');
    setAdmin(null);
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
