import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { personal, navLinks } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={`flex items-center justify-between gap-6 max-w-4xl w-full sm:w-auto px-5 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B1210]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-mint to-mint-cyan flex items-center justify-center font-mono font-bold text-[13px] text-[#04110B]">
            MK
          </span>
          <span className="font-mono text-sm font-semibold text-[#E8EDEA] hidden sm:block">
            mohammad<span className="text-mint-bright">()</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-1.5 text-[13px] font-semibold rounded-lg transition-colors ${
                  isActive ? 'text-mint-bright' : 'text-[#9FB6AC] hover:text-[#E8EDEA]'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-lg bg-mint/10 border border-mint/20 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personal.resumeUrl}
            download="Mohammad_Khorajiya_Resume.pdf"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-mint text-[#04110B] font-bold text-xs px-4 py-2 hover:bg-mint-bright transition-colors shadow-[0_0_18px_rgba(16,185,129,0.3)]"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#E8EDEA] hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-[72px] left-4 right-4 bg-[#0B1210]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-40"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-[#D5DEDA] hover:bg-mint/10 hover:text-mint-bright font-semibold text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={personal.resumeUrl}
                download="Mohammad_Khorajiya_Resume.pdf"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-mint text-[#04110B] font-bold text-sm px-4 py-3"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
