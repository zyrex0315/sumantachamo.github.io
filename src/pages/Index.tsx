
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
