import React from 'react';
import Reveal from './Reveal';

const sampleCourses = [
  {
    title: 'Mastering Algebra — Beginner to Pro',
    desc: 'A structured algebra course with quizzes, video lessons, and practice exams.',
    lessons: 24,
    duration: '6h 40m',
  },
  {
    title: 'Intro to Biology',
    desc: 'Concise lessons, interactive quizzes, and downloadable summaries for fast review.',
    lessons: 18,
    duration: '4h 10m',
  },
  {
    title: 'JavaScript Essentials',
    desc: 'Core concepts, hands-on quizzes, and projects for real-world practice.',
    lessons: 32,
    duration: '10h 5m',
  },
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-28 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Courses Built for Results
          </h2>
          <p className="text-slate-400 mt-3">
            A curated library of courses with video lessons, quizzes, and downloadable resources for offline learning.
          </p>
        </Reveal>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
          {sampleCourses.map((course, i) => (
            <Reveal key={i}>
              <div className="p-6 rounded-2xl border border-slate-700 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col justify-between bg-slate-800
                              animate-float hover:scale-105 transform transition-transform duration-500">
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-white">{course.title}</h3>
                  <p className="text-sm md:text-base text-slate-400 mt-3">{course.desc}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs md:text-sm text-slate-500">
                    {course.lessons} lessons • {course.duration}
                  </div>
                  <button className="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white px-5 py-2 rounded-full text-sm md:text-base font-medium
                                     hover:from-[#9D4EDD] hover:to-[#6366F1] transition-all duration-500 animate-gradient">
                    Download
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Courses;
