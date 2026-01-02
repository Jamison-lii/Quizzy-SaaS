import React from 'react';
import { Star } from 'lucide-react';
const testimonials = [
  {
    name: 'Ngala Promise',
    role: 'Computer Science Student, University of Buea',
    quote:
      "QuizzyAI's AI quizzes helped me understand difficult concepts much faster. The personalized questions really improved my confidence before exams.",
    avatar: 'https://picsum.photos/64/64?random=21',
  },
  {
    name: 'Dr. Tchouamo Alain',
    role: 'Lecturer, University of Douala',
    quote:
      "As a lecturer, I appreciate how QuizzyAI adapts to different learning speeds. It has become a valuable support tool for my students.",
    avatar: 'https://picsum.photos/64/64?random=33',
  },
  {
    name: 'Mbarga Stephanie',
    role: 'High School Teacher, Yaoundé',
    quote:
      'The study and practice features have made learning more engaging for my students. They are more active and motivated than before.',
    avatar: 'https://picsum.photos/64/64?random=12',
  },
];


const Testimonials: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] text-center mb-8">What students and educators say</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-slate-100" />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-4">“{t.quote}”</p>
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={14} className="text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
