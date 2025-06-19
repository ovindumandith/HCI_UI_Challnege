import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Filtration",
      description:
        "Intelligent multi-stage filtration that adapts to your water quality in real-time for optimal purity.",
      accentColor: "#0FA4AF",
    },
    {
      icon: "📱",
      title: "24/7 Monitoring",
      description:
        "Real-time water quality tracking with instant mobile notifications and comprehensive analytics.",
      accentColor: "#024950",
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Design",
      description:
        "Energy-efficient systems reduce environmental impact by 60% compared to traditional methods.",
      accentColor: "#964734",
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description:
        "Machine learning predicts maintenance needs and optimizes performance automatically.",
      accentColor: "#0FA4AF",
    },
  ];

  return (
    <section
      id="features"
      className="py-20"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #AFDDE5, #FFFFFF)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#003135" }}
          >
            Smart Water Technology That Changes Everything
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#024950" }}>
            Experience the future of water purification with our cutting-edge
            technology that combines artificial intelligence, IoT monitoring,
            and sustainable design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-xl p-8 text-center border-2 border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2"
              style={{
                "--accent-color": feature.accentColor,
                "--accent-bg": feature.accentColor + "10",
                "--accent-hover-bg": feature.accentColor + "20",
              } as React.CSSProperties & Record<string, string>}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = feature.accentColor;
                e.currentTarget.style.boxShadow = `0 20px 25px -5px ${feature.accentColor}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E5E7EB";
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Background Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${feature.accentColor}0A, ${feature.accentColor}1A)`,
                }}
              ></div>

              {/* Icon Container */}
              <div
                className="relative mb-6 mx-auto w-20 h-20 rounded-xl flex items-center justify-center text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  backgroundColor: feature.accentColor + "1A",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    feature.accentColor + "33";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    feature.accentColor + "1A";
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: "#003135" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = feature.accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#003135";
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="leading-relaxed transition-colors duration-300"
                  style={{ color: "#024950" }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: feature.accentColor }}
              ></div>
            </div>
          ))}
        </div>

        {/* Enhanced stats section with better contrast */}
        <div
          className="mt-20 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #003135, #024950)" }}
        >
          {/* Enhanced background pattern for better visual appeal */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #0FA4AF 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #AFDDE5 0%, transparent 50%)`,
            }}
          ></div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="group">
              <div
                className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ color: "#0FA4AF" }}
              >
                50,000+
              </div>
              <div
                className="text-lg font-medium transition-colors duration-300"
                style={{ color: "#AFDDE5" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#AFDDE5";
                }}
              >
                Households Protected
              </div>
            </div>
            <div className="group">
              <div
                className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ color: "#0FA4AF" }}
              >
                99.9%
              </div>
              <div
                className="text-lg font-medium transition-colors duration-300"
                style={{ color: "#AFDDE5" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#AFDDE5";
                }}
              >
                Purity Rate Achieved
              </div>
            </div>
            <div className="group">
              <div
                className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ color: "#0FA4AF" }}
              >
                2.5M
              </div>
              <div
                className="text-lg font-medium transition-colors duration-300"
                style={{ color: "#AFDDE5" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#AFDDE5";
                }}
              >
                Plastic Bottles Eliminated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
