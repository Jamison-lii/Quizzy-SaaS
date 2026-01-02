import React from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Contact us</h3>
            <p className="text-slate-500 mt-2">Have a question or just want to say hi? Drop us a message or email support.</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-600 font-medium">Email</div>
                <a href="mailto:hello@quizzy.ai" className="block mt-2 text-slate-900 font-semibold">hello@quizzy.ai</a>

                <div className="text-sm text-slate-600 font-medium mt-6">Address</div>
                <div className="mt-2 text-slate-500 text-sm">Remote — Based in multiple timezones</div>
              </div>
            </Reveal>

            <Reveal>
              <form className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
                <input className="w-full p-3 border border-slate-100 rounded-md" placeholder="Your name" />
                <input className="w-full p-3 border border-slate-100 rounded-md" placeholder="Your email" />
                <textarea className="w-full p-3 border border-slate-100 rounded-md" placeholder="Message" rows={4} />
                <div className="flex justify-end">
                  <button type="button" className="bg-violet-600 text-white px-4 py-2 rounded-md">Send</button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
