import React from 'react';

const Benefits = () => {
  const benefits = [
    { icon: '🎁', title: 'Premios y\nbeneficios' },
    { icon: '🎧', title: 'Soporte cuando\nlo necesitas' },
    { icon: '24', title: 'Asistencia\n24/7' },
    { icon: '🚗', title: 'Opciones con\no sin vehículo' },
    { icon: '⚡', title: 'Flota\neléctrica' },
    { icon: '❤️', title: 'Atención\ncercana' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#111111] text-white text-center">
      <div className="flex justify-center items-center gap-2 mb-4">
        <span className="text-xl">🛡️</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-light mb-2">Más que un partner.</h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-16">Estamos contigo en el camino.</h3>
      
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl mb-4 text-white border border-gray-700 rounded-full w-20 h-20 flex items-center justify-center bg-gray-900">
              {benefit.icon}
            </div>
            <p className="text-sm text-gray-300 font-medium whitespace-pre-line">{benefit.title}</p>
          </div>
        ))}
      </div>
      
      <button className="bg-transparent border border-gray-500 text-white px-8 py-3 rounded text-sm font-bold hover:bg-gray-800 transition">
        CONOCE TODOS NUESTROS BENEFICIOS →
      </button>
    </section>
  );
};

export default Benefits;
