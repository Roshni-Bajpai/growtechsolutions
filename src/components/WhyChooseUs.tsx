import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Lightbulb, Users, Zap, Shield, Trophy } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const reasons = [
    {
      icon: Target,
      title: 'Results-Driven Approach',
      description: 'We focus on measurable outcomes that directly impact your business growth and success.',
      color: 'cyan'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Cutting-edge solutions using the latest technologies and industry best practices.',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with deep expertise across multiple domains and technologies.',
      color: 'pink'
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile development processes that ensure fast turnaround without compromising quality.',
      color: 'cyan'
    },
    {
      icon: Shield,
      title: 'Reliable Support',
      description: '24/7 support and maintenance to keep your digital assets running smoothly.',
      color: 'purple'
    },
    {
      icon: Trophy,
      title: 'Proven Success',
      description: 'Track record of delivering exceptional results for clients across various industries.',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'text-cyan-400 group-hover:text-cyan-300';
      case 'purple':
        return 'text-purple-400 group-hover:text-purple-300';
      case 'pink':
        return 'text-pink-400 group-hover:text-pink-300';
      default:
        return 'text-cyan-400 group-hover:text-cyan-300';
    }
  };

  return (
    <section id="why-choose-us" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text">
                Why Choose Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              We combine technical excellence with creative vision to deliver solutions that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 mb-6 transition-all duration-300 ${getColorClasses(reason.color)}`}>
                  <reason.icon size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;