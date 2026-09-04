import React from 'react';

const Header = () => {
  // Centralizamos el número usando variables de entorno de Vite
  // Si no encuentra la variable (ej. en desarrollo local), usa tu número de prueba
  const whatsappNumber = "59177145815";

  // Mapeo de intenciones
  const linkRegistro = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero registrarme en el sistema.')}`;
  const linkAlquiler = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, estoy interesado en alquilar un auto.')}`;
  const linkPropietarios = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, tengo un vehículo y quiero información.')}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-[#0a0a0a] text-white shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold tracking-tighter">
          OPERA<span className="text-[#e60000]">TECH</span>
        </span>
        <span className="text-xs italic text-gray-400 mt-2">"YANGO</span>
      </div>
      
      {/* Menú de navegación (Embudo de conversión) */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="/" className="hover:text-[#e60000] transition">Inicio</a>
        <a href={linkRegistro} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">Conductores</a>
        <a href={linkAlquiler} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">Alquila un vehículo</a>
        <a href={linkPropietarios} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">Propietarios</a>
        {/* Mantenemos tutoriales como ancla interna en la página */}
        <a href="#tutoriales" className="hover:text-[#e60000] transition">Tutoriales</a>
      </nav>
      
      <div className="flex items-center space-x-4">
        <a 
          href={linkRegistro} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#e60000] text-white px-6 py-2 rounded font-bold text-sm hover:bg-red-700 transition"
        >
          REGÍSTRATE
        </a>
      </div>
    </header>
  );
};

export default Header;