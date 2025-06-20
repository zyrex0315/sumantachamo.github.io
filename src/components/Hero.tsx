
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Suman Tachamo From Nepal";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <p className="text-gray-400 text-lg mb-4 animate-fade-in">Student at CCT</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white">{text.split('Suman')[0]}</span>
          <span className="text-pink-500 glow-text">Suman</span>
          <span className="text-white">{text.split('Suman')[1] || ''}</span>
          <span className="animate-pulse">|</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['React', 'UI/UX', 'Fullstack', 'Nepal'].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 text-pink-300 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
        >
          Explore My Work
          <ChevronDown className="inline ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
        </button>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
