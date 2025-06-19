
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-deep-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Leading the Water Technology Revolution
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              At AquaFlow, we believe access to pure, safe water shouldn't come at the expense of our planet. 
              Founded by environmental engineers and tech innovators, we've developed the world's smartest 
              water purification systems.
            </p>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Our mission combines cutting-edge artificial intelligence with sustainable engineering to create 
              water solutions that protect both your family and the environment. Every drop matters, and every 
              system we build reflects our commitment to innovation and sustainability.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-bright-teal mb-2">50,000+</div>
                <div className="text-sm text-gray-300">Households Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bright-teal mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Purity Rate Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bright-teal mb-2">2.5M</div>
                <div className="text-sm text-gray-300">Plastic Bottles Eliminated</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌊</div>
                  <h3 className="text-2xl font-bold mb-4">Water Purification Process</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-bright-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <div className="font-semibold">AI Analysis</div>
                      <div className="text-sm text-gray-300">Smart sensors analyze water composition</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-bright-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <div className="font-semibold">Multi-Stage Filtration</div>
                      <div className="text-sm text-gray-300">Advanced filtration removes all contaminants</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-bright-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <div className="font-semibold">Quality Monitoring</div>
                      <div className="text-sm text-gray-300">Real-time quality verification and alerts</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-bright-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <div className="font-semibold">Pure Water Delivery</div>
                      <div className="text-sm text-gray-300">Crystal-clear, safe water on demand</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
