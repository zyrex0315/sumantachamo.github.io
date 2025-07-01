import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';
import ParticleBackground from '../components/ParticleBackground.jsx';
import Footer from '../components/Footer.jsx';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index; 