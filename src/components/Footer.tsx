
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-teal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">💧</span>
              <span className="text-xl font-bold">AquaFlow</span>
            </div>
            <p className="text-gray-300 mb-6">
              Pure water for a sustainable future
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors underline-effect">
                  Home Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors underline-effect">
                  Business Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors underline-effect">
                  Smart Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors underline-effect">
                  Maintenance Services
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors underline-effect">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors underline-effect">
                  Water Quality Database
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors underline-effect">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bright-teal transition-colors underline-effect">
                  Warranty Information
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a href="mailto:support@aquaflow.com" className="hover:text-bright-teal transition-colors">
                  support@aquaflow.com
                </a>
              </p>
              <p>
                <a href="tel:1-800-AQUAFLOW" className="hover:text-bright-teal transition-colors">
                  1-800-AQUAFLOW
                </a>
              </p>
              <p>123 Innovation Drive</p>
              <p>San Francisco, CA</p>
              <p className="text-sm mt-4">
                Monday-Friday 8AM-6PM PST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} AquaFlow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-bright-teal text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-bright-teal text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-bright-teal text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
