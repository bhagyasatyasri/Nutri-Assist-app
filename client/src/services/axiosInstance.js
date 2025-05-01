import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to include token in requests if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');  // Retrieve the token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;  // Add token to header if present
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
