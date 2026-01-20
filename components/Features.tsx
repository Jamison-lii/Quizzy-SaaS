import React from 'react';
import { CheckCircle, ShieldCheck, Rocket } from 'lucide-react';
import CTASection from './CTASection';

const features = [
  {
    title: 'AI Quizzes',
    desc: 'Generate personalized quizzes from any content source with our advanced AI technology.',
    icon: <Rocket size={28} className="text-[#7C3AED]" />,
    highlight: true,
    micro: 'Top feature: personalized AI quizzes',
  },
  {
    title: 'Offline Mode',
    desc: 'Download courses and lessons for offline access, learn anytime, anywhere without internet.',
    icon: <ShieldCheck size={28} className="text-[#7C3AED]" />,
    micro: 'Study anytime, stay consistent',
  },
  {
    title: 'Study Groups',
    desc: 'Collaborate with peers in study groups, share challenges and foster friendly competition.',
    icon: <CheckCircle size={28} className="text-[#7C3AED]" />,
    micro: 'Learn with peers and improve together',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-2">Key Features</h3>
          <p className="text-slate-400 text-sm">Everything you need to learn smarter and faster.</p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-700 transition-shadow hover:shadow-xl hover:scale-105 flex flex-col gap-4 ${
                f.highlight ? 'border-[#7C3AED] scale-105' : ''
              }`}
              style={{ width: '300px' }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-[#7C3AED]/20 rounded-lg">{f.icon}</div>
                <h4 className="text-lg font-bold text-white">{f.title}</h4>
              </div>
              <p className="text-sm text-slate-300">{f.desc}</p>
              <p className="text-xs text-[#A78BFA]">{f.micro}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .animate-breathe {
            animation: breathe 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Features;
