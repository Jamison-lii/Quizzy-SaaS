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
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Courses built for results</h2>
          <p className="text-slate-500 mt-3">A curated library of courses with video lessons, quizzes, and downloadable resources for offline learning.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
          {sampleCourses.map((c, i) => (
            <Reveal key={i} className="">
              <div className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{c.title}</h3>
                  <p className="text-sm text-slate-500 mt-2">{c.desc}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs text-slate-400">{c.lessons} lessons • {c.duration}</div>
                  <button className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm">Download</button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
