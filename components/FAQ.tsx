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
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900">Frequently asked questions</h3>
          <p className="text-slate-500 mt-2">Answers to common questions about Quizzy and downloads.</p>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-4 mt-6">
          {faqs.map((f, i) => (
            <Reveal key={i} className="">
              <details className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <summary className="font-semibold text-slate-900 cursor-pointer">{f.q}</summary>
                <div className="mt-3 text-slate-500 text-sm">{f.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
