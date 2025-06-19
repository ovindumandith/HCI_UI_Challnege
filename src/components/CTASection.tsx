
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Home'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Success!",
      description: "Your water analysis has been scheduled. We'll contact you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: 'Home'
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 gradient-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Water Experience?
        </h2>
        
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Join thousands who've discovered the power of smart, sustainable water technology.
        </p>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-left font-semibold text-deep-teal mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-teal focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-left font-semibold text-deep-teal mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-teal focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-left font-semibold text-deep-teal mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-teal focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="propertyType" className="block text-left font-semibold text-deep-teal mb-2">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-teal focus:border-transparent transition-all duration-200"
                >
                  <option value="Home">Home</option>
                  <option value="Business">Business</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-rust-orange text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-opacity-90'
              }`}
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Free Water Analysis'}
            </button>

            <div className="flex items-center justify-center gap-2 text-deep-teal">
              <span className="text-green-600">✓</span>
              <span>Free consultation with certified water specialists</span>
            </div>
            
            <p className="text-gray-600 text-sm">
              No commitment • Expert advice • Custom solutions
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
