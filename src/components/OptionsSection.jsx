import React from 'react';

const OptionsSection = () => {
  const options = [
    {
      title: 'Quiero conducir',
      description: 'Tengo vehículo o moto y quiero trabajar con Yango.',
      linkText: 'Registrarme →',
      icon: '🚗' // Aquí luego pondremos el SVG exacto
    },
    {
      title: 'Necesito un vehículo',
      description: 'Quiero alquilar un vehículo OperaTech para trabajar.',
      linkText: 'Ver alquileres →',
      icon: '🔑'
    },
    {
      title: 'Tengo un vehículo',
      description: 'Quiero que OperaTech lo administre y genere ingresos.',
      linkText: 'Ver Administración →',
      icon: '🚘'
    },
    {
      title: 'Quiero invertir',
      description: 'Quiero participar en futuras oportunidades de inversión en movilidad.',
      linkText: 'Próximamente →',
      icon: '📈'
    },
    {
      title: 'Quiero trabajar con OperaTech',
      description: 'Soy proveedor, concesionario o quiero proponer una alianza.',
      linkText: 'Proveedores →',
      icon: '🤝'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">¿Qué estás buscando?</h2>
      <p className="text-gray-600 mb-12">Tenemos una opción para ti.</p>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {options.map((option, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{option.icon}</div>
            <h3 className="text-lg font-bold mb-3">{option.title}</h3>
            <p className="text-sm text-gray-600 mb-6 flex-grow">{option.description}</p>
            <a href="#" className="text-[#e60000] font-semibold text-sm hover:text-red-700 transition mt-auto">
              {option.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OptionsSection;
