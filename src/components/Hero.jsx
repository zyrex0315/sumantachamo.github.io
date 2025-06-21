import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Suman Tachamo From Nepal";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/8 to-purple-500/8 rounded-full blur-3xl animate-spin-slow" />
        
        {/* Additional floating particles */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-red-500/50 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-500/50 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-3/4 w-2 h-2 bg-blue-500/50 rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-slide-down">
          <p className="text-lg text-gray-300 mb-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Student at CCT</p>
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white animate-fade-in-up">Hi, I'm </span>
            <span className="text-pink-500">Suman</span>
            <br />
            <span className="text-white " >Tachamo From Nepal</span>
            {<span className="text-pink-500 ml-1"></span>}
          </h1>
        </div>

        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 hover:scale-105">
            Full-stack developer specializing in modern web technologies, UI/UX design, and creating exceptional digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '2s' }}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/40 animate-pulse-glow"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer" />
          </button>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 border-2 border-pink-500 rounded-lg font-semibold transition-all duration-500 hover:bg-pink-500/20 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/30 animate-border-glow"
          >
            Learn More
          </button>
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-twinkle" />
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-500 rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-32 w-2 h-2 bg-blue-500 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-10 w-1 h-1 bg-yellow-500 rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default Hero; 