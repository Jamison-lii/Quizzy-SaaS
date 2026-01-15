import React from 'react';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'Do I need an account to download?',
    a: 'No — Quizzy is available to download without requiring sign up. Just tap the download button and get started.',
  },
  {
    q: 'Can I use courses offline?',
    a: 'Yes. Download courses and video lessons to access them offline. The app intelligently manages storage and quality.',
  },
  {
    q: 'What platforms are supported?',
    a: 'Quizzy supports web and mobile (iOS and Android). Download the mobile app for the best offline experience.',
  },
  {
    q: 'How does the AI generate quizzes?',
    a: 'Our AI analyzes uploaded text or selected topics to generate varied and relevant question types to test understanding.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <Reveal className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h3>
          <p className="text-slate-400 mt-3 text-lg">
            Answers to the most common questions about Quizzy and its features.
          </p>
        </Reveal>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={i}>
              <details className="group p-6 rounded-2xl bg-slate-800 border border-slate-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                  {f.q}
                  <span className="transition-transform duration-300 group-open:rotate-45 inline-block text-[#7C3AED]">+</span>
                </summary>
                <div className="mt-3 text-slate-400 text-sm">{f.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
