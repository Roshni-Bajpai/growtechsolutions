import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'QuantumTech Platform',
      description: 'Next-generation SaaS platform with AI-powered analytics',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'AI', 'Cloud'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'NeuralFlow Dashboard',
      description: 'Real-time data visualization with machine learning insights',
      image: 'https://images.pexels.com/photos/159775/pexels-photo-159775.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Python', 'ML'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'CyberSecure Network',
      description: 'Advanced cybersecurity monitoring and threat detection system',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Node.js', 'Security', 'DevOps', 'Monitoring'],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'MetaVerse Commerce',
      description: 'Immersive 3D shopping experience for the future of retail',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Three.js', 'WebXR', 'E-commerce', '3D'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'CloudSync Enterprise',
      description: 'Scalable cloud infrastructure with automated deployment pipelines',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'BiometricAuth Pro',
      description: 'Advanced biometric authentication system with facial recognition',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Computer Vision', 'Security', 'Biometrics'],
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text">
                Featured Work
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Explore our latest projects that showcase innovation, creativity, and technical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 text-xs bg-purple-600/30 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <button className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm">
                      <Github size={14} />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;