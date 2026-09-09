import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-[85vh] pt-28 pb-16 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        {/* Left Text Content Column (Exact Farhan Kureshi Spacing & Typography) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E5DDD2] shadow-sm text-xs font-semibold text-[#2D2622]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Freelance</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#2D2622] tracking-tight leading-[1.08]">
              Hi, I'm Mohammad <br />
              Khorajiya,
            </h1>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#B49378] tracking-tight pt-1">
              Java Full-Stack Developer
            </h2>
          </motion.div>

          {/* Description Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#5C524A] max-w-xl leading-relaxed pt-1 font-medium"
          >
            I build fast, scalable applications using Java, Spring Boot, React.js, and MongoDB.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a href="#projects" className="farhan-btn-primary shadow-md hover:scale-105 transition-transform">
              <span>View My Work</span>
            </a>
            <a href="#contact" className="farhan-btn-secondary hover:scale-105 transition-transform">
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Download Resume Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-1"
          >
            <a
              href={personal.resumeUrl}
              download="Mohammad_Khorajiya_Resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2D2622] hover:text-emerald-600 transition-colors"
            >
              <Download className="w-4 h-4 text-[#2D2622]" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Developer Illustration (Seamless Image directly on background like Farhan Kureshi) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-xl flex justify-center"
          >
            <img
              src="/farhan_hero_avatar.png"
              alt="Mohammad Khorajiya - Java Full-Stack Developer"
              className="w-full max-w-lg object-contain mix-blend-multiply drop-shadow-sm hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
