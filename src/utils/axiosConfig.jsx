import axios from 'axios';

// CONFIG DE CONEXIÓN AXIOS
const instance = axios.create({
  baseURL: 'https://anonymous-back-end.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  }
});

// INTERCEPTORS PARA EL TOKEN
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
