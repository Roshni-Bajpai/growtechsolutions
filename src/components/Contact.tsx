import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'connect@growtechsolutions.com',
      color: 'cyan'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91-7652090512, +91-8423186148',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Lucknow, Uttar Pradesh, India',
      color: 'pink'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text">
                Get In Touch
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's discuss your next breakthrough project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-left' : ''}`}>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Let's Create Something Amazing</h3>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Whether you're looking to build a new digital product, enhance your existing platform, 
                  or explore innovative solutions, we're here to turn your vision into reality.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className={`flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-gradient-to-r from-white/5 to-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 ${
                      isVisible ? 'animate-slide-up' : ''
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 ${
                      info.color === 'cyan' ? 'text-cyan-400' : 
                      info.color === 'purple' ? 'text-purple-400' : 'text-pink-400'
                    }`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base text-white font-semibold">{info.title}</h4>
                      <p className="text-sm sm:text-base text-white/70">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isVisible ? 'animate-slide-right' : ''}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 glow-button"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;