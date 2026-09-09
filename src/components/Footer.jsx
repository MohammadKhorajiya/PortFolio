import React from 'react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-8 border-t border-[#E7E0D6] bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 text-center text-xs font-semibold text-[#6B5E55]">
        © 2026 {personal.name}. Built with Precision & Care.
      </div>
    </footer>
  );
}
