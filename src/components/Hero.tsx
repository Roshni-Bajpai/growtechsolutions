import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="text-cyan-400 animate-pulse" size={24} />
            <span className="text-cyan-400 text-sm uppercase tracking-wider">Future-Ready Solutions</span>
            <Sparkles className="text-cyan-400 animate-pulse" size={24} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Building the
            
          </p>
            <span className="block text-4xl sm:text-6xl md:text-8xl text-cyan-400 digital-glow animate-pulse-glow">DIGITAL</span>
            <span className="block text-4xl sm:text-6xl md:text-8xl text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-gradient">
              FUTURE. TODAY.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Transforming visions into extraordinary digital experiences with 
            <span className="text-cyan-400 glow-text"> cutting-edge technology</span> and 
            <span className="text-purple-400 glow-text"> limitless creativity</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 px-4">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 glow-button">
              <a href='https://wa.me/917652090512'>Start Your Journey</a>
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/60" size={32} />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black/40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;