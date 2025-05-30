import axios from "axios";
import Cookies from 'js-cookie';

// Cookies.remove('access_token', { path: '/', domain: 'localhost' });

const getToken = () => {
  return Cookies.get('access_token'); // Will be undefined if cookie is HttpOnly or missing
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
  withCredentials: true,  // Send cookies automatically
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    console.log('Token from cookie:', token);

    if (token) {
      config.headers['Authorization'] = `BEARER ${token}`;
    } else {
      // No token accessible via JS, so rely on cookie sent automatically
      delete config.headers['Authorization'];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
