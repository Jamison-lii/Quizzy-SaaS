import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CTASection from '../components/CTASection';
import Problem from '../components/Problem';
import WhoItsForSlider from '@/components/WhoItsForSlider';

const Home: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#E5E7EB] selection:bg-[#2563EB] selection:text-white">
      <Navbar scrolled={scrolled} />

      <main className="overflow-hidden">
        <Hero />

        <div className="h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent my-0" />

        <Problem />
        <Features />
        <HowItWorks />
        <WhoItsForSlider />

        <div className="h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent my-0" />

        {/* TrustedBy with fade-in animation */}
        <div className=" opacity-0 animate-fadeIn scroll-animate">
          <p className="text-center text-slate-400 mb-6 max-w-xl mx-auto text-sm">
            Companies and institutions trust QuizzyAI to improve learning outcomes.
          </p>
          <TrustedBy />
        </div>

        {/* Testimonials with fade-in */}
        <div className=" opacity-0 animate-fadeIn scroll-animate">
          <Testimonials />
        </div>

        {/* Courses with context line and fade-in */}
        <div className=" opacity-0 animate-fadeIn scroll-animate">
          <Courses />
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent my-0" />

        {/* FAQ and Contact with fade-in */}
        <div className=" opacity-0 animate-fadeIn scroll-animate">
          <FAQ />
        </div>

        <div className=" opacity-0 animate-fadeIn scroll-animate">
          <Contact />
        </div>

        {/* Optional secondary CTA mid-page */}
        <div className=" text-center opacity-0 animate-fadeIn scroll-animate">
          <Link
            to="#download"
            className="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white px-8 py-3 rounded-full font-semibold hover:from-[#9D4EDD] hover:to-[#6366F1] transition-all duration-300 shadow-lg"
          >
            Start Learning Today
          </Link>
        </div>

        {/* Main CTA */}
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0F1A] border-t border-[#1F2937] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-[#4C1D95] to-[#2563EB] p-2 rounded-xl text-white">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight">Quizzy</span>
              </div>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Quizzy helps you learn faster and remember longer through smart,
                interactive quizzes built for modern learners.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li>
                  <Link to="/features" className="hover:text-[#8B5CF6] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-[#8B5CF6] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                    Download App
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li>
                  <Link to="/about" className="hover:text-[#8B5CF6] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li>
                  <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1F2937] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#6B7280]">
              © {new Date().getFullYear()} Quizzy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-[#6B7280]">
              <Link to="/privacy" className="hover:text-[#9CA3AF] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#9CA3AF] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>
        {`
          .scroll-animate {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s ease-out;
          }
          .scroll-animate.visible {
            opacity: 1;
            transform: translateY(0);
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s forwards;
          }
        `}
      </style>
      <script>
        {`
          const elements = document.querySelectorAll('.scroll-animate');
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, { threshold: 0.1 });
          elements.forEach(el => observer.observe(el));
        `}
      </script>
    </div>
  );
};

export default Home;
