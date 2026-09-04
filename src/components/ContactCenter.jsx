import React from 'react';

const ContactCenter = () => {
  const whatsappNumber = "59177145815";

  // Enlaces pre-configurados para que el Bot inicie el flujo correcto
  const linkRegistro = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero registrarme en el sistema.')}`;
  const linkProblema = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, necesito reportar un problema técnico.')}`;
  const linkAsistencia = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, requiero asistencia inmediata.')}`;

  return (
    <section className="py-20 px-4 md:px-8 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">¿Cómo podemos ayudarte?</h2>
      <p className="text-gray-600 mb-12">Estamos para ti, por WhatsApp.</p>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Tarjeta 1: Registro */}
        <div className="border border-gray-200 p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
          <div className="text-[#e60000] text-5xl mb-4">💬</div>
          <h3 className="text-xl font-bold mb-3">Quiero registrarme</h3>
          <p className="text-sm text-gray-600 mb-8 flex-grow">Habla con nuestro equipo de registros y comienza a trabajar con Yango.</p>
          <a 
            href={linkRegistro}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e60000] text-white w-full py-3 rounded-full font-bold text-sm hover:bg-red-700 transition block text-center"
          >
            ESCRIBIR POR WHATSAPP
          </a>
        </div>
        
        {/* Tarjeta 2: Soporte Técnico */}
        <div className="border border-gray-200 p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
          <div className="text-[#e60000] text-5xl mb-4">🔧</div>
          <h3 className="text-xl font-bold mb-3">Tengo un problema</h3>
          <p className="text-sm text-gray-600 mb-8 flex-grow">Incidencias, soporte técnico o problemas en la app.</p>
          <a 
            href={linkProblema}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e60000] text-white w-full py-3 rounded-full font-bold text-sm hover:bg-red-700 transition block text-center"
          >
            ESCRIBIR POR WHATSAPP
          </a>
        </div>
        
        {/* Tarjeta 3: Emergencias / Asistencia 24/7 */}
        <div className="border border-gray-200 p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
          <div className="text-[#e60000] text-5xl mb-4">⏱️</div>
          <h3 className="text-xl font-bold mb-3">Necesito asistencia 24/7</h3>
          <p className="text-sm text-gray-600 mb-8 flex-grow">Asistencia OperaTech disponible las 24 horas.</p>
          <a 
            href={linkAsistencia}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e60000] text-white w-full py-3 rounded-full font-bold text-sm hover:bg-red-700 transition block text-center"
          >
            ESCRIBIR POR WHATSAPP
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2 font-medium">
         <span className="text-xl">🛡️</span> Respuesta rápida y atención personalizada.
      </div>
    </section>
  );
};

export default ContactCenter;