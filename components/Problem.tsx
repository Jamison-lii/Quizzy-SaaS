import React from "react";
import { Clock, Brain, SlidersHorizontal, Smartphone } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Too much to study, too little time",
    description:
      "Between school, work, and daily responsibilities, it’s hard to find focused time to revise properly — let alone stay consistent.",
  },
  {
    icon: Brain,
    title: "Studying without retention",
    description:
      "You read, highlight, and repeat — but when exams or quizzes arrive, the information just doesn’t stick.",
  },
  {
    icon: SlidersHorizontal,
    title: "One-size-fits-all learning",
    description:
      "Most learning tools treat everyone the same, ignoring how differently people absorb, revise, and recall information.",
  },
  {
    icon: Smartphone,
    title: "Learning on the go feels frustrating",
    description:
      "You want to revise on your phone, but most platforms feel clunky, overwhelming, or poorly optimized for mobile use.",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/learning.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B0F1A]/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#6B7280] mb-3">
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Learning shouldn’t feel this exhausting
          </h2>
          <p className="text-base text-[#9CA3AF] leading-relaxed">
            Most learners aren’t failing because they lack discipline.
            They’re struggling because the tools they use weren’t designed
            for real schedules, real distractions, and real human behavior.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="border border-[#1F2937] rounded-2xl p-6
                           bg-[#0B0F1A]/80 backdrop-blur-sm
                           hover:border-[#374151] transition-colors"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-[#1F2937] text-[#9CA3AF]">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed pl-11">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bridge to solution */}
        <div className="mt-16 max-w-3xl">
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            When learning feels overwhelming, inconsistent, and impersonal,
            motivation fades fast. That’s exactly the gap Quizzy was built to close.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
