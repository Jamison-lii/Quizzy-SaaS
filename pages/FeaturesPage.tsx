import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Brain, Download, Users, BookOpen, Trophy, PlayCircle, Shield, User } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Quiz Generation',
    desc: 'Our core feature. Users can generate quizzes from various sources, including uploaded documents, text, or topics. The AI creates relevant questions and answers to test understanding.',
    icon: <Brain size={32} className="text-[#007AFF]" />,
  },
  {
    title: 'Offline Mode & Downloads',
    desc: 'Users can download courses and video lessons to their mobile devices for offline access, allowing them to learn anytime, anywhere, without an internet connection. The app intelligently manages storage and download quality.',
    icon: <Download size={32} className="text-[#007AFF]" />,
  },
  {
    title: 'Study Groups & Collaborative Learning',
    desc: 'Users can create or join study groups to collaborate with peers. Groups can have their own challenges and discussion forums.',
    icon: <Users size={32} className="text-[#007AFF]" />,
  },
  {
    title: 'Personalized Learning Paths',
    desc: 'The platform tracks user performance and suggests areas for improvement. The gamification algorithm adapts to the user\'s learning pace and style.',
    icon: <User size={32} className="text-[#007AFF]" />,
  },
  {
    title: 'Gamification and XP System',
    desc: 'To keep learners motivated, we have a unified Experience Points (XP) system. Users earn XP for completing lessons, quizzes, and challenges. A leaderboard fosters friendly competition.',
    icon: <Trophy size={32} className="text-[#007AFF]" />,
  },
  {
    title: 'Interactive Video Courses',
    desc: 'High-quality video lessons are a key part of our courses. The video player is optimized for both streaming and offline playback.',
    icon: <PlayCircle size={32} className="text-[#007AFF]" />,
  },
  {
    title: 'Book Reader with AI Assistance',
    desc: 'An integrated e-reader for digital books. The AI assistant can help define terms, explain concepts, and answer questions related to the book\'s content.',
    icon: <BookOpen size={32} className="text-[#007AFF]" />,
  },
  {
    title: 'Unified Authentication',
    desc: 'A single account gives users access to both the web and mobile applications, with progress synced across devices.',
    icon: <Shield size={32} className="text-[#007AFF]" />,
  },
];

const FeaturesPage: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-[#0A2540] text-center mb-12">QuizzyAI Features</h1>
          <p className="text-lg text-slate-500 text-center mb-16 max-w-2xl mx-auto">
            Discover the powerful features that make QuizzyAI the ultimate learning companion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-violet-50 rounded-lg">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-500">{feature.desc}</p>
                {/* Placeholder for screenshot/video */}
                <div className="mt-4 h-32 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                  Screenshot/Video Placeholder
                </div>
              </div>
            ))}
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

export default FeaturesPage;