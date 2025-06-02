import axios from "axios";
import Cookies from 'js-cookie';


// Cookies.remove('access_token', { path: '/', domain: 'localhost' });

const getToken = () => {
  return Cookies.get('access_token'); // Will be undefined if cookie is HttpOnly or missing
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 3000,
  // withCredentials: true,  // Send cookies automatically
});

api.interceptors.request.use(
  (config) => {
    console.log('api config : ', config);
    const token = getToken();

    if (token) {
      config.headers['Authorization'] = `BEARER ${token}`;
    } return config;
  },
  (error) => Promise.reject(error)
);

export default api;
