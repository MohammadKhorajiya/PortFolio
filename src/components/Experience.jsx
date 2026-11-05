import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { timeline, certifications } = portfolioData;

  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16 text-center"
        >
          <span className="kicker">Career Timeline</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-mint/50 via-mint/20 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, idx) => {
              const isExperience = item.type === 'experience';
              const Icon = isExperience ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-[7px] top-1 w-8 h-8 rounded-xl bg-white border border-mint/35 flex items-center justify-center text-mint shadow-[0_4px_14px_-4px_rgba(5,150,105,0.35)]">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="glass-card p-6 sm:p-7 hover:border-mint/30 hover:shadow-lg">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-1">
                      <span className="font-mono text-[11px] text-mint-bright bg-mint/[0.07] border border-mint/20 rounded-full px-3 py-1">
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                      {item.gpa && (
                        <span className="font-mono text-[11px] text-[#B45309]">{item.gpa}</span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-ink mt-2">{item.role}</h3>
                    <p className="text-sm font-semibold text-ink-muted mt-0.5">{item.organization}</p>

                    <ul className="mt-4 space-y-2.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 text-[13.5px] text-ink-soft leading-relaxed">
                          <span className="font-mono text-mint/70 shrink-0">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {item.skills.map((skill) => (
                        <span key={skill} className="chip">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-4 pl-1">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="glass-card p-5 flex items-start gap-4 hover:border-[#B45309]/30 hover:shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-[#B45309]/[0.08] border border-[#B45309]/20 flex items-center justify-center text-[#B45309] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-ink leading-snug">{cert.title}</p>
                  <p className="text-xs text-ink-muted mt-1">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
