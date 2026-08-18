import React, { useState, useEffect, useRef } from "react";

// Datos por defecto (puedes pasarlos por props o conectarlos a Contentful)
const DEFAULT_CAROUSEL_ITEMS = [
  {
    id: 1,
    type: "video",
    title: "Cómo aceptar tu primer viaje en Yango",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con ID real
    duration: 8000, // 8s de visualización antes de rotar
  },
  {
    id: 2,
    type: "image",
    title: "Gana bonos diarios por cumplimiento de metas",
    url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    duration: 5000,
  },
  {
    id: 3,
    type: "image",
    title: "Nuestra flota OperaTech en constante crecimiento",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    duration: 5000,
  },
];

const DEFAULT_TUTORIALS = [
  {
    id: 1,
    title: "Registro y validación de documentos",
    description: "Paso a paso para activar tu cuenta como conductor socio.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "Primeros Pasos",
  },
  {
    id: 2,
    title: "Uso del mapa y zonas de alta demanda",
    description: "Aprende a identificar multiplicadores de tarifa en horas pico.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "Ganancias",
  },
  {
    id: 3,
    title: "Retiro y liquidación de ganancias",
    description: "Cómo recibir tus pagos diarios y semanales de forma puntual.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "Finanzas",
  },
];

export default function MediaTutorials({
  carouselItems = DEFAULT_CAROUSEL_ITEMS,
  tutorials = DEFAULT_TUTORIALS,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  // Lógica de avance automático del carrusel
  useEffect(() => {
    if (!isPlaying || carouselItems.length === 0) return;

    const currentItem = carouselItems[currentIndex];
    const delay = currentItem.duration || 6000;

    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex, isPlaying, carouselItems]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <section id="tutoriales" className="py-16 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#e60000] font-semibold text-sm uppercase tracking-wider">
            Capacitación y Recursos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight text-white">
            Tutoriales Yango y Experiencias OperaTech
          </h2>
          <p className="text-gray-400 mt-3 text-base sm:text-lg">
            Todo lo que necesitas saber para maximizar tus ingresos y operar de manera segura.
          </p>
        </div>

        {/* --- 1. CARRUSEL MULTIMEDIA MIXTO (Fotos y Videos) --- */}
        <div className="relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl mb-16">
          <div className="relative aspect-video sm:aspect-[21/9] w-full bg-black flex items-center justify-center">
            {currentItem.type === "video" ? (
              <iframe
                key={currentItem.id}
                src={`${currentItem.url}?autoplay=1&mute=1&enablejsapi=1`}
                title={currentItem.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={currentItem.url}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-opacity duration-700 opacity-90"
              />
            )}

            {/* Overlay con Título */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs font-bold text-[#e60000] uppercase tracking-widest mb-1">
                {currentItem.type === "video" ? "Video Destacado" : "Novedad"}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                {currentItem.title}
              </h3>
            </div>
          </div>

          {/* Controles del Carrusel */}
          <button
            onClick={handlePrev}
            aria-label="Anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#e60000] text-white p-3 rounded-full backdrop-blur-sm transition border border-white/10 hover:border-[#e60000]"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            aria-label="Siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#e60000] text-white p-3 rounded-full backdrop-blur-sm transition border border-white/10 hover:border-[#e60000]"
          >
            &#8594;
          </button>

          {/* Indicadores de Slide */}
          <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            {carouselItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-6 bg-[#e60000]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- 2. SECCIÓN DE TUTORIALES YANGO (Grid de Tarjetas) --- */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
            <span>Guías Rápidas para Socios Conductores</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tut) => (
              <div
                key={tut.id}
                className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-[#e60000]/60 transition-all duration-300 flex flex-col group shadow-lg"
              >
                {/* Embed del Video */}
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={tut.videoUrl}
                    title={tut.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-[#e60000]/10 text-[#e60000] text-xs font-semibold px-2.5 py-1 rounded-md mb-2">
                      {tut.tag}
                    </span>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#e60000] transition">
                      {tut.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {tut.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}