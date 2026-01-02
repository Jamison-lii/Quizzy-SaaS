
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="download" className="py-24 text-center bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Ready to start learning?</h3>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto">Join thousands of learners already using QuizzyAI to achieve their goals.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="bg-[#007AFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0066D6] transition-all duration-300 shadow-lg text-center">
            Sign Up for Free
          </a>
          <a href="#" className="border border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all duration-300 text-center">
            Download the App
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
