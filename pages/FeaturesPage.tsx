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

const features = [
  {
    title: 'AI-Powered Quiz Generation',
    desc: 'Generate intelligent quizzes from documents, text, or topics. Quizzy’s AI creates relevant questions that truly test understanding.',
    icon: Brain,
  },
  {
    title: 'Offline Mode & Downloads',
    desc: 'Download courses and video lessons to learn anytime, anywhere with smooth offline playback.',
    icon: Download,
  },
  {
    title: 'Study Groups & Collaboration',
    desc: 'Create or join study groups, participate in challenges, and learn collaboratively with peers.',
    icon: Users,
  },
  {
    title: 'Personalized Learning Paths',
    desc: 'Adaptive learning paths that focus on your weak areas to help you improve faster.',
    icon: User,
  },
  {
    title: 'Gamification & XP System',
    desc: 'Earn XP, climb leaderboards, and stay motivated through challenges.',
    icon: Trophy,
  },
  {
    title: 'Interactive Video Courses',
    desc: 'High-quality video lessons optimized for streaming and offline learning.',
    icon: PlayCircle,
  },
  {
    title: 'AI-Assisted Book Reader',
    desc: 'Built-in AI explains concepts, defines terms, and answers questions instantly.',
    icon: BookOpen,
  },
  {
    title: 'Unified Authentication',
    desc: 'One account across web and mobile with seamless progress sync.',
    icon: Shield,
  },
];

const FeaturesPage: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 120) setVisible(true);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#E5E7EB] overflow-hidden">
      <Navbar scrolled={scrolled} />

      <main className="pt-32 pb-28">
        <div className="container mx-auto px-6">

          {/* Header */}
          <header className="text-center mb-24 animate-hero">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Powerful Features Built for{' '}
              <span className="text-[#8B5CF6]">Better Learning</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-[#9CA3AF]">
              Everything you need to learn smarter, stay motivated, and achieve real results—powered by AI.
            </p>
          </header>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 120}ms` }}
                className={`
                  group relative bg-[#111827] border border-[#1F2937] rounded-2xl p-6
                  transition-all duration-500
                  hover:-translate-y-2 hover:border-[#8B5CF6]/40
                  shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.35)]
                  ${visible ? 'animate-card' : 'opacity-0'}
                `}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#1F2937] group-hover:bg-[#4C1D95]/40 transition-all animate-icon">
                      <Icon size={28} className="text-[#8B5CF6]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                  </div>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                    {desc}
                  </p>

                  <div className="h-32 rounded-xl bg-[#0B0F1A] border border-[#1F2937] flex items-center justify-center text-xs text-[#6B7280]">
                    Feature Preview
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0F1A] border-t border-[#1F2937] py-16">
        <div className="container mx-auto px-6 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#6B7280]">
              © {new Date().getFullYear()} Quizzy. All rights reserved.
            </p>
            <div className="flex gap-6 text-[#6B7280]">
              <Link to="/privacy" className="hover:text-[#9CA3AF] transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#9CA3AF] transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes hero {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-hero {
          animation: hero 0.9s ease-out forwards;
        }

        @keyframes card {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-card {
          animation: card 0.7s ease-out forwards;
        }

        @keyframes breathe {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .group {
          animation: breathe 6s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .animate-icon {
          animation: iconFloat 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FeaturesPage;