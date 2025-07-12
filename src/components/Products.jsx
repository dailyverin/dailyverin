import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MessageCircle, ExternalLink, ChevronRight } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Products = ({ language, translations }) => {
  const [productCategories, setProductCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductCategories();
  }, []);

  const fetchProductCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/products/categories`);
      
      if (response.data.success) {
        setProductCategories(response.data.data || []);
      } else {
        throw new Error(response.data.message || 'Failed to fetch categories');
      }
    } catch (err) {
      console.error('Error fetching product categories:', err);
      setError('Failed to load product categories');
      // Fallback to mock data if API fails
      setProductCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppOrder = (productName) => {
    const message = `Hi! I'm interested in ordering ${productName} for our government office. Please provide details and pricing.`;
    window.open(`https://wa.me/918887969406?text=${encodeURIComponent(message)}`);
  };

  if (loading) {
    return (
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00a378] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
            <Button 
              onClick={fetchProductCategories}
              className="mt-4 bg-[#00a378] hover:bg-[#008a6a]"
            >
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#00a378] text-[#00a378]">
            {translations.products.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translations.products.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translations.products.description}
          </p>
        </div>

        {productCategories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No product categories available at the moment.</p>
            <p className="text-gray-500 mt-2">Please contact us directly for your requirements.</p>
            <Button
              className="mt-4 bg-[#00a378] hover:bg-[#008a6a] text-white"
              onClick={() => window.open(`https://wa.me/918887969406?text=${encodeURIComponent('Hi! I need information about your office supplies.')}`)}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us on WhatsApp
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card 
                key={category.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name[language] || category.name.en}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=60';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.name[language] || category.name.en}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description[language] || category.description.en}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Products Include:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.products.slice(0, 4).map((product, index) => (
                        <Badge 
                          key={index}
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-700 hover:bg-[#00a378] hover:text-white transition-colors duration-300"
                        >
                          {product}
                        </Badge>
                      ))}
                      {category.products.length > 4 && (
                        <Badge variant="outline" className="text-xs text-gray-500">
                          +{category.products.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-[#00a378] hover:bg-[#008a6a] text-white transition-all duration-300 transform hover:scale-105"
                      onClick={() => handleWhatsAppOrder(category.name[language] || category.name.en)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {translations.products.cta}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#00a378] text-[#00a378] hover:bg-[#00a378] hover:text-white group"
                    >
                      {translations.products.viewAll}
                      <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#00a378] to-[#008a6a] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Custom Products or Bulk Orders?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              We can source any office supply you need. Get in touch for custom requirements and bulk pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#00a378] transition-all duration-300"
                onClick={() => window.open(`https://wa.me/918887969406?text=${encodeURIComponent('Hi! I need custom office supplies for our government office.')}`)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp for Custom Orders
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#00a378] transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Detailed Quote
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;