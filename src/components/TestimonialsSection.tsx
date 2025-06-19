import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Homeowner, California",
      initials: "SJ",
      quote:
        "Our water tastes amazing and we've saved $2,000 on bottled water this year. The app notifications give us complete peace of mind.",
      accentColor: "#0FA4AF",
      bgGradient: "linear-gradient(135deg, #0FA4AF15, #AFDDE520)",
    },
    {
      name: "Mike Chen",
      title: "Facilities Manager, GreenTech Corp",
      initials: "MC",
      quote:
        "AquaFlow's system supplies pure water to 500+ employees daily while significantly reducing our environmental footprint.",
      accentColor: "#024950",
      bgGradient: "linear-gradient(135deg, #02495015, #00313520)",
    },
    {
      name: "Dr. Lisa Rodriguez",
      title: "Environmental Scientist",
      initials: "LR",
      quote:
        "The real-time monitoring helped us identify water quality issues before they became serious problems. Exceptional technology.",
      accentColor: "#964734",
      bgGradient: "linear-gradient(135deg, #96473415, #0FA4AF15)",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #AFDDE5, #FFFFFF, #AFDDE5)",
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #0FA4AF 0%, transparent 50%), 
                         radial-gradient(circle at 80% 20%, #024950 0%, transparent 50%),
                         radial-gradient(circle at 40% 40%, #003135 0%, transparent 50%)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#003135" }}
          >
            Trusted by Thousands of Satisfied Customers
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#024950" }}>
            See what our customers are saying about their AquaFlow experience
            and how it's transformed their relationship with water.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 border border-gray-100"
              style={{
                background: "linear-gradient(135deg, #FFFFFF, #FFFFFF)",
                boxShadow: "0 10px 30px rgba(0, 49, 53, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = testimonial.bgGradient;
                e.currentTarget.style.borderColor = testimonial.accentColor;
                e.currentTarget.style.boxShadow = `0 20px 40px ${testimonial.accentColor}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #FFFFFF, #FFFFFF)";
                e.currentTarget.style.borderColor = "#F3F4F6";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 49, 53, 0.1)";
              }}
            >
              {/* Quote Mark */}
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: testimonial.accentColor,
                  color: "#FFFFFF",
                }}
              >
                "
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center mb-6 pt-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      backgroundColor: testimonial.accentColor + "20",
                      color: testimonial.accentColor,
                      border: `2px solid ${testimonial.accentColor}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        testimonial.accentColor;
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        testimonial.accentColor + "20";
                      e.currentTarget.style.color = testimonial.accentColor;
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div
                      className="font-bold text-lg"
                      style={{ color: "#003135" }}
                    >
                      {testimonial.name}
                    </div>
                    <div className="text-sm" style={{ color: "#024950" }}>
                      {testimonial.title}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  className="text-lg leading-relaxed italic mb-6 relative"
                  style={{ color: "#024950" }}
                >
                  {testimonial.quote}
                </blockquote>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div
                    className="flex"
                    style={{ color: testimonial.accentColor }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-2xl transition-all duration-300 hover:scale-125"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animation: "fadeIn 0.5s ease-out forwards",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div
                    className="text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: testimonial.accentColor }}
                  >
                    Verified Customer
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl"
                style={{ backgroundColor: testimonial.accentColor }}
              ></div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold" style={{ color: "#003135" }}>
              Industry Recognition & Certifications
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: "🏆",
                label: "EPA Certified",
                sublabel: "Environmental Protection",
                color: "#0FA4AF",
              },
              {
                icon: "✅",
                label: "NSF Approved",
                sublabel: "Safety Standards",
                color: "#024950",
              },
              {
                icon: "🌟",
                label: "Award Winning",
                sublabel: "Innovation Excellence",
                color: "#964734",
              },
              {
                icon: "🛡️",
                label: "10-Year Warranty",
                sublabel: "Quality Guarantee",
                color: "#0FA4AF",
              },
            ].map((indicator, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = indicator.color;
                  e.currentTarget.style.boxShadow = `0 15px 30px ${indicator.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#F3F4F6";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {indicator.icon}
                </div>
                <div
                  className="font-bold text-lg mb-1 transition-colors duration-300"
                  style={{ color: "#003135" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = indicator.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#003135";
                  }}
                >
                  {indicator.label}
                </div>
                <div className="text-sm" style={{ color: "#024950" }}>
                  {indicator.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Satisfaction Banner */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full shadow-xl"
            style={{
              background: "linear-gradient(135deg, #003135, #024950)",
              color: "#FFFFFF",
            }}
          >
            <div className="text-3xl">😊</div>
            <div>
              <div className="font-bold text-lg" style={{ color: "#0FA4AF" }}>
                98.5% Customer Satisfaction
              </div>
              <div className="text-sm" style={{ color: "#AFDDE5" }}>
                Based on 5,000+ verified reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
