import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
          Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2622] tracking-tight">
          Skills & Core Competencies
        </h2>
        <p className="text-base text-[#6B5E55]">
          A breakdown of my technical stack, backend frameworks, and databases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl p-8 border border-[#E7E0D6] shadow-md hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-[#2D2622] mb-1">{category.name}</h3>
            <p className="text-xs text-[#6B5E55] mb-6">{category.description}</p>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold border transition-all ${
                    skill.primary
                      ? 'bg-[#2D2622] text-white border-[#2D2622] shadow-sm'
                      : 'bg-[#FAF6F0] text-[#2D2622] border-[#E7E0D6] hover:border-[#2D2622]'
                  }`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
