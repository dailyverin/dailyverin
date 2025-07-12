import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MessageCircle, Phone, Mail, CheckCircle, Award, Users } from 'lucide-react';

const Hero = ({ translations }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Award, value: '7+', label: translations.hero.stats.years },
    { icon: CheckCircle, value: '10000+', label: translations.hero.stats.orders },
    { icon: Users, value: '500+', label: translations.hero.stats.clients }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1590921401384-aa02f1a981f6)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00a378]/90 via-[#00a378]/80 to-[#008a6a]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <Award className="w-4 h-4 mr-2" />
            {translations.hero.badge}
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">{translations.hero.title.line1}</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              {translations.hero.title.line2}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium">
            {translations.hero.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {translations.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white text-[#00a378] hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg px-8 py-4"
              onClick={scrollToContact}
            >
              {translations.hero.cta.getQuote}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#00a378] transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
              onClick={() => window.open(`https://wa.me/918887969406?text=${encodeURIComponent(translations.hero.whatsappMessage)}`)}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp {translations.hero.cta.now}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <stat.icon className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <Button
          size="sm"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-110"
          onClick={() => window.open(`https://wa.me/918887969406`)}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          className="rounded-full w-14 h-14 bg-white hover:bg-gray-50 shadow-lg transition-all duration-300 hover:scale-110"
          onClick={() => window.open(`tel:+918887969406`)}
        >
          <Phone className="w-6 h-6 text-[#00a378]" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;