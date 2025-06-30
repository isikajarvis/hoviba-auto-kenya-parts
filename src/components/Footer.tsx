
import { Phone, MessageCircle, Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: () => window.open('https://wa.me/254701036266'),
      className: 'text-green-500 hover:text-green-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      action: () => window.open('https://instagram.com/hovibaauto'),
      className: 'text-pink-500 hover:text-pink-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      action: () => window.open('https://facebook.com/hovibaauto'),
      className: 'text-blue-500 hover:text-blue-600'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HOVIBA AUTO</h3>
            <p className="text-gray-300 mb-4">
              Quality Car & Motorcycle Spare Parts Across Kenya
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>hovibauto@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={social.action}
                  className={`${social.className} transition-colors`}
                  title={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            Copyright © 2025 HOVIBA AUTO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
