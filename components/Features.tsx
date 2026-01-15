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
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-white text-center mb-8">Key Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#7C3AED]/20 rounded-lg">{f.icon}</div>
                <h4 className="text-lg font-bold text-white">{f.title}</h4>
              </div>
              <p className="text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
