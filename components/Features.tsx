import React from 'react';
import { CheckCircle, ShieldCheck, Rocket } from 'lucide-react';

const features = [
  {
    title: 'AI Quizzes',
    desc: 'Generate personalized quizzes from any content source with our advanced AI technology.',
    icon: <Rocket size={28} className="text-[#7C3AED]" />,
  },
  {
    title: 'Offline Mode',
    desc: 'Download courses and lessons for offline access, learn anytime, anywhere without internet.',
    icon: <ShieldCheck size={28} className="text-[#7C3AED]" />,
  },
  {
    title: 'Study Groups',
    desc: 'Collaborate with peers in study groups, share challenges and foster friendly competition.',
    icon: <CheckCircle size={28} className="text-[#7C3AED]" />,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-10 bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-white text-center mb-12">Key Features</h3>

        <div className="relative w-full h-96 mx-auto flex justify-center items-center gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-700 transition-shadow hover:shadow-xl animate-breathe hover:scale-105"
              style={{ width: '300px' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#7C3AED]/20 rounded-lg">{f.icon}</div>
                <h4 className="text-lg font-bold text-white">{f.title}</h4>
              </div>
              <p className="text-sm text-slate-300">{f.desc}</p>
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
