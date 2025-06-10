
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} Explorador Filosófico de Nietzsche. Todos los derechos (conceptuales) reservados.
        </p>
        <p className="text-xs mt-2 opacity-75">
          Creado con <i className="fas fa-heart text-red-500"></i> y React + Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
