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
    <div className="min-h-screen selection:bg-blue-100 selection:text-[#0A2540]">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Courses />
        <TrustedBy />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTASection />
      </main>
      <footer className="bg-slate-50 border-t border-slate-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#007AFF] p-1.5 rounded-lg text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-[#0A2540]">QuizzyAI</span>
              </div>
              <p className="text-slate-500 text-sm">
                Unlock your learning potential with AI-powered quizzes and interactive courses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#0A2540] mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/features" className="hover:text-[#007AFF] transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-[#007AFF] transition-colors">Pricing</Link></li>
                <li><a href="#" className="hover:text-[#007AFF] transition-colors">Download App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#0A2540] mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/about" className="hover:text-[#007AFF] transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-[#007AFF] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#007AFF] transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#0A2540] mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#007AFF] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#007AFF] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#007AFF] transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} QuizzyAI Inc. All rights reserved. Built with love for modern learners.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;