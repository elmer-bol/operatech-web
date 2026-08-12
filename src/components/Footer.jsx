import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 px-4 md:px-8 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Logo y descripción */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold tracking-tighter">OPERA<span className="text-[#e60000]">TECH</span></span>
            <span className="text-xs italic text-gray-400 mt-2">"YANGO</span>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            OperaTech es partner oficial de Yango en La Paz. Conectamos personas, vehículos y oportunidades para mover juntos el futuro.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <span className="hover:text-white cursor-pointer">FB</span>
            <span className="hover:text-white cursor-pointer">IG</span>
            <span className="hover:text-white cursor-pointer">TK</span>
            <span className="hover:text-white cursor-pointer">YT</span>
          </div>
        </div>
        
        {/* Navegación */}
        <div>
          <h4 className="font-bold mb-4 text-gray-500 uppercase">Navegación</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-[#e60000]">Conductores</a></li>
            <li><a href="#" className="hover:text-[#e60000]">Alquila un vehículo</a></li>
            <li><a href="#" className="hover:text-[#e60000]">Propietarios</a></li>
            <li><a href="#" className="hover:text-[#e60000]">Inversiones</a></li>
            <li><a href="#" className="hover:text-[#e60000]">Proveedores</a></li>
            <li><a href="#" className="hover:text-[#e60000]">Nosotros</a></li>
          </ul>
        </div>
        
        {/* Contacto */}
        <div>
          <h4 className="font-bold mb-4 text-gray-500 uppercase">Contacto</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">📞 (+591) XXX XXX XX</li>
            <li className="flex items-center gap-2">✉️ hola@operatech.lat</li>
            <li className="flex items-center gap-2">📍 La Paz, Bolivia</li>
          </ul>
        </div>
        
        {/* Enlaces Legales */}
        <div>
          <h4 className="font-bold mb-4 text-gray-500 uppercase">Enlaces Legales</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-white">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-white">Términos y condiciones</a></li>
            <li><a href="#" className="hover:text-white">Política de cookies</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
        © 2026 OperaTech Bolivia SRL. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
