import React from 'react';

const Footer = () => {
  const whatsappNumber = "59177145815";

  // Mapeo de intenciones para los enlaces del Footer
  const linkConductores = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero registrarme en el sistema.')}`;
  const linkAlquiler = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, estoy interesado en alquilar un auto.')}`;
  const linkPropietarios = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, tengo un vehículo y quiero información.')}`;
  const linkInversiones = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, me gustaría recibir información sobre futuras inversiones.')}`;
  const linkProveedores = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, me comunico como proveedor.')}`;
  const linkNosotros = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, me gustaría obtener más información sobre la empresa.')}`;

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
            <span className="hover:text-white cursor-pointer transition">FB</span>
            <span className="hover:text-white cursor-pointer transition">IG</span>
            <span className="hover:text-white cursor-pointer transition">TK</span>
            <span className="hover:text-white cursor-pointer transition">YT</span>
          </div>
        </div>
        
        {/* Navegación (Ahora es un embudo hacia WhatsApp) */}
        <div>
          <h4 className="font-bold mb-4 text-gray-500 uppercase">Navegación</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href={linkConductores} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">Conductores</a></li>
            <li><a href={linkAlquiler} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">Alquila un vehículo</a></li>
            <li><a href={linkPropietarios} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">Propietarios</a></li>
            <li><a href={linkInversiones} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">Inversiones</a></li>
            <li><a href={linkProveedores} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">Proveedores</a></li>
            <li><a href={linkNosotros} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">Nosotros</a></li>
          </ul>
        </div>
        
        {/* Contacto */}
        <div>
          <h4 className="font-bold mb-4 text-gray-500 uppercase">Contacto</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              📞 <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition">(+591) 777 11 846</a>
            </li>
            <li className="flex items-center gap-2">
              ✉️ <a href="mailto:info@operatech.lat" className="hover:text-[#e60000] transition">info@operatech.lat</a>
            </li>
            <li className="flex items-center gap-2">📍 La Paz, Bolivia</li>
          </ul>
        </div>
        
        {/* Enlaces Legales (Se mantienen con '#' hasta tener las URLs de privacidad) */}
        <div>
          <h4 className="font-bold mb-4 text-gray-500 uppercase">Enlaces Legales</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-white transition">Términos y condiciones</a></li>
            <li><a href="#" className="hover:text-white transition">Política de cookies</a></li>
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