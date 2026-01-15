import React from 'react';
import { UploadCloud, Cpu, PlayCircle } from 'lucide-react';
import Reveal from './Reveal';
import FloatingCard from './FloatingCard';

const steps = [
  {
    title: 'Choose or Upload Material',
    desc: 'Add a PDF, text, or pick a topic to create a quiz from any content source.',
    icon: <UploadCloud size={32} className="text-[#7C3AED]" />,
  },
  {
    title: 'AI Generates Smart Quizzes',
    desc: 'Our AI analyzes content and creates varied question types to test comprehension.',
    icon: <Cpu size={32} className="text-[#7C3AED]" />,
  },
  {
    title: 'Practice, Track & Download',
    desc: 'Practice with adaptive quizzes, track progress, and download courses for offline use.',
    icon: <PlayCircle size={32} className="text-[#7C3AED]" />,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-28 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How Quizzy Works — In Three Steps
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
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-5">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-white text-lg">{step.title}</h4>
                  <p className="text-slate-400 text-sm mt-2">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Floating card with visual mock */}
          <div className="hidden lg:block">
            <FloatingCard className="absolute right-1 -translate-x-1/2 -top-48 w-80" delay={0.2}>
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
    </section>
  );
};

export default HowItWorks;
