import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Code2, Server, Database, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { personal } = portfolioData;

  const coreSkills = [
    { name: 'JAVA', icon: Code2 },
    { name: 'SPRING BOOT', icon: Server },
    { name: 'MONGODB', icon: Database },
    { name: 'REDIS', icon: Zap },
  ];

  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Dark Card (Exact Farhan Kureshi About Card) */}
        <div className="lg:col-span-5 flex">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#2B2420] rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Accent Spotlights */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="w-full h-64 bg-[#1E1815] rounded-2xl flex flex-col items-center justify-center border border-white/10 p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-3xl font-extrabold text-[#2B2420] shadow-lg mb-4">
                  MK
                </div>
                <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 rounded-full">
                  Full-Stack Ready
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">{personal.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FBBF24] mt-1.5 font-mono">
                  JAVA FULL-STACK DEVELOPER
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 relative z-10">
              <p className="text-xs text-gray-300 font-mono">
                {personal.location} • {personal.phone}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Details Column (Bright White Card with Accent Colors) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5DDD2] shadow-xl space-y-6 relative"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6B5E55] bg-[#F7F2EB] px-3.5 py-1.5 rounded-full w-fit">
              <Terminal className="w-3.5 h-3.5 text-emerald-600" />
              <span>Beyond The Code</span>
            </div>

            {/* Quote Block with Bright Crimson Left Line */}
            <div className="border-l-4 border-[#F43F5E] pl-4 py-1">
              <p className="text-lg font-bold text-[#2D2622] italic leading-snug">
                "Great software isn't just written; it's engineered with precision, fueled by coffee, and designed for infinite scale."
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-base text-[#5C524A] leading-relaxed font-medium">
              I don't just write scripts; I architect digital experiences. My approach blends cutting-edge Java backends with Spring Security, MongoDB, and Redis to build future-proof applications.
            </p>

            {/* Skill Circle Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {coreSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#FAF6F0] border border-[#E5DDD2] group hover:border-[#2D2622] transition-all"
                  >
                    <div className="w-13 h-13 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shadow-sm text-[#F43F5E] group-hover:scale-110 transition-transform mb-2">
                      <IconComponent className="w-6 h-6 text-[#F43F5E]" />
                    </div>
                    <span className="text-xs font-extrabold text-[#2D2622] tracking-wider">{skill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <a
                href={personal.resumeUrl}
                download="Mohammad_Khorajiya_Resume.pdf"
                className="w-full farhan-btn-primary py-4 shadow-lg text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Complete CV</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
