
import React from 'react';
// Fix: Added 'Cloud' to the imported icons from 'lucide-react'
import { Users, Calendar, TrendingUp, MapPin, ArrowRight, Cloud } from 'lucide-react';
import FloatingCard from './FloatingCard';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Perspective Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="perspective-grid absolute inset-0 w-full h-[150%] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007AFF] text-xs font-semibold mb-6 border border-blue-100 animate-bounce">
          <span>AI-Powered Learning Platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0A2540] tracking-tight leading-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Unlock Your Learning<br />Potential with {' '}
          <span className="relative inline-block px-6 py-1 mx-2">
            <span className="absolute inset-0 bg-[#007AFF] rounded-full -rotate-1 skew-x-3"></span>
            <span className="relative text-white z-10">AI</span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
          Personalized quizzes, interactive courses, and a smart study companion. All in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button className="bg-[#007AFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0066D6] transition-all duration-300 shadow-lg">
            Get Started for Free
          </button>
          <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all duration-300">
            Download the App
          </button>
        </div>

        {/* Hero Visuals Section */}
        <div className="relative max-w-5xl mx-auto mt-20 group">
          {/* Mobile Frame */}
          <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/18.5] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 animate-in zoom-in-95 duration-1000 transition-transform hover:scale-[1.02] cursor-default">
             {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
            
            <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <div className="bg-violet-100 p-4 rounded-3xl text-violet-600 mb-4 animate-pulse">
                    <Cloud size={60} fill="currentColor" />
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 italic">QuizzyAI</h3>
              </div>
              <div className="absolute top-4 left-6 text-[10px] font-bold">9:41</div>
            </div>
          </div>

          {/* Floating UI Elements */}
          
          {/* Top Left: 12K Customers */}
          <FloatingCard 
            className="absolute top-[15%] left-[2%] md:left-[15%] hidden sm:flex"
            delay={0.2}
          >
            <div className="p-4 w-40 flex flex-col items-start gap-2">
              <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
                <Users size={16} />
              </div>
              <div className="text-2xl font-bold text-slate-900">500</div>
              <div className="text-xs text-slate-400 font-medium">Users</div>
            </div>
          </FloatingCard>

          {/* Bottom Left: User Card */}
          <FloatingCard 
            className="absolute bottom-[20%] left-[0%] md:left-[8%] hidden lg:flex"
            delay={0.4}
          >
            <div className="p-4 w-52 flex flex-col gap-3">
              <div className="text-xs font-semibold text-slate-500">Hi Agbor,</div>
              <p className="text-[10px] text-slate-400 leading-tight">What would you like to explore today?</p>
              <div className="flex items-center gap-3">
                <img src="https://picsum.photos/40/40?random=1" className="w-8 h-8 rounded-full bg-slate-100" />
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-900">Agbor Eneke</div>
                  <div className="text-[8px] text-slate-400">September 27, 2025</div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-50 flex items-center gap-1 text-[8px] text-slate-400">
                <MapPin size={10} className="text-violet-500" /> Bomaka
              </div>
            </div>
          </FloatingCard>

          {/* Top Right: Sales Meeting */}
          <FloatingCard 
            className="absolute top-[10%] right-[2%] md:right-[15%] hidden sm:flex"
            delay={0.3}
          >
            <div className="p-4 w-44 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="text-[10px] font-bold text-slate-900">Group Studies</div>
                <Calendar size={12} className="text-slate-400" />
              </div>
              <div className="text-[8px] text-slate-400">11:00 - 01:30</div>
              <div className="flex -space-x-2 mt-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/32/32?random=${i+10}`} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                ))}
                <div className="w-6 h-6 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-400">+8</div>
              </div>
            </div>
          </FloatingCard>

        {/* Bottom Right: QuizzyAI Highlights */}
<FloatingCard 
  className="absolute bottom-[10%] right-[0%] md:right-[5%] hidden lg:flex"
  delay={0.5}
>
  <div className="p-5 w-56 flex flex-col gap-4">
    
    {/* Title */}
    <div className="text-xs font-bold text-[#0A2540] tracking-wide">
      QuizzyAI Insights
    </div>

    {/* Stats */}
    <div className="space-y-3">
      <HighlightRow
        label="Avg. Student Rating"
        value="4.8"
        total="/5"
      />

      <HighlightRow
        label="Daily Quiz Attempts"
        value="12.4k"
        icon={
          <TrendingUp
            size={10}
            className="text-green-500 rotate-45"
          />
        }
      />

      <HighlightRow
        label="Learning Accuracy"
        value="92"
        unit="%"
        icon={
          <TrendingUp
            size={10}
            className="text-violet-500"
          />
        }
      />

      <HighlightRow
        label="Weekly Progress Boost"
        value="+31"
        unit="%"
        icon={
          <TrendingUp
            size={10}
            className="text-blue-500"
          />
        }
      />
    </div>
  </div>
</FloatingCard>

        </div>
      </div>
    </section>
  );
};

const HighlightRow = ({ label, value, unit, total, icon }: any) => (
  <div className="flex items-center justify-between text-[10px]">
    <span className="text-slate-400 font-medium">{label}</span>
    <div className="flex items-center gap-1">
      {icon}
      <span className="font-bold text-slate-900">{unit}{value}</span>
      {total && <span className="text-slate-300">{total}</span>}
    </div>
  </div>
);

export default Hero;
