import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0 FCFA',
    period: 'forever',
    features: [
      { name: 'Basic AI Quizzes', included: true },
      { name: 'Limited Offline Access', included: true },
      { name: 'Study Groups (up to 3)', included: true },
      { name: 'Personalized Learning Paths', included: false },
      { name: 'Advanced Analytics', included: false },
      { name: 'Priority Support', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '2000 FCFA',
    period: 'per month',
    features: [
      { name: 'Unlimited AI Quizzes', included: true },
      { name: 'Full Offline Access', included: true },
      { name: 'Unlimited Study Groups', included: true },
      { name: 'Personalized Learning Paths', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Priority Support', included: true },
    ],
  },
];

const faqs = [
  {
    question: 'How does billing work?',
    answer: 'Billing is monthly and automatically renews. You can cancel anytime from your account settings.',
  },
  {
    question: 'Can I change plans?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'The Free plan allows you to try basic features. For Premium features, we offer a 7-day free trial.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and mobile payment options.',
  },
];

const PricingPage: React.FC = () => {
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0A2540] text-center mb-4">Choose Your Plan</h1>
          <p className="text-lg text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Select the perfect plan for your learning journey. Upgrade or downgrade anytime.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {plans.map((plan, i) => (
                <div key={i} className={`rounded-2xl p-8 border-2 ${plan.name === 'Premium' ? 'border-violet-600 bg-violet-50' : 'border-slate-200 bg-white'}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#0A2540] mb-1">{plan.price}</div>
                  <div className="text-slate-500 mb-6">{plan.period}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check size={20} className="text-green-500" />
                        ) : (
                          <X size={20} className="text-slate-400" />
                        )}
                        <span className={feature.included ? 'text-slate-900' : 'text-slate-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                    plan.name === 'Premium'
                      ? 'bg-[#007AFF] text-white hover:bg-[#0066D6]'
                      : 'bg-slate-100 text-[#0A2540] hover:bg-slate-200'
                  }`}>
                    {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-slate-100 pb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-500">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
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

export default PricingPage;