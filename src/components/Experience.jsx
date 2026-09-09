import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { timeline } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
          My Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2622] tracking-tight">
          Experience & Education
        </h2>
        <p className="text-base text-[#6B5E55]">
          A timeline of my professional growth, internship work, and academic degree.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl p-8 border border-[#E7E0D6] shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F7F2EB] border border-[#E7E0D6] flex items-center justify-center text-[#2D2622]">
                  {item.type === 'experience' ? (
                    <Briefcase className="w-6 h-6 text-emerald-600" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-amber-600" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D2622]">{item.role}</h3>
                  <p className="text-sm font-semibold text-emerald-700">{item.organization}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold text-[#6B5E55] bg-[#F7F2EB] px-4 py-2 rounded-full border border-[#E7E0D6]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#6B5E55] leading-relaxed mb-4">
              {item.description}
            </p>

            {item.highlights && (
              <ul className="space-y-2 mb-4">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-[#2D2622] flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.skills && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E7E0D6]">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#FAF6F0] rounded-full text-xs font-semibold text-[#2D2622] border border-[#E7E0D6]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
