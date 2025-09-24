import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Calendar,
  Users,
  Award,
  Heart,
  Globe
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/logo.jpg"
                alt="LECA Logo"
                className="h-12 w-12 mr-3 rounded-full object-cover border-2 border-blue-400"
              />
              <span className="text-xl font-bold">Lashibi Ewe Community Association</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Preserving our rich Ewe heritage while building stronger community bonds through cultural events, 
              educational programs, and collaborative initiatives. Together, we celebrate our traditions and 
              create a brighter future for generations to come.
            </p>
            
          
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300 group"
                title="Facebook"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition-colors duration-300 group"
                title="Twitter"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            
            
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300 group"
                title="YouTube"
              >
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <Globe className="h-5 w-5 mr-2 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Events</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Activities</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Membership</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <Mail className="h-5 w-5 mr-2 text-blue-400" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Lashibi Community</p>
                  <p>Lashibi Community 25, </p>
                  <p>near the Police Station</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+233244419697" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +233 24 441 9697
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@leca.org" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  info@leca.org
                </a>
              </div>
            </div>
 
          </div>
        </div> 
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm flex items-center">
              © 2024 Lashibi Ewe Community Association. All rights reserved.
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;