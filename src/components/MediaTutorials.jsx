import React, { useState, useEffect, useRef } from "react";
import { client } from "../contentful"; // Importamos tu conexión a Contentful

export default function MediaTutorials() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  // Lógica para traer los datos desde Contentful
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Hacemos ambas llamadas al mismo tiempo para mayor velocidad
        const [carouselRes, tutorialsRes] = await Promise.all([
          client.getEntries({ content_type: "carouselItem" }),
          client.getEntries({ content_type: "tutorial" })
        ]);

        // Mapeamos el Carrusel
        const formattedCarousel = carouselRes.items.map(item => ({
          id: item.sys.id,
          title: item.fields.title,
          type: item.fields.type,
          url: item.fields.url,
          duration: item.fields.duration || 6000,
        }));

        // Mapeamos los Tutoriales
        const formattedTutorials = tutorialsRes.items.map(item => ({
          id: item.sys.id,
          title: item.fields.title,
          description: item.fields.description,
          videoUrl: item.fields.videoUrl,
          tag: item.fields.tag,
        }));

        setCarouselItems(formattedCarousel);
        setTutorials(formattedTutorials);
        setIsLoading(false);
      } catch (error) {
        console.error("Error cargando datos de Contentful:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Lógica del Carrusel
  useEffect(() => {
    if (!isPlaying || carouselItems.length === 0) return;

    const currentItem = carouselItems[currentIndex];
    const delay = currentItem?.duration || 6000;

    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex, isPlaying, carouselItems]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  // 1. PANTALLA DE CARGA (Mientras Contentful responde)
  if (isLoading) {
    return (
      <section className="py-16 bg-[#0a0a0a] text-white flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e60000]"></div>
      </section>
    );
  }

  // Si el cliente borró todo y no hay datos, no renderizamos la sección para evitar errores
  if (carouselItems.length === 0 && tutorials.length === 0) {
    return null; 
  }

  const currentItem = carouselItems[currentIndex];

  // 2. RENDER PRINCIPAL (Con datos reales)
  return (
    <section id="tutoriales" className="py-16 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* --- CARRUSEL MULTIMEDIA --- */}
        {carouselItems.length > 0 && currentItem && (
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

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-[#e60000] uppercase tracking-widest mb-1">
                  {currentItem.type === "video" ? "Video Destacado" : "Novedad"}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                  {currentItem.title}
                </h3>
              </div>
            </div>

            {carouselItems.length > 1 && (
              <>
                <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#e60000] text-white p-3 rounded-full backdrop-blur-sm transition border border-white/10 hover:border-[#e60000]">&#8592;</button>
                <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#e60000] text-white p-3 rounded-full backdrop-blur-sm transition border border-white/10 hover:border-[#e60000]">&#8594;</button>
                <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                  {carouselItems.map((item, idx) => (
                    <button key={item.id} onClick={() => setCurrentIndex(idx)} className={`h-2 rounded-full transition-all ${idx === currentIndex ? "w-6 bg-[#e60000]" : "w-2 bg-white/40 hover:bg-white/70"}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* --- GRILLA DE TUTORIALES --- */}
        {tutorials.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <span>Guías Rápidas para Socios Conductores</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tutorials.map((tut) => (
                <div key={tut.id} className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-[#e60000]/60 transition-all duration-300 flex flex-col group shadow-lg">
                  <div className="aspect-video w-full bg-black">
                    <iframe src={tut.videoUrl} title={tut.title} className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-[#e60000]/10 text-[#e60000] text-xs font-semibold px-2.5 py-1 rounded-md mb-2">{tut.tag}</span>
                      <h4 className="text-lg font-bold text-white group-hover:text-[#e60000] transition">{tut.title}</h4>
                      <p className="text-gray-400 text-sm mt-2 line-clamp-2">{tut.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}