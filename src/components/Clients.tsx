import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Building2, Users, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';



const Clientele: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample client data - replace with your actual clients
  const clients = [
    {
      id: 1,
      name: 'TechCorp Industries',
      logo: '/api/placeholder/200/100',
      category: 'technology',
      industry: 'Software Development',
      website: 'https://techcorp.com'
    },
    {
      id: 2,
      name: 'HealthCare Plus',
      logo: '/api/placeholder/200/100',
      category: 'healthcare',
      industry: 'Healthcare',
      website: 'https://healthcareplus.com'
    },
    {
      id: 3,
      name: 'EduTech Solutions',
      logo: '/api/placeholder/200/100',
      category: 'education',
      industry: 'Education Technology',
      website: 'https://edutech.com'
    },
    {
      id: 4,
      name: 'RetailMax Chain',
      logo: '/api/placeholder/200/100',
      category: 'retail',
      industry: 'Retail & E-commerce',
      website: 'https://retailmax.com'
    },
    {
      id: 5,
      name: 'FinanceFirst Bank',
      logo: '/api/placeholder/200/100',
      category: 'finance',
      industry: 'Financial Services',
      website: 'https://financefirst.com'
    },
    {
      id: 6,
      name: 'GreenEnergy Co.',
      logo: '/api/placeholder/200/100',
      category: 'energy',
      industry: 'Renewable Energy',
      website: 'https://greenenergy.com'
    },
    {
      id: 7,
      name: 'AutoTech Motors',
      logo: '/api/placeholder/200/100',
      category: 'automotive',
      industry: 'Automotive',
      website: 'https://autotech.com'
    },
    {
      id: 8,
      name: 'FoodieChain Restaurants',
      logo: '/api/placeholder/200/100',
      category: 'hospitality',
      industry: 'Food & Hospitality',
      website: 'https://foodiechain.com'
    },
    {
      id: 9,
      name: 'PropertyMax Realty',
      logo: '/api/placeholder/200/100',
      category: 'realestate',
      industry: 'Real Estate',
      website: 'https://propertymax.com'
    },
    {
      id: 10,
      name: 'TravelVista Tours',
      logo: '/api/placeholder/200/100',
      category: 'travel',
      industry: 'Travel & Tourism',
      website: 'https://travelvista.com'
    },
    {
      id: 11,
      name: 'SportsFit Gym',
      logo: '/api/placeholder/200/100',
      category: 'fitness',
      industry: 'Fitness & Sports',
      website: 'https://sportsfit.com'
    },
    {
      id: 12,
      name: 'MediaHub Studios',
      logo: '/api/placeholder/200/100',
      category: 'media',
      industry: 'Media & Entertainment',
      website: 'https://mediahub.com'
    }
  ];

  const stats = [
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '200+', label: 'Projects Delivered', icon: Award },
    { number: '15+', label: 'Industries Served', icon: Building2 },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  const industries = [
    'Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 'Energy',
    'Automotive', 'Real Estate', 'Travel', 'Media', 'Fitness', 'Food & Hospitality'
  ];

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, clients.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 4));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(clients.length / 4)) % Math.ceil(clients.length / 4));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Calculate visible clients for current slide
  const clientsPerSlide = 4;
  const totalSlides = Math.ceil(clients.length / clientsPerSlide);
  const visibleClients = clients.slice(
    currentSlide * clientsPerSlide,
    (currentSlide + 1) * clientsPerSlide
  );

  return (
    <section id="clientele" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text">
                Our Esteemed Clientele
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Trusted by leading organizations across diverse industries, we've built lasting partnerships 
              through innovation, excellence, and unwavering commitment to success
            </p>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-slide-up' : ''}`}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-gradient-to-r from-white/5 to-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 text-cyan-400">
                    <stat.icon size={24} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm sm:text-base text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Client Logos Slider */}
          <div className={`mb-16 ${isVisible ? 'animate-slide-left' : ''}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Brands That Trust Us
              </h2>
              <p className="text-white/70">
                Join the ranks of successful companies we've helped transform digitally
              </p>
            </div>

            {/* Slider Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-white hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-white hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronRight size={20} />
              </button>

              {/* Logos Grid */}
              <div className="overflow-hidden mx-12">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }, (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {clients
                          .slice(slideIndex * clientsPerSlide, (slideIndex + 1) * clientsPerSlide)
                          .map((client, index) => (
                            <div
                              key={client.id}
                              className="group flex items-center justify-center p-6 lg:p-8 rounded-lg bg-gradient-to-r from-white/5 to-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                              onClick={() => window.open(client.website, '_blank')}
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="text-center">
                                {/* Logo Placeholder - Replace with actual logos */}
                                <div className="w-24 h-12 lg:w-32 lg:h-16 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 mb-4">
                                  <Building2 size={32} className="text-cyan-400 group-hover:text-cyan-300" />
                                  {/* Replace with actual logo: <img src={client.logo} alt={client.name} className="max-h-12 lg:max-h-16 max-w-24 lg:max-w-32 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300" /> */}
                                </div>
                                <h3 className="text-sm lg:text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                                  {client.name}
                                </h3>
                                <p className="text-xs text-white/50 mt-1">{client.industry}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className={`mb-16 ${isVisible ? 'animate-slide-right' : ''}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-white/70">
                Delivering specialized solutions across multiple sectors
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-white/5 to-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm sm:text-base text-white/80">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-scrolling Testimonial Ticker */}
          {/* <div className={`mb-16 ${isVisible ? 'animate-slide-up' : ''}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="relative overflow-hidden bg-gradient-to-r from-white/5 to-purple-900/20 border border-purple-500/20 rounded-lg p-4">
              <div className="animate-marquee whitespace-nowrap">
                <span className="text-white/70 text-lg mx-8">
                  "GrowTech Solutions transformed our digital presence completely!" - TechCorp Industries
                </span>
                <span className="text-white/70 text-lg mx-8">
                  "Exceptional service and innovative solutions!" - HealthCare Plus
                </span>
                <span className="text-white/70 text-lg mx-8">
                  "Professional team that exceeded our expectations!" - RetailMax Chain
                </span>
                <span className="text-white/70 text-lg mx-8">
                  "Cutting-edge technology solutions that work!" - FinanceFirst Bank
                </span>
              </div>
            </div>
          </div> */}

          {/* CTA Section */}
          {/* <div className={`text-center ${isVisible ? 'animate-slide-up' : ''}`}>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-white/70 mb-8">
                Let's discuss how we can help transform your business with innovative digital solutions
              </p>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 glow-button"
              >
                <Users size={18} />
                <span>Start Your Success Story</span>
              </a>
            </div>
          </div> */}
        </div>
      </div>

      {/* Add required CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clientele;