import React from 'react';
import { UploadCloud, Cpu, PlayCircle } from 'lucide-react';
import Reveal from './Reveal';
import FloatingCard from './FloatingCard';

const steps = [
  {
    title: 'Choose or Upload Material',
    desc: 'Add a PDF, text, or pick a topic to create a quiz from any content source.',
    icon: <UploadCloud size={28} className="text-[#007AFF]" />,
  },
  {
    title: 'AI Generates Smart Quizzes',
    desc: 'Our AI analyzes content and creates varied question types to test comprehension.',
    icon: <Cpu size={28} className="text-[#007AFF]" />,
  },
  {
    title: 'Practice, Track & Download',
    desc: 'Practice with adaptive quizzes, track progress, and download courses for offline use.',
    icon: <PlayCircle size={28} className="text-[#007AFF]" />,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#0A2540]">How Quizzy works — in three steps</h2>
          <p className="text-slate-500 mt-3">A visual walkthrough of how you go from content to confidence.</p>
        </Reveal>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <Reveal key={i} className="">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-violet-50 flex items-center justify-center mb-4">{s.icon}</div>
                  <h4 className="font-bold text-slate-900">{s.title}</h4>
                  <p className="text-slate-500 text-sm mt-2">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Visual path with floating phone mock */}
        {/*
             <div className="hidden lg:block">
            <FloatingCard className="absolute left-1/2 -translate-x-1/2 -bottom-20 w-72" delay={0.2}>
              <div className="w-full h-44 bg-gradient-to-br from-violet-600 to-slate-900 rounded-2xl flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-sm font-bold">Quiz Preview</div>
                  <div className="text-xs mt-1 opacity-80">Practice questions generated instantly</div>
                </div>
              </div>
            </FloatingCard>
          </div>
        */}  
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
