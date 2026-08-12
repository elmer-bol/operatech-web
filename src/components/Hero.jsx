import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0a0a0a]">
      
      {/* CAPA 1: La imagen de fondo apuntando al archivo local en public */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/banner.png" 
          alt="Conductor OperaTech Yango" 
          className="w-full h-full object-cover object-right md:object-center"
        />
      </div>

      {/* CAPA 2: El Degradado Permanente */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent md:bg-gradient-to-r md:from-[#0a0a0a] md:via-[#0a0a0a]/90 md:to-transparent"></div>

      {/* CAPA 3: El Contenido Frontal */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="md:w-3/5 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
            Tu camino empieza <br /> con <span className="text-[#e60000]">OperaTech.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6 text-white">
            Conduce, genera ingresos y crece con nosotros.
          </p>
          <p className="text-gray-300 max-w-md mb-8 leading-relaxed">
            Somos partner oficial de Yango en La Paz. Conecta tu vehículo, alquila uno de nuestra flota o deja que administremos tu auto.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="bg-[#e60000] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition text-center">
              QUIERO TRABAJAR CON YANGO
            </button>
            <button className="bg-transparent border border-gray-400 text-white px-8 py-4 rounded font-bold hover:bg-gray-400/20 transition text-center">
              CONOCER MIS OPCIONES
            </button>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
             <div className="flex items-center gap-2">🤝 Partner oficial de Yango</div>
             <div className="flex items-center gap-2">⚡ Flota eléctrica</div>
             <div className="flex items-center gap-2">⏱️ Asistencia 24/7</div>
          </div>
        </div>

        <div className="md:w-2/5 hidden md:block"></div>

      </div>
    </section>
  );
};

export default Hero;
