import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0 FCFA',
    period: 'Forever',
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
    price: '2000 FCFA',
    period: 'Per Month',
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

const PricingPage: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0714] text-[#F3F1FF]">
      <Navbar scrolled={scrolled} />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Simple, Transparent Pricing
          </h1>

          <p className="text-lg text-[#B9B3D9] text-center max-w-2xl mx-auto mb-16">
            Start free. Upgrade when you are ready.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border transition-all ${
                  plan.name === 'Premium'
                    ? 'bg-[#1C1233] border-[#7C3AED]'
                    : 'bg-[#140C24] border-[#2A1E4F]'
                }`}
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-1">{plan.price}</div>
                <div className="text-[#B9B3D9] mb-6">{plan.period}</div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.name} className="flex items-center gap-3">
                      {f.included ? (
                        <Check className="text-green-500" size={18} />
                      ) : (
                        <X className="text-[#8B84C7]" size={18} />
                      )}
                      <span className={f.included ? 'text-white' : 'text-[#8B84C7]'}>
                        {f.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    plan.name === 'Premium'
                      ? 'bg-[#007AFF] hover:bg-[#0066D6]'
                      : 'bg-[#1C1233] hover:bg-[#2A1E4F]'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
