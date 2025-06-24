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
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
    >
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
              <button className="group border-2 border-bright-teal text-bright-teal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-bright-teal hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-bright-teal/25">
                <Play size={20} className="group-hover:animate-pulse" />
                Watch Demo
              </button>
            </div>
          </div>
          {/* Video Section - Embedded Video */}
          <div className="lg:text-right animate-fade-in-right animation-delay-400">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              {/* Video Element */}
              <video
                className="w-full h-80 object-cover"
                poster="/aquaflow-video-thumbnail.jpg" // Add a compelling thumbnail image
                controls
                preload="metadata"
              >
                <source src="../../public/demo.mp4" type="video/mp4" />
                <source src="../../public/demo.mp4" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Optional: Custom Play Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                <div className="bg-bright-teal/90 backdrop-blur-sm rounded-full p-4">
                  <Play size={32} className="text-white ml-1" />
                </div>
              </div>

              {/* Video Title Overlay */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
