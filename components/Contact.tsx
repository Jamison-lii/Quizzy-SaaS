import React from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Contact Us
            </h3>
            <p className="text-slate-400 mt-3">
              Have a question or just want to say hi? Drop us a message or email support.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Reveal>
              <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-sm text-slate-400 font-medium">Email</div>
                <a 
                  href="mailto:hello@quizzy.ai" 
                  className="block mt-2 text-white font-semibold hover:text-[#7C3AED] transition-colors"
                >
                  hello@quizzy.ai
                </a>

                <div className="text-sm text-slate-400 font-medium mt-8">Address</div>
                <div className="mt-2 text-slate-300 text-sm">
                  Remote — Based in multiple timezones
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal>
              <form className="p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow space-y-4">
                <input 
                  className="w-full p-4 border border-slate-600 rounded-lg bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                  placeholder="Your name" 
                />
                <input 
                  className="w-full p-4 border border-slate-600 rounded-lg bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                  placeholder="Your email" 
                />
                <textarea 
                  className="w-full p-4 border border-slate-600 rounded-lg bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                  placeholder="Message" 
                  rows={5} 
                />
                <div className="flex justify-end">
                  <button 
                    type="button" 
                    className="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white px-6 py-3 rounded-full font-medium hover:from-[#9D4EDD] hover:to-[#6366F1] transition-colors"
                  >
                    Send Message
                  </button>
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
