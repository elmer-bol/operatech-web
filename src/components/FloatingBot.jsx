import React, { useState } from 'react';

const FloatingBot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const whatsappNumber = "59177145815";

  const chatOptions = [
    { id: 'registro', icon: '👤', text: 'Quiero registrarme', msg: 'Hola, quiero registrarme en el sistema.' },
    { id: 'alquiler', icon: '🔑', text: 'Quiero alquilar un auto', msg: 'Hola, estoy interesado en alquilar un auto.' },
    { id: 'vehiculo', icon: '🚗', text: 'Tengo un vehículo', msg: 'Hola, tengo un vehículo y quiero información.' },
    { id: 'tecnico', icon: '🔧', text: 'Tengo un problema técnico', msg: 'Hola, necesito reportar un problema técnico.' },
    { id: 'asistencia', icon: '⏱️', text: 'Necesito asistencia 24/7', msg: 'Hola, requiero asistencia inmediata.' },
    { id: 'proveedor', icon: '🤝', text: 'Soy proveedor', msg: 'Hola, me comunico como proveedor.' },
    { id: 'recarga', icon: '💰', text: 'Realizar una recarga', msg: 'Hola, necesito realizar una recarga.' }
  ];

  const handleOpenWhatsApp = () => {
    const textMessage = selectedOption 
      ? selectedOption.msg 
      : 'Hola, me gustaría obtener más información sobre sus servicios.';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(url, '_blank');
  };

  // VISTA CERRADA (Burbuja flotante)
  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        // ELIMINADO: 'hidden md:flex' | AÑADIDO: ajustes de posición 'bottom-4 right-4 md:bottom-6 md:right-6'
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 bg-[#e60000] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-700 transition-transform transform hover:scale-110"
        aria-label="Abrir chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    );
  }

  // VISTA ABIERTA (Menú completo)
  return (
    // ELIMINADO: 'hidden md:block' | AÑADIDO: 'max-w-[calc(100vw-2rem)]' para que no desborde en celulares muy pequeños
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-72 max-w-[calc(100vw-2rem)] shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-200 transition-all duration-300">
      {/* Header Bot */}
      <div className="bg-[#111111] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-medium text-sm">
          👋 Hola, ¿cómo te ayudamos?
        </div>
        <button 
          onClick={() => setIsOpen(false)} 
          className="text-gray-400 hover:text-white transition-colors p-1"
          aria-label="Cerrar chat"
        >
          ✕
        </button>
      </div>
      
      {/* Opciones mapeadas dinámicamente */}
      <div className="p-2 max-h-60 overflow-y-auto">
        {chatOptions.map((option) => (
          <button 
            key={option.id}
            onClick={() => setSelectedOption(option)}
            className={`w-full text-left p-3 rounded text-sm font-medium flex items-center gap-3 transition-colors border-b ${
              selectedOption?.id === option.id 
                ? 'bg-red-50 text-[#e60000] border-red-100' 
                : 'text-gray-700 hover:bg-gray-50 border-gray-100' 
            }`}
          >
            <span>{option.icon}</span> {option.text}
          </button>
        ))}
      </div>
      
      {/* CTA Button */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <button 
          onClick={handleOpenWhatsApp}
          className="w-full bg-[#e60000] text-white py-3 rounded-lg font-bold text-sm flex justify-center items-center gap-2 hover:bg-red-700 transition shadow-sm"
        >
          💬 Abrir WhatsApp
        </button>
      </div>
    </div>
  );
};

export default FloatingBot;