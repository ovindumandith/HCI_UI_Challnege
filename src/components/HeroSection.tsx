import React, { useEffect, useState } from "react";
import { Play } from "lucide-react";

const HeroSection = () => {
  const [mouseTrails, setMouseTrails] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const [trailId, setTrailId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        id: trailId,
        x: e.clientX,
        y: e.clientY,
      };

      setMouseTrails((prev) => [...prev, newTrail]);
      setTrailId((prev) => prev + 1);

      // Remove trail after animation
      setTimeout(() => {
        setMouseTrails((prev) =>
          prev.filter((trail) => trail.id !== newTrail.id)
        );
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [trailId]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('/hero_img.jpg')`,
          }}
        />

        {/* Gradient Overlay to blend with brand colors */}
        <div className="absolute inset-0 gradient-hero opacity-60" />

        {/* Additional color blend overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-teal/50 via-ocean-blue/40 to-bright-teal/45" />
      </div>

      {/* Mouse Trail Effects */}
      {mouseTrails.map((trail) => (
        <div
          key={trail.id}
          className="mouse-trail"
          style={{
            left: trail.x - 5,
            top: trail.y - 5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="animate-typing text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Pure Water.
              </div>
              <div className="animate-typing-delayed text-4xl md:text-5xl lg:text-6xl font-bold text-bright-teal">
                Smart Technology.
              </div>
              <div className="animate-typing-slow text-4xl md:text-5xl lg:text-6xl font-bold text-light-blue">
                Sustainable Future.
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl animate-fade-in-up animation-delay-600">
              Revolutionary water purification systems powered by AI and IoT
              technology. Experience crystal-clear water while protecting our
              planet's most precious resource.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-800 pt-4">
              <a
                href="#features"
                className="group bg-rust-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center relative overflow-hidden"
              >
                <span className="relative z-10">Discover AquaFlow</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rust-orange to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <button className="group border-2 border-bright-teal bg-bright-teal/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-bright-teal hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-bright-teal/50 shadow-lg shadow-bright-teal/20">
                <Play
                  size={20}
                  className="group-hover:animate-pulse text-bright-teal group-hover:text-white transition-colors duration-300"
                />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Video Section with Enhanced Border */}
          <div className="lg:text-right animate-fade-in-right animation-delay-400">
            {/* Enhanced Video Container with Premium Border */}
            <div className="relative group">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-bright-teal via-light-blue to-bright-teal rounded-2xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>

              {/* Main Video Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-bright-teal/30 hover:border-bright-teal/60 bg-white/5 backdrop-blur-sm">
                {/* Corner Accent Elements */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-bright-teal rounded-tl-lg z-10"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-bright-teal rounded-tr-lg z-10"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-bright-teal rounded-bl-lg z-10"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-bright-teal rounded-br-lg z-10"></div>

                {/* Tech-style Corner Details */}
                <div className="absolute top-0 left-8 w-16 h-0.5 bg-gradient-to-r from-bright-teal to-transparent"></div>
                <div className="absolute top-0 right-8 w-16 h-0.5 bg-gradient-to-l from-bright-teal to-transparent"></div>
                <div className="absolute bottom-0 left-8 w-16 h-0.5 bg-gradient-to-r from-bright-teal to-transparent"></div>
                <div className="absolute bottom-0 right-8 w-16 h-0.5 bg-gradient-to-l from-bright-teal to-transparent"></div>

                {/* Video Element */}
                <video
                  className="w-full h-80 object-cover relative z-5"
                  poster="/aquaflow-video-thumbnail.jpg"
                  controls
                  preload="metadata"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  <source src="/demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>

                {/* Enhanced Play Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 flex items-center justify-center opacity-100 hover:opacity-0 transition-all duration-500 pointer-events-none z-10">
                  <div className="relative">
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-bright-teal/20 animate-ping"></div>
                    {/* Play Button */}
                    <div className="relative bg-bright-teal/95 backdrop-blur-md rounded-full p-6 shadow-2xl border border-white/20 hover:scale-110 transition-transform duration-300">
                      <Play size={40} className="text-white ml-2" />
                    </div>
                  </div>
                </div>

                {/* Video Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-bright-teal/90 to-ocean-blue/90 backdrop-blur-sm rounded-lg px-3 py-1.5 z-10 border border-white/20">
                  <span className="text-white text-sm font-semibold tracking-wide">
                    PRODUCT DEMO
                  </span>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
