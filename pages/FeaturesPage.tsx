import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  Brain,
  Download,
  Users,
  BookOpen,
  Trophy,
  PlayCircle,
  Shield,
  User,
} from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '@/components/CTASection';

const features = [
  {
    title: 'AI-Powered Quiz Generation',
    desc: 'Generate intelligent quizzes from documents, text, or topics. Perfect for learners.',
    icon: Brain,
    image: '/images/phone.webp',
  },
  {
    title: 'Offline Mode & Downloads',
    desc: 'Download courses and video lessons to learn anytime, even with limited internet.',
    icon: Download,
    image: '/images/phone.webp',
  },
  {
    title: 'Study Groups & Collaboration',
    desc: 'Join students across Cameroon in collaborative challenges and group learning.',
    icon: Users,
    image: '/images/phone.webp',
  },
  {
    title: 'Personalized Learning Paths',
    desc: 'Adaptive paths that focus on weak areas to help learners improve faster.',
    icon: User,
    image: '/images/phone.webp',
  },
  {
    title: 'Gamification & XP System',
    desc: 'Earn XP, climb leaderboards, and stay motivated with fun challenges.',
    icon: Trophy,
    image: '/images/phone.webp',
  },
  {
    title: 'Interactive Video Courses',
    desc: 'High-quality video lessons optimized for streaming and offline learning.',
    icon: PlayCircle,
    image: '/images/phone.webp',
  },
  {
    title: 'AI-Assisted Book Reader',
    desc: 'Built-in AI explains concepts, defines terms, and answers questions instantly.',
    icon: BookOpen,
    image: '/images/phone.webp',
  },
  {
    title: 'Unified Authentication',
    desc: 'One account across web and mobile with seamless progress sync.',
    icon: Shield,
    image: '/images/phone.webp',
  },
];

const FeaturesPage: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#E5E7EB] overflow-hidden relative">
      {/* Navbar */}
      <Navbar scrolled={scrolled} />

      {/* Hero Section */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: "url('/images/knowledge.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-hero">
            Powerful Features Built for{' '}
            <span className="text-[#7C3AED]">Learners</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#9CA3AF]">
            Everything you need to learn smarter, stay motivated, and achieve real results—powered by AI.
          </p>
        </div>
      </section>

      {/* Features Slider */}
      <section className="py-28 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto gap-6 scrollbar-hide py-6">
            {features.map(({ title, desc, icon: Icon, image }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex-shrink-0 w-80 relative group bg-[#111827] border border-[#1F2937] rounded-2xl p-6
                           transition-all duration-500 hover:-translate-y-2 hover:border-[#FFB500]/50
                           shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(255,181,0,0.35)]"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4F46E5]/10 via-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#1F2937] group-hover:bg-[#4F46E5]/40 transition-all animate-icon">
                      <Icon size={28} className="text-[#7C3AED]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">{desc}</p>

                  {/* Image */}
                  <div className="h-36 rounded-xl border border-[#7C3AED] flex items-center justify-center bg-[#0B0F1A] overflow-hidden">
                    {image ? (
                      <img src={image} alt={title} className="object-contain h-full w-full" />
                    ) : (
                      <span className="text-xs text-[#6B7280]">Feature Preview</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Footer */}
      <footer className="bg-[#0B0F1A] border-t border-[#1F2937] py-16">
        <div className="container mx-auto px-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280]">© {new Date().getFullYear()} Quizzy. All rights reserved.</p>
          <div className="flex gap-6 text-[#6B7280]">
            <Link to="/privacy" className="hover:text-[#9CA3AF] transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#9CA3AF] transition">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes hero {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero { animation: hero 0.9s ease-out forwards; }

        @keyframes breathe {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .group { animation: breathe 6s ease-in-out infinite; }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-icon { animation: iconFloat 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default FeaturesPage;
