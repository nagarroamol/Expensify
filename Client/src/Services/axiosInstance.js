import axios from 'axios';

// Set up the Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle responses here if needed
    return response;
  },
  (error) => {
    // Handle response errors here (e.g., token expiration, logging out user)
    return Promise.reject(error);
  }
);

export default axiosInstance;
