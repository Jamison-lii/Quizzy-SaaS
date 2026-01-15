import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PrivacyPage: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0714] text-[#F3F1FF]">
      <Navbar scrolled={scrolled} />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

          <p className="text-sm text-[#8B84C7] mb-10">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-10 text-[#B9B3D9] leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, including when
                you create an account, participate in quizzes, download content,
                join study groups, or contact support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                How We Use Your Information
              </h2>
              <p>
                Your information is used to deliver and improve our services,
                personalize learning experiences, process transactions, send
                updates, and ensure platform security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Information Sharing
              </h2>
              <p>
                QuizzyAI does not sell or rent your personal data. We only share
                information with trusted partners when necessary to operate the
                platform or comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Data Security
              </h2>
              <p>
                We use industry-standard security measures, including encryption
                and access controls, to protect your information against
                unauthorized access, disclosure, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Your Rights
              </h2>
              <p>
                You may access, update, or delete your personal information at
                any time through your account settings or by contacting us
                directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or how your data
                is handled, please contact us at{' '}
                <a
                  href="mailto:privacy@quizzyai.com"
                  className="text-[#007AFF] hover:underline"
                >
                  privacy@quizzyai.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-[#0B0714] border-t border-[#2A1E4F] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold mb-3">QuizzyAI</h3>
              <p className="text-sm text-[#B9B3D9]">
                AI-powered quizzes and interactive learning for modern students.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-[#B9B3D9]">
                <li>
                  <Link to="/features" className="hover:text-[#007AFF]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-[#007AFF]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#007AFF]">
                    Download App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-[#B9B3D9]">
                <li>
                  <Link to="/about" className="hover:text-[#007AFF]">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#007AFF]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#007AFF]">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-[#B9B3D9]">
                <li>
                  <a href="#" className="hover:text-[#007AFF]">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#007AFF]">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#007AFF]">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2A1E4F] pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#8B84C7]">
            <span>
              © {new Date().getFullYear()} QuizzyAI. All rights reserved.
            </span>
            <div className="flex gap-4 mt-3 md:mt-0">
              <Link to="/privacy" className="hover:text-[#007AFF]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#007AFF]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;
