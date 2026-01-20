import React, { useState } from "react";

const audiences = [
  {
    title: "Students",
    description:
      "Prepare for exams, revise smarter, and test your understanding with interactive quizzes.",
    image: "/images/students.jpg",
    cta: "Start studying",
    label: "Most active learners",
    bullets: ["Exam prep", "Quick revisions", "Interactive"],
  },
  {
    title: "University & Exam Candidates",
    description:
      "Stay consistent, track your progress, and focus on what truly matters.",
    image: "/images/exam.jpg",
    cta: "Prepare better",
    label: "Highly recommended",
    bullets: ["Track progress", "Focused learning", "Smart scheduling"],
  },
  {
    title: "Professionals",
    description:
      "Upgrade your skills and retain knowledge without disrupting your busy schedule.",
    image: "/images/professionals.webp",
    cta: "Learn on your time",
    label: "Flexible learning",
    bullets: ["Skill upgrade", "Time-efficient", "Practical"],
  },
  {
    title: "Lifelong Learners",
    description:
      "Build knowledge daily, stay curious, and keep improving at your own pace.",
    image: "/images/knowledge.avif",
    cta: "Keep learning",
    label: "Continuous improvement",
    bullets: ["Daily learning", "Curiosity-driven", "Self-paced"],
  },
];

const WhoItsForSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const audience = audiences[current];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % audiences.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? audiences.length - 1 : prev - 1));

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who is Quizzy for?
          </h2>
          <p className="text-base text-[#9CA3AF]">
            Built for different learning needs, one simple experience.
          </p>
        </div>

        {/* Slider */}
        <div className="relative rounded-3xl overflow-hidden border border-[#1F2937]">
          {/* Background image */}
          <div
            className="h-[420px] bg-cover bg-center transition-all duration-500 relative"
            style={{ backgroundImage: `url(${audience.image})` }}
          >
            {/* Overlay */}
            <div className="h-full w-full bg-black/50 flex items-end">
              <div className="p-8 max-w-xl">
                <span className="text-xs bg-[#7C3AED]/20 px-2 py-1 rounded-full mb-2 inline-block">
                  {audience.label}
                </span>
                <h3 className="text-2xl font-semibold mb-3">{audience.title}</h3>
                <p className="text-sm text-[#E5E7EB] mb-4 leading-relaxed">
                  {audience.description}
                </p>
                <ul className="text-xs text-[#A78BFA] mb-6 space-y-1">
                  {audience.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
                <button className="px-6 py-3 rounded-xl font-medium border border-[#1F2937] hover:opacity-90 transition">
                  {audience.cta}
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-[#1F2937] backdrop-blur"
              aria-label="Previous"
            >
              ‹
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-[#1F2937] backdrop-blur"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSlider;
