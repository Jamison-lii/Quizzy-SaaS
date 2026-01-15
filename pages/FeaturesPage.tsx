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
    desc: 'Generate intelligent quizzes from documents, text, or topics. Quizzy’s AI creates relevant questions that truly test understanding, not memorization.',
    icon: Brain,
  },
  {
    title: 'Offline Mode & Downloads',
    desc: 'Download courses and video lessons to learn anytime, anywhere. Smart storage management ensures smooth offline playback.',
    icon: Download,
  },
  {
    title: 'Study Groups & Collaboration',
    desc: 'Create or join study groups, participate in challenges, and learn collaboratively with peers through discussions and shared goals.',
    icon: Users,
  },
  {
    title: 'Personalized Learning Paths',
    desc: 'Your learning adapts to you. Quizzy tracks performance and highlights weak areas so you improve faster.',
    icon: User,
  },
  {
    title: 'Gamification & XP System',
    desc: 'Earn XP, climb leaderboards, and stay motivated with challenges designed to make learning engaging and rewarding.',
    icon: Trophy,
  },
  {
    title: 'Interactive Video Courses',
    desc: 'High-quality video lessons optimized for both streaming and offline learning with seamless playback.',
    icon: PlayCircle,
  },
  {
    title: 'AI-Assisted Book Reader',
    desc: 'Read digital books with built-in AI support that explains concepts, defines terms, and answers questions instantly.',
    icon: BookOpen,
  },
  {
    title: 'Unified Authentication',
    desc: 'One account across web and mobile. Your progress stays synced across all your devices automatically.',
    icon: Shield,
  },
];

const FeaturesPage: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#E5E7EB] selection:bg-[#8B5CF6] selection:text-white">
      <Navbar scrolled={scrolled} />

      <main className="pt-32 pb-28">
        <div className="container mx-auto px-6">

          {/* Header */}
          <header className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Powerful Features Built for{' '}
              <span className="text-[#8B5CF6]">Better Learning</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-[#9CA3AF]">
              Everything you need to learn smarter, stay motivated, and achieve
              real results—powered by AI.
            </p>
          </header>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={i}
                className="group bg-[#111827] border border-[#1F2937] rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[#8B5CF6]/40 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#1F2937] group-hover:bg-[#4C1D95]/30 transition">
                    <Icon size={28} className="text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>

                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  {desc}
                </p>

                {/* Media Placeholder */}
                <div className="h-32 rounded-xl bg-[#0B0F1A] border border-[#1F2937] flex items-center justify-center text-xs text-[#6B7280]">
                  Feature Preview
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
    </div>
  );
};

export default FeaturesPage;
