import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Users, number: '50+', label: 'Projects Worldwide' },
    { icon: Award, number: '2,500%', label: 'Average ROI for Our Clients' },
    { icon: Clock, number: '100%', label: 'Timely Project Delivery' },
    { icon: TrendingUp, number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Pioneering</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                  Digital Growth
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Founded in August 2025 by Roshni Bajpai and Rahul Yadav, GrowTech Solutions 
                is dedicated to empowering businesses through cutting-edge digital transformation. 
                We specialize in creating innovative solutions that drive sustainable growth.
                We are not just a service provider; we are your dedicated digital partner, working as an extension of your business to ensure your long-term success.
              </p>
              
              <p className="text-lg text-white/70 leading-relaxed">
                Our expertise spans web development, digital strategy, and emerging technologies. 
                We believe in building long-term partnerships with our clients, delivering 
                solutions that not only meet current needs but scale for future success.
              </p>
              
              {/* <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-500/30 transition-all duration-300 transform hover:scale-105 glow-button">
                Discover Our Story
              </button> */}
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-purple-900/20 border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? 'animate-slide-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-cyan-600/20 to-purple-600/20 mb-4">
                    <stat.icon className="text-cyan-400" size={24} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2 counter-animation">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 text-center px-4">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">Founded August 2025</div>
                <div className="text-sm sm:text-base text-white/70">By Roshni Bajpai & Rahul Yadav</div>
              </div>
            </div>
          </div>
    </section>
  );
};

export default About;