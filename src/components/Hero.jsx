import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left column */}
        <div className="lg:col-span-6 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-mint/[0.08] border border-mint/25 text-mint-bright text-xs font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-bright opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
            </span>
            {personal.availability}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.05] text-[#F2F6F3]">
              Mohammad <span className="text-gradient">Khorajiya</span>
            </h1>
            <p className="font-mono text-base sm:text-lg text-[#9FB6AC] mt-4">
              <span className="text-mint-bright">&gt;</span> {personal.role}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#B9C7C0] max-w-xl leading-relaxed"
          >
            {personal.headline} Built on Spring Security, JWT &amp; RBAC, backed by MongoDB and Redis, and shipped with 90%+ automated test coverage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={personal.resumeUrl}
              download="Mohammad_Khorajiya_Resume.pdf"
              className="btn-outline"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-xl"
          >
            {personal.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-mint/40 pl-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#6E817A]">{stat.label}</div>
                <div className="text-[13px] font-bold text-[#E8EDEA] mt-0.5">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — API terminal visual */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative w-full max-w-lg"
          >
            {/* Floating tech chips */}
            <div className="absolute -top-5 -left-3 sm:-left-8 chip !bg-[#0B1210] animate-float shadow-lg z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-mint" /> Spring Boot
            </div>
            <div className="absolute -bottom-5 right-2 sm:right-6 chip !bg-[#0B1210] animate-float shadow-lg z-10" style={{ animationDelay: '1.4s' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-mint-cyan" /> JWT · RBAC
            </div>
            <div className="absolute top-1/2 -right-2 sm:-right-8 chip !bg-[#0B1210] animate-float shadow-lg z-10 hidden sm:flex" style={{ animationDelay: '2.2s' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-mint-teal" /> Redis Cache
            </div>

            {/* Terminal window */}
            <div className="glass-card !bg-[#0B1210]/95 rounded-2xl overflow-hidden shadow-[0_24px_70px_-20px_rgba(0,0,0,0.7)] border-white/[0.09]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 font-mono text-[11px] text-[#6E817A]">mohammad@backend — REST API</span>
              </div>
              <div className="p-5 font-mono text-[12.5px] leading-relaxed text-[#B9C7C0]">
                <p>
                  <span className="text-mint-bright">$</span> curl -s https://journalapp.onrender.com/api/health
                </p>
                <p className="mt-3 text-[#6E817A]">{'{'}</p>
                <p className="pl-4"><span className="text-mint-cyan">"status"</span>: <span className="text-[#8EF0B4]">"UP"</span>,</p>
                <p className="pl-4"><span className="text-mint-cyan">"auth"</span>: <span className="text-[#8EF0B4]">"JWT + RBAC"</span>,</p>
                <p className="pl-4"><span className="text-mint-cyan">"storage"</span>: <span className="text-[#8EF0B4]">"MongoDB"</span>,</p>
                <p className="pl-4"><span className="text-mint-cyan">"cache"</span>: <span className="text-[#8EF0B4]">"Redis"</span>,</p>
                <p className="pl-4"><span className="text-mint-cyan">"test_coverage"</span>: <span className="text-[#F2C464]">"90%+"</span></p>
                <p className="text-[#6E817A]">{'}'}</p>
                <p className="mt-3">
                  <span className="text-mint-bright">$</span> <span className="inline-block w-2.5 h-4 bg-mint/70 animate-blink align-middle" />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-8 flex-col items-center gap-1 text-[#6E817A] hover:text-mint-bright transition-colors"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        <ChevronDown className="w-4 h-4 animate-float" />
      </motion.a>
    </section>
  );
}
