import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="download" className="py-28 text-center bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to start learning?
        </h3>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg">
          Join thousands of learners already using QuizzyAI to achieve their goals and boost retention.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Sign Up Button */}
          <a
            href="#"
            className="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-[#9D4EDD] hover:to-[#6366F1] transition-all duration-300 shadow-lg"
          >
            Sign Up for Free
          </a>

          {/* Download Button */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 border border-slate-700 text-slate-300 px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all duration-300"
          >
            Download the App
            <ArrowRight size={20} className="text-slate-300" />
          </a>
        </div>

        {/* Micro-copy below buttons */}
        <p className="text-xs text-slate-500 mt-6 max-w-sm mx-auto">
          No credit card required • Instant access • Trusted by learners worldwide
        </p>
      </div>
    </section>
  );
};

export default CTASection;
