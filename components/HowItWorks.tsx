import React from 'react';
import { UploadCloud, Cpu, PlayCircle } from 'lucide-react';
import Reveal from './Reveal';
import FloatingCard from './FloatingCard';

const steps = [
  {
    title: 'Choose or Upload Material',
    desc: 'Add a PDF, text, or pick a topic to create a quiz from any content source.',
    icon: <UploadCloud size={32} className="text-[#7C3AED] animate-pulse-slow" />,
  },
  {
    title: 'AI Generates Smart Quizzes',
    desc: 'Our AI analyzes content and creates varied question types to test comprehension.',
    icon: <Cpu size={32} className="text-[#7C3AED] animate-pulse-slow" />,
  },
  {
    title: 'Practice, Track & Download',
    desc: 'Practice with adaptive quizzes, track progress, and download courses for offline use.',
    icon: <PlayCircle size={32} className="text-[#7C3AED] animate-pulse-slow" />,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-28 bg-slate-900 overflow-hidden relative">
      {/* Animated shimmer background */}
      <div className="absolute inset-0 bg-slate-900 animate-shimmer pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How Quizzy Works
          </h2>
          <p className="text-slate-400 mt-3">
            A visual walkthrough of how you go from content to confidence.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <Reveal key={i}>
                <div
                  className={`bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-md text-center 
                  transition-all duration-500 hover:shadow-xl hover:scale-105 relative`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#7C3AED]/30 px-3 py-1 rounded-full text-xs font-semibold text-white">
                    Step {i + 1}
                  </div>
                  <div className="mx-auto w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-5 animate-bounce-slow">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-white text-lg">{step.title}</h4>
                  <p className="text-slate-400 text-sm mt-2">{step.desc}</p>
                  <p className="text-xs text-[#A78BFA] mt-1">Get started quickly and easily</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mid-section CTA */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-xl font-medium bg-[#7C3AED] hover:bg-[#6D28D9] transition text-white">
              Start Creating Your Quiz Now →
            </button>
          </div>

          {/* Floating card with visual mock */}
          <div className="hidden lg:block">
            <FloatingCard className="absolute right-1 -translate-x-1/2 -top-48 w-80 animate-float" delay={0.2}>
              <div className="w-full h-48 bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-bold">Quiz Preview</div>
                  <div className="text-xs mt-1 opacity-90">
                    Practice questions generated instantly
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float { 0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);} }
          .animate-float { animation: float 4s ease-in-out infinite; }

          @keyframes pulse-slow { 0%,100%{transform:scale(1);opacity:0.9;}50%{transform:scale(1.15);opacity:1;} }
          .animate-pulse-slow { animation: pulse-slow 2.5s ease-in-out infinite; }

          @keyframes shimmer { 0%{background-position:-100% 0;}100%{background-position:100% 0;} }
          .animate-shimmer { background-size:200% 100%; animation: shimmer 8s linear infinite; }

          @keyframes bounce-slow { 0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);} }
          .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default HowItWorks;
