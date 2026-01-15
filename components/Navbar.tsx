import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-4 glass-card border-b border-slate-700 bg-slate-900' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-[#7C3AED] p-1.5 rounded-lg text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Cloud size={20} fill="currentColor" />
          </div>
          <Link to="/">
            <span className="text-xl font-bold tracking-tight text-white">QuizzyAI</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm font-medium text-slate-300 hover:text-[#7C3AED] transition-colors">
            Features
          </Link>
          <Link to="/about" className="text-sm font-medium text-slate-300 hover:text-[#7C3AED] transition-colors">
            About
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-slate-300 hover:text-[#7C3AED] transition-colors">
            Pricing
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className="bg-[#7C3AED] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#9D4EDD] hover:shadow-lg transition-all">
            Get Started
          </Link>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-700 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <Link to="/features" className="text-lg font-medium text-white border-b border-slate-700 pb-2">Features</Link>
          <Link to="/about" className="text-lg font-medium text-white border-b border-slate-700 pb-2">About</Link>
          <Link to="/pricing" className="text-lg font-medium text-white border-b border-slate-700 pb-2">Pricing</Link>
          <div className="flex flex-col gap-3 pt-4">
            <Link to="/" className="w-full py-3 bg-[#7C3AED] text-white rounded-xl font-semibold text-center hover:bg-[#9D4EDD] transition-all">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
