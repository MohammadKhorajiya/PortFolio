import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Layers, Database, Zap, Cpu, FileCode, Server, ShieldCheck,
  HardDrive, Network, Lock, CheckCircle2, Package, GitBranch, Send,
  FileCheck, FileText, Cloud, Terminal,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  Code2, Layers, Database, Zap, Cpu, FileCode, Server, ShieldCheck,
  HardDrive, Network, Lock, CheckCircle2, Package, GitBranch, Send,
  FileCheck, FileText, Cloud, Terminal,
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-14 text-center"
        >
          <span className="kicker">Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F2F6F3]">
            Skills &amp; <span className="text-gradient">Tooling</span>
          </h2>
          <p className="text-sm text-[#8B9C94] max-w-xl mx-auto">
            The Java backend toolkit I use to design, secure, test and ship production-grade APIs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="glass-card p-7 hover:border-mint/25"
            >
              <div className="flex items-baseline justify-between gap-4 mb-6">
                <h3 className="font-extrabold text-[#F2F6F3] text-lg">{category.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#6E817A] text-right">
                  {category.description}
                </span>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="flex items-center gap-2.5 text-[13px] font-semibold text-[#D5DEDA]">
                          <Icon className={`w-4 h-4 ${skill.primary ? 'text-mint-bright' : 'text-[#6E817A]'}`} />
                          {skill.name}
                          {skill.primary && (
                            <span className="font-mono text-[9px] uppercase tracking-wider text-mint-bright bg-mint/10 border border-mint/25 rounded px-1.5 py-0.5">core</span>
                          )}
                        </span>
                        <span className="font-mono text-[11px] text-[#6E817A]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.1 + idx * 0.05, ease: 'easeOut' }}
                          className={`h-full rounded-full ${skill.primary ? 'bg-gradient-to-r from-mint to-mint-cyan' : 'bg-gradient-to-r from-mint/60 to-mint-teal/60'}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
