import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Phone, Mail, MessageCircle, 
  Facebook, Twitter, Linkedin, Instagram 
} from 'lucide-react';

const Footer = ({ translations }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: translations.nav?.home || "Home", href: "#home" },
    { name: translations.nav?.about || "About", href: "#about" },
    { name: translations.nav?.products || "Products", href: "#products" },
    { name: translations.nav?.gemPortal || "GEM Portal", href: "#gem-portal" },
    { name: translations.nav?.contact || "Contact", href: "#contact" }
  ];

  const services = [
    "Office Stationery",
    "IT Equipment", 
    "Office Consumables",
    "Air Conditioning",
    "Electrical Tools",
    "Cleaning Supplies"
  ];

  const scrollToSection = (href) => {
    const sectionId = href.replace('#', '');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#00a378] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold">Dailyver.in</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {translations.footer?.description || "Your trusted partner for government office supplies with 7+ years of experience and 10,000+ successful orders."}
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-[#00a378] hover:border-[#00a378] hover:text-white"
                onClick={() => window.open('https://facebook.com')}
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-[#00a378] hover:border-[#00a378] hover:text-white"
                onClick={() => window.open('https://twitter.com')}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-[#00a378] hover:border-[#00a378] hover:text-white"
                onClick={() => window.open('https://linkedin.com')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-[#00a378] hover:border-[#00a378] hover:text-white"
                onClick={() => window.open('https://instagram.com')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {translations.footer?.quickLinks || "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[#00a378] transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {translations.footer?.services || "Our Services"}
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-[#00a378] transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {translations.footer?.contactInfo || "Contact Info"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00a378]" />
                <span className="text-gray-300">+91 8887969406</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00a378]" />
                <span className="text-gray-300">dailyverin@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-[#00a378]" />
                <span className="text-gray-300">WhatsApp Support</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button
                size="sm"
                className="w-full bg-[#00a378] hover:bg-[#008a6a] text-white"
                onClick={() => window.open('https://wa.me/918887969406')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                onClick={() => window.open('tel:+918887969406')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-300 text-sm">
            {translations.footer?.copyright || `© ${currentYear} Dailyver.in. All rights reserved.`}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-300">
            <span>🏆 7+ Years Experience</span>
            <span>✅ 10,000+ Orders Completed</span>
            <span>🇮🇳 Serving All India</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800 rounded-full px-6 py-3">
            <span className="text-sm text-gray-300">Trusted by:</span>
            <span className="text-sm font-medium text-[#00a378]">BHEL</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm font-medium text-[#00a378]">ISRO</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm font-medium text-[#00a378]">Indian Army</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm font-medium text-[#00a378]">BEL</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm font-medium text-[#00a378]">CISF</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;