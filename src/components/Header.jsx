import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-[#0a0a0a] text-white shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold tracking-tighter">
          OPERA<span className="text-[#e60000]">TECH</span>
        </span>
        <span className="text-xs italic text-gray-400 mt-2">"YANGO</span>
      </div>
      
      {/* Menú de navegación actualizado */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-[#e60000] transition">Inicio</a>
        <a href="#" className="hover:text-[#e60000] transition">Conductores</a>
        <a href="#" className="hover:text-[#e60000] transition">Alquila un vehículo</a>
        <a href="#" className="hover:text-[#e60000] transition">Propietarios</a>
        <a href="#tutoriales" className="hover:text-[#e60000] transition">Tutoriales</a>
      </nav>
      
      <div className="flex items-center space-x-4">
        <a href="#" className="bg-[#e60000] text-white px-6 py-2 rounded font-bold text-sm hover:bg-red-700 transition">
          REGÍSTRATE
        </a>
      </div>
    </header>
  );
};

export default Header;