import React from 'react';
import { Mail, Send, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61579789766776', label: 'Facebook' },
    { icon: Mail, href: 'mailto:connect@growtechsolutions.in', label: 'Mail' },
    { icon: Send, href: 'https://wa.me/918423186148', label: 'Whatsapp' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="relative border-t border-purple-500/30 bg-black/80 backdrop-blur-sm min-h-[300px]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="text-xl sm:text-2xl font-bold">
            <img
              src="/images/logo.png"
              alt="GrowTech Solutions Logo"
              className="h-26 w-62 sm:h-40" // adjust height as needed
            />
          </div>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed text-center sm:text-left font-medium drop-shadow-md">
              Empowering businesses through innovative digital solutions and cutting-edge technology.
            </p>
            <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-300 text-center sm:text-left font-medium drop-shadow-md">
              Founded by Roshni Bajpai & Rahul Yadav | 2025
            </div>
          </div>
          
          <div className="text-center py-14 sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 drop-shadow-lg">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm sm:text-base text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium hover:font-semibold drop-shadow-md"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center py-14 sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 drop-shadow-lg">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-purple-800/50 border-2 border-purple-500/40 text-gray-200 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-purple-700/60 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-purple-500/30 text-center">
          <p className="text-xs sm:text-sm text-gray-300 font-medium drop-shadow-md">
            © 2025 GrowTech Solutions. All rights reserved. Crafted with passion and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;