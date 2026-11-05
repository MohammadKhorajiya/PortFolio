import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './components/SocialIcons';
import { portfolioData } from './data/portfolio';

export default function App() {
  const { personal } = portfolioData;

  return (
    <div className="min-h-screen bg-paper text-ink font-sans relative selection:bg-mint/20">
      {/* Soft ambient tints */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-mint/[0.06] blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-52 w-[480px] h-[480px] rounded-full bg-mint-cyan/[0.05] blur-[140px] animate-pulse-glow" />
      </div>

      {/* Fixed left social rail */}
      <div className="fixed left-6 bottom-1/2 translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 items-center">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-white border border-paper-line text-ink-muted hover:text-mint-bright hover:border-mint/40 hover:shadow-md transition-all hover:-translate-y-0.5"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-white border border-paper-line text-ink-muted hover:text-mint-bright hover:border-mint/40 hover:shadow-md transition-all hover:-translate-y-0.5"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="p-2.5 rounded-xl bg-white border border-paper-line text-ink-muted hover:text-mint-bright hover:border-mint/40 hover:shadow-md transition-all hover:-translate-y-0.5"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <div className="w-px h-14 bg-gradient-to-b from-mint/40 to-transparent mt-1" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
