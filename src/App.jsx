import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
      </main>
    </div>
  );
}

export default App;
