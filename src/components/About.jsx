import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Award, Users, Briefcase, Target, Shield } from 'lucide-react';

const About = ({ translations }) => {
  const features = [
    {
      icon: Award,
      title: translations.about.features.experience.title,
      description: translations.about.features.experience.desc
    },
    {
      icon: CheckCircle,
      title: translations.about.features.orders.title,
      description: translations.about.features.orders.desc
    },
    {
      icon: Shield,
      title: translations.about.features.quality.title,
      description: translations.about.features.quality.desc
    },
    {
      icon: Target,
      title: translations.about.features.delivery.title,
      description: translations.about.features.delivery.desc
    }
  ];

  const clients = [
    'BHEL', 'BEL', 'ISRO', 'Irrigation Department', 
    'Indian Army', 'CISF', 'GST Department', 'Government Offices'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#00a378] text-[#00a378]">
            {translations.about.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translations.about.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translations.about.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00a378] to-[#008a6a] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {translations.about.story.title}
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{translations.about.story.para1}</p>
              <p>{translations.about.story.para2}</p>
              <p>{translations.about.story.para3}</p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {translations.about.mission.title}
              </h4>
              <p className="text-gray-600">{translations.about.mission.description}</p>
            </div>
          </div>

          <div className="relative">
            <div 
              className="rounded-2xl h-96 bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1660224319984-4af12c1a469b)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a378]/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00a378] rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10000+</div>
                    <div className="text-sm text-gray-600">{translations.about.stats.satisfied}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {translations.about.trustedBy}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-[#00a378] text-[#00a378] hover:bg-[#00a378] hover:text-white transition-colors duration-300"
              >
                {client}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;