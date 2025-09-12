import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Clients />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;