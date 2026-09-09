import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, CheckCircle2 } from 'lucide-react';
import { Github } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
          Featured Works
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2622] tracking-tight">
          Recent Projects & Systems
        </h2>
        <p className="text-base text-[#6B5E55]">
          Handcrafted Java backend applications, RESTful microservices, and AI integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl p-7 border border-[#E7E0D6] shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E7E0D6]">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {project.subtitle}
                </span>
                <span className="text-xs font-mono text-[#6B5E55]">{project.period}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#2D2622] mb-2">{project.title}</h3>
              <p className="text-sm text-[#6B5E55] leading-relaxed mb-6">
                {project.description}
              </p>

              {project.highlights && (
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#2D2622]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#FAF6F0] rounded-full text-xs font-semibold text-[#2D2622] border border-[#E7E0D6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E7E0D6] flex items-center justify-between gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="farhan-btn-primary py-2.5 px-5 text-xs w-full text-center"
              >
                <Github className="w-4 h-4 text-white" />
                <span>Code Repository</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="farhan-btn-secondary py-2.5 px-4 text-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
