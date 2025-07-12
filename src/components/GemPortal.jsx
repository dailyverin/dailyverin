import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Shield, Clock, DollarSign, FileCheck, 
  MessageCircle, ArrowRight, CheckCircle 
} from 'lucide-react';

const GemPortal = ({ translations }) => {
  const benefits = [
    {
      icon: Shield,
      title: translations.gemPortal.benefits.items[0].title,
      description: translations.gemPortal.benefits.items[0].desc,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: translations.gemPortal.benefits.items[1].title,
      description: translations.gemPortal.benefits.items[1].desc,
      color: "from-green-500 to-green-600"
    },
    {
      icon: CheckCircle,
      title: translations.gemPortal.benefits.items[2].title,
      description: translations.gemPortal.benefits.items[2].desc,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: translations.gemPortal.benefits.items[3].title,
      description: translations.gemPortal.benefits.items[3].desc,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: translations.gemPortal.process.steps[0].title,
      description: translations.gemPortal.process.steps[0].desc,
      icon: FileCheck
    },
    {
      step: "2",
      title: translations.gemPortal.process.steps[1].title,
      description: translations.gemPortal.process.steps[1].desc,
      icon: Shield
    },
    {
      step: "3",
      title: translations.gemPortal.process.steps[2].title,
      description: translations.gemPortal.process.steps[2].desc,
      icon: Clock
    },
    {
      step: "4",
      title: translations.gemPortal.process.steps[3].title,
      description: translations.gemPortal.process.steps[3].desc,
      icon: CheckCircle
    }
  ];

  return (
    <section id="gem-portal" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#00a378] text-[#00a378]">
            {translations.gemPortal.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translations.gemPortal.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translations.gemPortal.description}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            {translations.gemPortal.benefits.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            {translations.gemPortal.process.title}
          </h3>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00a378] to-[#008a6a] transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-white border-4 border-[#00a378] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-[#00a378]">{step.step}</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-[#00a378] rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 mt-6">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#00a378] to-[#008a6a] border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Simplify Your GEM Procurement?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Let our experts handle your GEM portal requirements. We'll ensure compliance, competitive pricing, and hassle-free procurement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00a378] transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open(`https://wa.me/918887969406?text=${encodeURIComponent('Hi! I need assistance with GEM portal procurement for our government office.')}`)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {translations.gemPortal.cta}
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00a378] transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Detailed Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00a378] mb-2">100%</div>
            <div className="text-gray-600">GEM Compliance Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00a378] mb-2">24-48hrs</div>
            <div className="text-gray-600">Average Processing Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00a378] mb-2">500+</div>
            <div className="text-gray-600">GEM Orders Processed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GemPortal;