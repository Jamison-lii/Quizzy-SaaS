import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TermsPage: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-[#0A2540]">
      <Navbar scrolled={scrolled} />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#0A2540] mb-8">Terms of Service</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 mb-6">
              Last updated: January 1, 2026
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using QuizzyAI, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily use QuizzyAI for personal, non-commercial transitory viewing only.
            </p>

            <h2>User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
            </p>

            <h2>Prohibited Uses</h2>
            <p>
              You may not use our services for any illegal or unauthorized purpose nor may you violate any laws in your jurisdiction.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at legal@quizzyai.com.
            </p>
          </div>
        </div>
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

export default TermsPage;