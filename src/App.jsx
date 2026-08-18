import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OptionsSection from './components/OptionsSection';
import YangoBlock from './components/YangoBlock';
import ContactCenter from './components/ContactCenter';
import Benefits from './components/Benefits';
import Locations from './components/Locations';
import MediaTutorials from "./components/MediaTutorials";
import Footer from './components/Footer';
import FloatingBot from './components/FloatingBot';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main className="pt-20">
        {/* Embudo principal de ventas e información */}
        <Hero />
        <OptionsSection />
        <YangoBlock />
        <Benefits />
        <Locations />
        <ContactCenter />
        
        {/* Sección de soporte y capacitación movida al final */}
        <MediaTutorials />
      </main>
      <Footer />
      <FloatingBot />
    </div>
  );
}

export default App;