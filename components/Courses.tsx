import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

const sampleCourses = [
  {
    title: 'Mastering Algebra — Beginner to Pro',
    desc: 'A structured algebra course with quizzes, video lessons, and practice exams.',
    lessons: 24,
    duration: '6h 40m',
    image: '/images/algebra.webp',
  },
  {
    title: 'Intro to Biology',
    desc: 'Concise lessons, interactive quizzes, and downloadable summaries for fast review.',
    lessons: 18,
    duration: '4h 10m',
    image: '/images/Biology.webp',
  },
  {
    title: 'JavaScript Essentials',
    desc: 'Core concepts, hands-on quizzes, and projects for real-world practice.',
    lessons: 32,
    duration: '10h 5m',
    image: '/images/jse.webp',
  },
];

/* Background images */
const bgImages = [
  '/images/courses.jfif',
  '/images/Course.png',
];

const Courses: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="courses" className="relative py-28 overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-10">
        {bgImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              <div
                className="group rounded-2xl border border-slate-700 bg-slate-800/90 shadow-md
                           hover:shadow-xl transition-all h-full flex flex-col overflow-hidden
                           animate-float hover:scale-105"
              >
                {/* Course Image */}
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-white">
                      {course.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 mt-3">
                      {course.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-xs md:text-sm text-slate-400">
                      {course.lessons} lessons • {course.duration}
                    </div>
                    <button
                      className="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white px-5 py-2
                                 rounded-full text-sm font-medium
                                 hover:from-[#9D4EDD] hover:to-[#6366F1]
                                 transition-all animate-gradient"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Animations */}
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
