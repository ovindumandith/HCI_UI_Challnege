import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Determine current section for better background adaptation
      const sections = ["home", "features", "testimonials", "about", "contact"];
      let current = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            current = section;
          }
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Technology", href: "#features" },
    { name: "Solutions", href: "#about" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Dynamic background based on scroll and current section
  const getNavbarBackground = () => {
    if (!isScrolled) {
      return "bg-gradient-to-r from-deep-teal/80 via-ocean-blue/80 to-deep-teal/80 backdrop-blur-sm";
    }

    // Enhanced background for white/light sections
    if (currentSection === "features" || currentSection === "testimonials") {
      return "bg-gradient-to-r from-deep-teal/98 via-ocean-blue/98 to-deep-teal/98 backdrop-blur-xl shadow-2xl border-b border-bright-teal/20";
    }

    return "bg-gradient-to-r from-deep-teal/95 via-ocean-blue/95 to-deep-teal/95 backdrop-blur-md shadow-lg";
  };

  const getTextShadow = () => {
    // Add text shadow for better visibility on light backgrounds
    if (currentSection === "features" || currentSection === "testimonials") {
      return { textShadow: "0 1px 3px rgba(0, 49, 53, 0.5)" };
    }
    return {};
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarBackground()}`}
      style={{
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "blur(10px)",
        WebkitBackdropFilter: isScrolled
          ? "blur(20px) saturate(180%)"
          : "blur(10px)",
      }}
    >
      {/* Enhanced border for better definition */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, #0FA4AF, transparent)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-2 group">
            <span
              className="text-2xl transition-transform duration-300 group-hover:scale-110"
              style={getTextShadow()}
            >
              💧
            </span>
            <span
              className="text-xl font-bold text-white transition-all duration-300 group-hover:text-bright-teal"
              style={getTextShadow()}
            >
              AquaFlow
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-bright-teal transition-all duration-300 font-medium group"
                style={getTextShadow()}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {item.name}
                {/* Enhanced underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bright-teal transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative overflow-hidden bg-rust-orange text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              style={{
                boxShadow: "0 4px 15px rgba(150, 71, 52, 0.3)",
                ...getTextShadow(),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(150, 71, 52, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(150, 71, 52, 0.3)";
              }}
            >
              <span className="relative z-10">Get Quote</span>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-rust-orange to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={getTextShadow()}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden backdrop-blur-xl border-t border-bright-teal/30 animate-fade-in"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 49, 53, 0.98), rgba(2, 73, 80, 0.98))",
              boxShadow: "0 8px 32px rgba(0, 49, 53, 0.4)",
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-bright-teal hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "slideInLeft 0.3s ease-out forwards",
                    ...getTextShadow(),
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block mx-3 mt-4 bg-rust-orange text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: "slideInLeft 0.3s ease-out forwards",
                  animationDelay: "0.5s",
                  boxShadow: "0 4px 15px rgba(150, 71, 52, 0.3)",
                  ...getTextShadow(),
                }}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
