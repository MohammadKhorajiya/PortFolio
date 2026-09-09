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

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`;

  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#2D2622] font-sans relative selection:bg-[#2D2622]/10 selection:text-[#2D2622]">
      {/* Fixed Left Social Sidebar */}
      <div className="fixed left-6 bottom-1/2 translate-y-1/2 z-40 hidden lg:flex flex-col gap-5 items-center">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/90 border border-[#E7E0D6] text-[#2D2622] hover:bg-[#2D2622] hover:text-white transition-all shadow-sm hover:scale-110"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/90 border border-[#E7E0D6] text-[#2D2622] hover:bg-[#2D2622] hover:text-white transition-all shadow-sm hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/90 border border-[#E7E0D6] text-[#2D2622] hover:bg-[#2D2622] hover:text-white transition-all shadow-sm hover:scale-110"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <div className="w-[1px] h-12 bg-[#D9CFC4] mt-2" />
      </div>

      {/* Main Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
