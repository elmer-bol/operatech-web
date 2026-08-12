import React from 'react';

const FloatingBot = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-72 shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-200 hidden md:block">
      {/* Header Bot */}
      <div className="bg-[#111111] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-medium text-sm">
          👋 Hola, ¿cómo podemos ayudarte?
        </div>
        <button className="text-gray-400 hover:text-white">✕</button>
      </div>
      
      {/* Opciones */}
      <div className="p-2 max-h-64 overflow-y-auto">
        <button className="w-full text-left p-3 hover:bg-gray-50 rounded text-sm font-medium text-gray-700 flex items-center gap-3 border-b border-gray-100">
          👤 Quiero registrarme
        </button>
        <button className="w-full text-left p-3 hover:bg-gray-50 rounded text-sm font-medium text-gray-700 flex items-center gap-3 border-b border-gray-100">
          🔑 Quiero alquilar un auto
        </button>
        <button className="w-full text-left p-3 hover:bg-gray-50 rounded text-sm font-medium text-gray-700 flex items-center gap-3 border-b border-gray-100">
          🚗 Tengo un vehículo
        </button>
        <button className="w-full text-left p-3 hover:bg-gray-50 rounded text-sm font-medium text-gray-700 flex items-center gap-3 border-b border-gray-100">
          🔧 Tengo un problema técnico
        </button>
        <button className="w-full text-left p-3 hover:bg-gray-50 rounded text-sm font-medium text-gray-700 flex items-center gap-3 border-b border-gray-100">
          ⏱️ Necesito asistencia 24/7
        </button>
        <button className="w-full text-left p-3 hover:bg-gray-50 rounded text-sm font-medium text-gray-700 flex items-center gap-3">
          🤝 Soy proveedor
        </button>
      </div>
      
      {/* CTA Button */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <button className="w-full bg-[#e60000] text-white py-3 rounded-lg font-bold text-sm flex justify-center items-center gap-2 hover:bg-red-700 transition">
          💬 Abrir WhatsApp
        </button>
      </div>
    </div>
  );
};

export default FloatingBot;
