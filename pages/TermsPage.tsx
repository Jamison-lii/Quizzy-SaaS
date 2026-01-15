import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TermsPage: React.FC = () => {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>

          <p className="text-sm text-[#8B84C7] mb-10">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-10 text-[#B9B3D9] leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using QuizzyAI, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you
                do not agree with any part of these terms, you may not use the
                platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Use of the Service
              </h2>
              <p>
                QuizzyAI grants you a limited, non-exclusive, non-transferable
                license to use the platform for personal, educational, and
                non-commercial purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                User Responsibilities
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under
                your account. You agree to provide accurate and complete
                information at all times.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Prohibited Activities
              </h2>
              <p>
                You may not use QuizzyAI to violate any laws, infringe on
                intellectual property rights, distribute harmful content,
                attempt unauthorized access, or misuse AI-generated content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Account Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your account at our
                sole discretion, without notice, if you violate these terms or
                engage in behavior that harms the platform or other users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Limitation of Liability
              </h2>
              <p>
                QuizzyAI shall not be liable for any indirect, incidental,
                special, or consequential damages arising from your use of the
                platform or inability to access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms of Service from time to time. Continued
                use of QuizzyAI after changes take effect constitutes your
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                Contact Information
              </h2>
              <p>
                If you have questions about these Terms, please contact us at{' '}
                <a
                  href="mailto:legal@quizzyai.com"
                  className="text-[#007AFF] hover:underline"
                >
                  legal@quizzyai.com
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

export default TermsPage;
