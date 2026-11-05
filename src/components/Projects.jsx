import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Boxes } from 'lucide-react';
import { Github } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-14"
        >
          <span className="kicker"><Boxes className="w-3 h-3" /> Selected Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F2F6F3]">
            Backend <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm text-[#8B9C94] max-w-xl">
            Secure, tested and deployed Spring Boot APIs — from AI service integration to async task orchestration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-7 sm:p-8 flex flex-col hover:border-mint/30 hover:bg-white/[0.05] hover:shadow-[0_18px_50px_-18px_rgba(16,185,129,0.25)] group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-extrabold text-[#F2F6F3] group-hover:text-mint-bright transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#F2C464] bg-[#F2C464]/10 border border-[#F2C464]/25 rounded-full px-2 py-0.5">
                        featured
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] font-semibold text-[#9FB6AC]">{project.subtitle}</p>
                </div>
                <span className="font-mono text-[10px] text-[#6E817A] whitespace-nowrap mt-1">{project.period}</span>
              </div>

              <p className="text-[13.5px] text-[#B9C7C0] leading-relaxed mt-4">{project.description}</p>

              <ul className="mt-4 space-y-2 flex-1">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] text-[#8B9C94] leading-relaxed">
                    <span className="font-mono text-mint/70 shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>

              <div className="flex items-center gap-5 pt-6 mt-6 border-t border-white/[0.07]">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-[#D5DEDA] hover:text-mint-bright transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#D5DEDA] hover:text-mint-cyan transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{project.apiDocs || 'Live'}</span>
                  </a>
                )}
                <ArrowUpRight className="w-4 h-4 text-[#3A4A43] ml-auto group-hover:text-mint/60 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
