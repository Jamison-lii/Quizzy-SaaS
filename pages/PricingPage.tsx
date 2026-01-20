import React from 'react';
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
    {
    name: 'Silver',
    price: '3000 FCFA',
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
    {
    name: 'Gold',
    price: '5000 FCFA',
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
    {
    name: 'Plantinum',
    price: '8000 FCFA',
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
  const [selectedPlan, setSelectedPlan] = React.useState<string>('Premium');

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.2 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0714] text-[#F3F1FF] relative overflow-x-hidden">
      <Navbar scrolled={scrolled} />

      {/* Background Patterns / Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-[#7C3AED]/10 animate-bounce-slow pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 rounded-full bg-[#4C1D95]/10 animate-bounce-slow pointer-events-none"></div>

      <main className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4">

          {/* Header */}
          <header className="text-center mb-16 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-[#B9B3D9] max-w-2xl mx-auto">
              Start free. Upgrade only when you’re ready to go further.
            </p>
          </header>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full">
            {plans.map((plan, i) => {
              const selected = selectedPlan === plan.name;

              return (
                <div
                  key={plan.name}
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`reveal relative cursor-pointer rounded-2xl p-8 border transition-all
                    ${selected
                      ? 'bg-[#1C1233] border-[#7C3AED] scale-[1.03] shadow-[0_0_40px_rgba(124,58,237,0.35)] selected'
                      : 'bg-[#140C24] border-[#2A1E4F] hover:-translate-y-2 hover:shadow-xl'
                    }`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {/* Optional decorative pattern */}
                  <div className="absolute inset-0 bg-[url('/images/african-pattern.png')] bg-cover bg-center opacity-5 pointer-events-none rounded-2xl"></div>

                  <div className="relative z-10">
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
                      className={`w-full py-3 rounded-full font-semibold transition-all
                        ${selected
                          ? 'bg-[#7C3AED] hover:bg-[#6D28D9]'
                          : 'bg-[#1C1233] hover:bg-[#2A1E4F]'
                        }`}
                    >
                      {plan.name === 'Free'
                        ? selected ? 'Selected' : 'Get Started'
                        : selected ? 'Continue with Premium' : 'Start Free Trial'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Animations */}
      <style>{`
        .reveal { opacity: 100; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal.animate-in { opacity: 1; transform: translateY(0); }

        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.015); }
          100% { transform: scale(1); }
        }

        .pricing-card, .reveal { animation: breathe 6s ease-in-out infinite; }
        .pricing-card:hover { animation-play-state: paused; }

        .selected { animation: breathe 4s ease-in-out infinite; }

        @keyframes bounce-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default PricingPage;
