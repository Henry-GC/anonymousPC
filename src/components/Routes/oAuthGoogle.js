// src/pages/OAuthCallback.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OAuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extraer token de los query params
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      // Guardar en localStorage
      localStorage.setItem('token', token);
      
      // Redirigir a la página protegida
      navigate('/usuario', { replace: true });
    } else {
      // Manejar error
      navigate('/login', { replace: true });
    }
  }, [location, navigate]);

  return <div>Procesando login...</div>;
};

export default OAuthCallback;