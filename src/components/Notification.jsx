import React, { useEffect, useState } from 'react';
import './Notification.css'; // Archivo de estilos

const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, 5000); // Muestra la notificación por 5 segundos

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    visible && (
      <div className="notification">
        {message}
      </div>
    )
  );
};

export default Notification;
