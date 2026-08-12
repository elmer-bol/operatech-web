import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[#111111] text-white py-20 px-8 overflow-hidden min-h-screen flex items-center">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col justify-center h-full">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          Tu camino empieza <br /> con <span className="text-[#e60000]">OperaTech.</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6">
          Conduce, genera ingresos y crece con nosotros.
        </p>
        <p className="text-gray-300 max-w-md mb-8 leading-relaxed">
          Somos partner oficial de Yango en La Paz. Conecta tu vehículo, alquila uno de nuestra flota o deja que administremos tu auto.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <button className="bg-[#e60000] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition text-center">
            QUIERO TRABAJAR CON YANGO
          </button>
          <button className="bg-transparent border border-gray-400 text-white px-8 py-4 rounded font-bold hover:bg-gray-800 transition text-center">
            CONOCER MIS OPCIONES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
