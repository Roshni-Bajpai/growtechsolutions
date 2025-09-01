import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Palette, Rocket, Shield, Zap, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies and modern frameworks.',
      color: 'cyan'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces that captivate users and drive engagement through thoughtful design.',
      color: 'purple'
    },
    {
      icon: Rocket,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that accelerate business growth.',
      color: 'pink'
    },
    {
      icon: Shield,
      title: 'SaaS Products',
      description: 'End-to-end development of robust and scalable Software-as-a-Service platforms that create new revenue streams and solve complex business problems.',
      color: 'cyan'
    },
    {
      icon: Zap,
      title: 'Data Science & Analytics',
      description: 'Transforming raw data into actionable business intelligence and insights through powerful analytics, reporting, and data visualization.',
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'AI & Machine Learning',
      description: 'Innovative solutions leveraging artificial intelligence and machine learning to automate processes, personalize user experiences, and unlock new possibilities.',
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
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text">
                Our Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              We deliver exceptional digital solutions that push the boundaries of what's possible ensuring your business is ready for tomorrow's challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 mb-6 transition-all duration-300 ${getColorClasses(service.color)}`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <button className="w-full text-2xl justify-center m-12 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 glow-button">
              Ready to Transform Your Business? Let's Talk Solutions.
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;