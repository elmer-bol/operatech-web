import React from 'react';

const YangoBlock = () => {
  const whatsappNumber = "59177145815";

  // Enlaces con las intenciones precargadas
  const linkRegistro = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero registrarme en el sistema.')}`;
  const linkMigracion = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, ya trabajo con Yango y quiero migrar mi cuenta a OperaTech.')}`;
  const linkAyuda = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, necesito reportar un problema técnico.')}`;

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Lado Izquierdo */}
        <div className="lg:w-1/3">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-2xl font-bold tracking-tighter">OPERA<span className="text-[#e60000]">TECH</span></span>
            <span className="text-gray-500">|</span>
            <span className="text-xl font-bold text-[#e60000] italic">YANGO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Regístrate con nosotros <br/> y empieza a trabajar con Yango.
          </h2>
        </div>
        
        {/* Lado Derecho (Tarjetas) */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tarjeta 1: Registro Nuevo */}
          <div className="border border-[#e60000] p-6 rounded-lg bg-[#111111] hover:bg-gray-900 transition flex flex-col">
            <div className="text-4xl mb-4 text-[#e60000]">👤<span className="text-lg">+</span></div>
            <h3 className="text-xl font-bold mb-2">Nunca trabajé con Yango</h3>
            <p className="text-sm text-gray-400 mb-6 flex-grow">Registro nuevo</p>
            <a 
              href={linkRegistro}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e60000] font-semibold text-sm hover:text-red-400 after:content-['→'] after:ml-1"
            >
              Quiero registrarme
            </a>
          </div>
          
          {/* Tarjeta 2: Migración */}
          <div className="border border-gray-700 p-6 rounded-lg bg-[#111111] hover:border-gray-500 transition flex flex-col">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold mb-2">Ya trabajo con Yango</h3>
            <p className="text-sm text-gray-400 mb-6 flex-grow">Migrar a OperaTech</p>
            <a 
              href={linkMigracion}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e60000] font-semibold text-sm hover:text-red-400 after:content-['→'] after:ml-1"
            >
              Migrar mi cuenta
            </a>
          </div>
          
          {/* Tarjeta 3: Soporte */}
          <div className="border border-gray-700 p-6 rounded-lg bg-[#111111] hover:border-gray-500 transition flex flex-col">
            <div className="text-4xl mb-4">🎧</div>
            <h3 className="text-xl font-bold mb-2">Necesito ayuda</h3>
            <p className="text-sm text-gray-400 mb-6 flex-grow">Soporte y orientación</p>
            <a 
              href={linkAyuda}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e60000] font-semibold text-sm hover:text-red-400 after:content-['→'] after:ml-1"
            >
              Necesito ayuda
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default YangoBlock;