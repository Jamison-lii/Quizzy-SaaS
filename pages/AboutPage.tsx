import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Target, Eye, Heart, Users } from 'lucide-react';
import Marquee from '@/components/Marquee';
import { TeamCard } from '@/components/TeamCard';

const AboutPage: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen text-[#E5E7EB] selection:bg-[#8B5CF6] selection:text-white relative overflow-x-hidden"
      style={{
        backgroundImage: "url('/images/Landmark.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Global Background Overlay */}
      <div className="absolute inset-0 bg-[#0B0F1A]/85 backdrop-blur-[1px] pointer-events-none z-0" />

      <Navbar scrolled={scrolled} />

      <main className="pt-32 pb-24 relative z-10">

        {/* Decorative Floating Shapes */}
        <div className="absolute top-10 left-0 w-32 h-32 rounded-full bg-[#8B5CF6]/10 animate-bounce-slow pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#4C1D95]/10 animate-bounce-slow pointer-events-none"></div>

        <div className="container mx-auto px-6">

          {/* Header */}
          <header className="text-center mb-20 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-[#8B5CF6]">Quizzy</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[#9CA3AF] text-lg">
              We’re building smarter ways to learn—powered by technology,
              driven by curiosity, and designed for real results, helping learners
              across Yaoundé, Douala, Buea, and beyond.
            </p>
          </header>

          {/* Mission */}
          <section className="reveal relative overflow-hidden mb-12 bg-[#111827] border border-[#1F2937] rounded-2xl p-8 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.25)] transition">
            <div className="absolute inset-0 bg-[url('/images/african-pattern.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <Target className="text-[#8B5CF6] float-icon" size={32} />
                <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
              </div>
              <p className="text-[#9CA3AF] text-lg leading-relaxed">
                To make learning more effective and accessible by delivering
                personalized, AI-powered quiz experiences that help learners
                truly understand and retain knowledge across Cameroon and Africa.
              </p>
            </div>
          </section>

          {/* Vision */}
          <section className="reveal relative overflow-hidden mb-12 bg-[#111827] border border-[#1F2937] rounded-2xl p-8 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.25)] transition">
            <div className="absolute inset-0 bg-[url('/images/african-pattern.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="text-[#8B5CF6] float-icon" size={32} />
                <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
              </div>
              <p className="text-[#9CA3AF] text-lg leading-relaxed">
                A future where education is adaptive, engaging, and available
                to everyone—no matter where they are or how they learn.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="reveal mb-24">
            <div className="flex items-center gap-4 mb-8">
              <Heart className="text-[#8B5CF6] float-icon" size={32} />
              <h2 className="text-2xl font-semibold text-white">Our Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Users, title: 'Accessibility', text: 'Removing barriers so quality education is available to everyone across Cameroon.' },
                { icon: Target, title: 'Innovation', text: 'Continuously improving how people learn through smart technology.' },
                { icon: Heart, title: 'Community', text: 'Building learning experiences that connect and inspire learners.' },
                { icon: Eye, title: 'Excellence', text: 'Delivering meaningful outcomes, not just features.' },
              ].map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  className="reveal heartbeat-box bg-[#111827] border border-[#1F2937] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)]"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="text-[#8B5CF6] mt-1 float-icon" size={22} />
                    <div>
                      <h3 className="font-semibold mb-1 text-white">{title}</h3>
                      <p className="text-[#9CA3AF] text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent my-12"></div>

          {/* Team */}
          <section className="reveal mb-24">
            <h2 className="text-2xl font-semibold text-center mb-10 text-white">
              Our Team
            </h2>
            <Marquee>
              <TeamCard name="Jane Doe" role="CEO & Founder" />
              <TeamCard name="John Smith" role="CTO" />
              <TeamCard name="Alice Johnson" role="Head of Education" />
              <TeamCard name="Michael Brown" role="Product Lead" />
            </Marquee>
          </section>

          {/* Interns */}
          <section className="reveal mb-24">
            <h2 className="text-2xl font-semibold text-center mb-10 text-white">
              Our Interns
            </h2>
            <Marquee reverse>
              <TeamCard name="Jamison Lii" role="Fullstack Intern" />
              <TeamCard name="Abongwa Caleb" role="Fullstack Intern" />
              <TeamCard name="Lum Blessing" role="UI/UX Intern" />
              <TeamCard name="Doschime Anne" role="Data Science Intern" />
              <TeamCard name="Agbor Emmanuel" role="Frontend Intern" />
              <TeamCard name="Nganyu Brandon" role="Frontend Intern" />
              <TeamCard name="Gilles Bryton" role="ML Intern" />
              <TeamCard name="Unku Stephen" role="Frontend Intern" />
              <TeamCard name="Kambi Marcbryan" role="DevOps Intern" />
            </Marquee>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0F1A]/90 border-t border-[#1F2937] py-16 relative z-10">
        <div className="container mx-auto px-6 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#6B7280]">© {new Date().getFullYear()} Quizzy. All rights reserved.</p>
          <div className="flex gap-6 text-[#6B7280]">
            <Link to="/privacy" className="hover:text-[#9CA3AF] transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#9CA3AF] transition">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        .reveal { opacity: 100; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal.animate-in { opacity: 1; transform: translateY(0); }

        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .float-icon { animation: float 4s ease-in-out infinite; }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.015); }
          28% { transform: scale(1); }
          42% { transform: scale(1.015); }
          70% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        .heartbeat-box { animation: heartbeat 5.5s ease-in-out infinite; }
        .heartbeat-box:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default AboutPage;
