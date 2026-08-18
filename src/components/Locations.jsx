import React from 'react';

const Locations = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white border-b border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Movilidad que crece por Bolivia</h2>
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Mapa de Bolivia (Placeholder) */}
        <div className="md:w-1/3 flex justify-center">
          <div className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
            [Mapa de Bolivia]
          </div>
        </div>
        
        {/* Ciudades */}
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-center md:text-left">
          
          <div>
            <h3 className="text-xl font-bold mb-2">La Paz</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Operando
            </div>
            <div className="text-gray-300 text-3xl">⛪</div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-400">Santa Cruz</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-gray-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#e60000]"></span> Próximamente
            </div>
            <div className="text-gray-200 text-3xl">🌴</div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-400">Cochabamba</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-gray-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#e60000]"></span> Próximamente
            </div>
            <div className="text-gray-200 text-3xl">⛰️</div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-400">Sucre</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-gray-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#e60000]"></span> Próximamente
            </div>
            <div className="text-gray-200 text-3xl">🏛️</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;