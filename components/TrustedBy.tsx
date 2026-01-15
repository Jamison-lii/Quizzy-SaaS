import React from 'react';

const TrustedBy: React.FC = () => {
 const logos = [
  { name: "Landmark" },
  { name: "HIMS" },
  { name: "HIBMAT" },
  { name: "RHIMBS" },
];
  return (
    <section className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h4 className="text-center text-2xl font-bold text-white mb-16">
          The world's best companies trust QuizzyAI.
        </h4>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-default animate-in fade-in zoom-in-50 duration-700"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
             <span className="text-white font-bold">{logo.name}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 mt-20 max-w-md mx-auto text-sm font-medium">
          QuizzyAI is used by learners across the globe to improve retention and accelerate learning.
        </p>
      </div>
    </section>
  );
};

export default TrustedBy;
