// Configuración AXIOS BASICA
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://anonymousbackend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  }
});

// Interceptor para agregar el TOKEN de autorización a todas las solicitudes
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Token ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default instance;
