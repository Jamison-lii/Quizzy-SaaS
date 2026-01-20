import React from 'react';
import { Users, Calendar, TrendingUp, MapPin, Cloud } from 'lucide-react';
import FloatingCard from './FloatingCard';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-slate-900 text-white">
      {/* Perspective Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
        <div className="perspective-grid absolute inset-0 w-full h-[150%] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">

        {/* Eyebrow */}
        <p className="text-xs tracking-widest uppercase text-slate-400 mb-3">
          Smarter learning for everyday students
        </p>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/20 text-[#7C3AED] text-xs font-semibold mb-6 border border-[#7C3AED]/40 animate-bounce">
          <span>Personalized learning, built for real life</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Unlock Your Learning Potential <br />
          with{' '}
          <span className="relative inline-block px-6 py-1 mx-2">
            <span className="absolute inset-0 bg-[#7C3AED] rounded-full -rotate-1 skew-x-3"></span>
            <span className="relative z-10">AI</span>
          </span>
          That Adapts to You
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
          Personalized quizzes, interactive courses, and a smart study companion —
          designed to fit how you actually learn.
        </p>

        {/* Micro Stats */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-10">
          <div>
            <span className="font-bold text-white">500+</span> learners
          </div>
          <div>
            <span className="font-bold text-white">10k+</span> quizzes attempted
          </div>
          <div>
            <span className="font-bold text-white">Minutes</span> to get started
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#7C3AED] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#9D4EDD] transition-all duration-300 shadow-lg">
            Get Started for Free
          </button>
          <button className="border border-slate-700 text-slate-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all duration-300">
            Download the App
          </button>
        </div>

        {/* Reassurance */}
        <p className="mt-4 text-xs text-slate-400">
          No credit card required • Works on mobile • Learn at your pace
        </p>

        {/* Hero Visuals */}
        <div className="relative max-w-5xl mx-auto mt-20 group">
          {/* Mobile Frame */}
          <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/18.5] bg-slate-800 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-700 animate-in zoom-in-95 duration-1000 transition-transform hover:scale-[1.02] cursor-default">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
            <div className="w-full h-full bg-slate-900 rounded-[2.2rem] overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-[#7C3AED]/20 p-4 rounded-3xl text-[#7C3AED] mb-4 animate-pulse">
                  <Cloud size={60} fill="currentColor" />
                </div>
                <h3 className="text-3xl font-black italic text-white">QuizzyAI</h3>
              </div>
              <div className="absolute top-4 left-6 text-[10px] font-bold text-slate-300">
                9:41
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <FloatingCard className="absolute top-[15%] left-[2%] md:left-[15%] hidden sm:flex" delay={0.2}>
            <StatCard icon={<Users size={16} />} value="500+" label="Active learners" />
          </FloatingCard>

          <FloatingCard className="absolute bottom-[20%] left-[0%] md:left-[8%] hidden lg:flex" delay={0.4}>
            <MessageCard />
          </FloatingCard>

          <FloatingCard className="absolute top-[10%] right-[2%] md:right-[15%] hidden sm:flex" delay={0.3}>
            <GroupStudyCard />
          </FloatingCard>

          <FloatingCard className="absolute bottom-[10%] right-[0%] md:right-[5%] hidden lg:flex" delay={0.5}>
            <InsightsCard />
          </FloatingCard>
        </div>

        {/* Narrative Bridge */}
        <p className="mt-20 text-sm text-slate-400">
          But learning today comes with real challenges…
        </p>
      </div>
    </section>
  );
};

/* ---------- Sub Components ---------- */

const StatCard = ({ icon, value, label }: any) => (
  <div className="p-4 w-40 flex flex-col items-start gap-2 bg-slate-800 text-white rounded-xl">
    <div className="bg-[#7C3AED]/20 p-2 rounded-lg text-[#7C3AED]">
      {icon}
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-xs text-slate-400 font-medium">{label}</div>
  </div>
);

const MessageCard = () => (
  <div className="p-4 w-52 flex flex-col gap-3 bg-slate-800 text-white rounded-xl">
    <div className="text-xs font-semibold text-slate-300">Hi Agbor,</div>
    <p className="text-[10px] text-slate-400 leading-tight">
      What would you like to explore today?
    </p>
    <div className="flex items-center gap-3">
      <img src="https://picsum.photos/40/40?random=1" className="w-8 h-8 rounded-full bg-slate-700" />
      <div className="text-left">
        <div className="text-[10px] font-bold">Agbor Eneke</div>
        <div className="text-[8px] text-slate-400">September 27, 2025</div>
      </div>
    </div>
    <div className="pt-2 border-t border-slate-700 flex items-center gap-1 text-[8px] text-slate-400">
      <MapPin size={10} className="text-[#7C3AED]" /> Bomaka
    </div>
  </div>
);

const GroupStudyCard = () => (
  <div className="p-4 w-44 flex flex-col gap-2 bg-slate-800 text-white rounded-xl">
    <div className="flex justify-between items-center">
      <div className="text-[10px] font-bold">Group Studies</div>
      <Calendar size={12} className="text-slate-400" />
    </div>
    <div className="text-[8px] text-slate-400">11:00 – 01:30</div>
    <div className="flex -space-x-2 mt-2">
      {[1,2,3,4].map(i => (
        <img key={i} src={`https://picsum.photos/32/32?random=${i+10}`} className="w-6 h-6 rounded-full border-2 border-slate-900" />
      ))}
      <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[8px] font-bold text-slate-400">
        +8
      </div>
    </div>
  </div>
);

const InsightsCard = () => (
  <div className="p-5 w-56 flex flex-col gap-4 bg-slate-800 text-white rounded-xl">
    <div className="text-xs font-bold tracking-wide">QuizzyAI Insights</div>
    <div className="space-y-3">
      <HighlightRow label="Avg. Student Rating" value="4.8" total="/5" />
      <HighlightRow label="Daily Quiz Attempts" value="12.4k" icon={<TrendingUp size={10} className="text-green-500 rotate-45" />} />
      <HighlightRow label="Learning Accuracy" value="92" unit="%" icon={<TrendingUp size={10} className="text-[#7C3AED]" />} />
      <HighlightRow label="Weekly Progress Boost" value="+31" unit="%" icon={<TrendingUp size={10} className="text-blue-400" />} />
    </div>
  </div>
);

const HighlightRow = ({ label, value, unit, total, icon }: any) => (
  <div className="flex items-center justify-between text-[10px]">
    <span className="text-slate-400 font-medium">{label}</span>
    <div className="flex items-center gap-1">
      {icon}
      <span className="font-bold text-white">{unit}{value}</span>
      {total && <span className="text-slate-500">{total}</span>}
    </div>
  </div>
);

export default Hero;
