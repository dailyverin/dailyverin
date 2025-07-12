import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials = ({ language }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#00a378] text-[#00a378]">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what leading government organizations say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-[#00a378] opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.text[language] || testimonial.text.en}"
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-[#00a378] font-medium">{testimonial.organization}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00a378] mb-2">500+</div>
            <div className="text-gray-600">Government Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00a378] mb-2">99.8%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00a378] mb-2">24hrs</div>
            <div className="text-gray-600">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00a378] mb-2">100%</div>
            <div className="text-gray-600">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;