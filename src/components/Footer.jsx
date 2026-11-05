import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="font-mono text-[11px] text-[#6E817A]">
            <span className="text-mint-bright">$</span> echo "© 2026 {personal.name} — {personal.role}"
          </p>
          <p className="font-mono text-[10px] text-[#4A5852] mt-1.5">
            Built with React, Tailwind CSS &amp; Framer Motion · Deployed on Vercel
          </p>
        </div>
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#9FB6AC] hover:text-mint-bright transition-colors border border-white/10 hover:border-mint/40 rounded-lg px-4 py-2"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
