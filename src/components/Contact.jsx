import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { 
  Phone, Mail, MessageCircle, MapPin, Clock, 
  Send, CheckCircle, Building 
} from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = ({ translations }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone || !formData.organization) {
        toast({
          title: "Required fields missing",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      // Submit to backend API
      const response = await axios.post(`${API}/contact/submit`, formData);
      
      if (response.data.success) {
        toast({
          title: "Inquiry sent successfully!",
          description: response.data.message,
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          requirements: ''
        });

        // Also send WhatsApp message
        const whatsappMessage = `New Inquiry from ${formData.name}\nOrganization: ${formData.organization}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirements: ${formData.requirements}`;
        setTimeout(() => {
          window.open(`https://wa.me/918887969406?text=${encodeURIComponent(whatsappMessage)}`);
        }, 1000);
      } else {
        throw new Error(response.data.message || 'Failed to submit form');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show error message
      toast({
        title: "Error sending inquiry",
        description: error.response?.data?.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
      
      // Fallback to WhatsApp if API fails
      const whatsappMessage = `New Inquiry from ${formData.name}\nOrganization: ${formData.organization}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirements: ${formData.requirements}`;
      setTimeout(() => {
        window.open(`https://wa.me/918887969406?text=${encodeURIComponent(whatsappMessage)}`);
      }, 2000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: translations.contact.call,
      value: "+91 8887969406",
      action: () => window.open('tel:+918887969406'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: translations.contact.whatsapp,
      value: "+91 8887969406",
      action: () => window.open('https://wa.me/918887969406'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: translations.contact.email,
      value: "dailyverin@gmail.com",
      action: () => window.open('mailto:dailyverin@gmail.com'),
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#00a378] text-[#00a378]">
            {translations.contact.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translations.contact.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translations.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      {translations.contact.form.name} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={translations.contact.form.namePlaceholder}
                      className="mt-2 border-gray-300 focus:border-[#00a378] focus:ring-[#00a378]"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      {translations.contact.form.email} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={translations.contact.form.emailPlaceholder}
                      className="mt-2 border-gray-300 focus:border-[#00a378] focus:ring-[#00a378]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      {translations.contact.form.phone} *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={translations.contact.form.phonePlaceholder}
                      className="mt-2 border-gray-300 focus:border-[#00a378] focus:ring-[#00a378]"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="organization" className="text-gray-700 font-medium">
                      {translations.contact.form.organization} *
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder={translations.contact.form.organizationPlaceholder}
                      className="mt-2 border-gray-300 focus:border-[#00a378] focus:ring-[#00a378]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requirements" className="text-gray-700 font-medium">
                    {translations.contact.form.requirements}
                  </Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder={translations.contact.form.requirementsPlaceholder}
                    className="mt-2 min-h-32 border-gray-300 focus:border-[#00a378] focus:ring-[#00a378]"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00a378] hover:bg-[#008a6a] text-white transition-all duration-300 transform hover:scale-105 py-3 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {translations.contact.form.submit}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md"
                  onClick={method.action}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{method.title}</h3>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Information */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {translations.contact.info.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#00a378] mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Service Area</p>
                      <p className="text-gray-600">{translations.contact.info.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#00a378] mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-600">{translations.contact.info.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-[#00a378] mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Experience</p>
                      <p className="text-gray-600">7+ Years in Government Supplies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00a378] mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Orders Completed</p>
                      <p className="text-gray-600">10,000+ Successful Deliveries</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick WhatsApp CTA */}
            <Card className="bg-gradient-to-r from-green-500 to-green-600 border-0 shadow-lg">
              <CardContent className="p-6 text-center text-white">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="mb-4 opacity-90">Chat with us on WhatsApp for instant responses</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300"
                  onClick={() => window.open(`https://wa.me/918887969406?text=${encodeURIComponent('Hi! I need immediate assistance with office supplies.')}`)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;