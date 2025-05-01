import axiosInstance from './axiosInstance';

// Login API call
export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/users/login', { email, password });
    return response.data;  // Should return { message, token, user }
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
    throw error;  // Rethrow the error to be handled in the calling component
  }
};

// Register API call
export const registerUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/users/register', { email, password });
    return response.data;  // Should return { message, user }
  } catch (error) {
    console.error('Registration failed:', error.response?.data || error.message);
    throw error;  // Rethrow the error to be handled in the calling component
  }
};

// Fetch meals (or any other data) API call
export const fetchMeals = async () => {
  try {
    const response = await axiosInstance.get('/meals'); // Get meals data for the authenticated user
    return response.data;  // Returns meal data
  } catch (error) {
    console.error('Error fetching meals:', error.response?.data || error.message);
    throw error;  // Rethrow the error to be handled in the calling component
  }
};


