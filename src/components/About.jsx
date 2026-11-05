import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Server, Zap, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { personal } = portfolioData;
  const paragraphs = personal.about.split('\n\n');

  const focus = [
    { icon: Server, label: 'Secure REST APIs', desc: 'Spring Boot + Spring Security with stateless JWT and role-based authorization.' },
    { icon: Database, label: 'Data & Caching', desc: 'MongoDB indexing and aggregation, Redis cache layers for low-latency responses.' },
    { icon: Zap, label: 'Async & Resilient', desc: 'Thread-safe synchronization, @Async processing, WebClient retry & rate limiting.' },
    { icon: ShieldCheck, label: 'Quality First', desc: 'JUnit 5 and Mockito suites, SonarQube analysis, Swagger-documented endpoints.' },
  ];

  return (
    <section id="about" className="py-24 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-14"
        >
          <span className="kicker"><ArrowUpRight className="w-3 h-3" /> About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F2F6F3]">
            Backend engineer focused on <span className="text-gradient">security &amp; scale</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {paragraphs.map((text, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-[#B9C7C0]">
                {text}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="chip">{personal.location}</span>
              <span className="chip">{personal.role}</span>
              <span className="chip">BCA · HNGU</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focus.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass-card p-5 hover:border-mint/30 hover:bg-white/[0.05] group">
                <div className="w-10 h-10 rounded-xl bg-mint/10 border border-mint/25 flex items-center justify-center text-mint-bright mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#E8EDEA] text-sm">{label}</h3>
                <p className="text-xs text-[#8B9C94] mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
