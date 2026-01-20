import React from 'react';

const TrustedBy: React.FC = () => {
  const logos = [
    { name: "Landmark" },
    { name: "HIMS" },
    { name: "HIBMAT" },
    { name: "RHIMBS" },
  ];

  const backgrounds = [
    '/images/Landmark.jpg',
    '/images/hims.webp',
    '/images/hibmat.jpg',
    '/images/rhims.jpg',
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-slide"
            style={{
              backgroundImage: `url(${img})`,
              animationDelay: `${i * 6}s`,
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0B0F1A]/75 backdrop-blur-[0px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <h4 className="text-center text-2xl font-bold text-white mb-4">
          The world's best companies trust QuizzyAI
        </h4>
        <p className="text-center text-slate-400 mb-16 max-w-md mx-auto text-sm">
          Trusted by organizations and learners worldwide to improve retention and accelerate learning.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-90">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="bg-[#1F2937]/90 border border-[#4C1D95] rounded-lg px-6 py-3
                         text-white font-semibold text-sm
                         hover:bg-[#4C1D95]/20 hover:scale-105
                         transition-all duration-300"
            >
              {logo.name}
            </div>
          ))}
        </div>

        {/* Credibility line */}
        <p className="text-center text-slate-400 mt-20 max-w-lg mx-auto text-sm font-medium">
          QuizzyAI is used by thousands of learners and institutions globally to maximize knowledge retention and boost learning efficiency.
        </p>
      </div>

      {/* Slider animation */}
      <style>{`
        .bg-slide {
          background-size: cover;
          background-position: center;
          opacity: 0;
          animation: slideFade 18s infinite;
        }

        @keyframes slideFade {
          0% { opacity: 0; }
          10% { opacity: 1; }
          30% { opacity: 1; }
          40% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
