import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle, Terminal, ExternalLink, ShieldCheck, Mail, Phone, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Resume() {
  const { personal } = portfolioData;

  const keyHighlights = [
    "Proven experience building REST APIs with Java 8+, Spring Boot & Security",
    "Stateless JWT Authentication & Role-Based Access Control (RBAC)",
    "MongoDB Data Access Layer & Redis High-Performance Caching",
    "90%+ Automated Test Coverage using JUnit 5 & Mockito",
    "Spring WebClient Non-Blocking HTTP Integration & @Async Tasking",
    "SonarQube Static Analysis & Render Cloud Deployment"
  ];

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2D2622] tracking-tight">
            Official <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Resume & Qualifications</span>
          </h2>
          <p className="text-[#6B5E55] max-w-2xl mx-auto text-base">
            Download my complete curriculum vitae or review technical highlights at a glance.
          </p>
        </motion.div>

        {/* Featured Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E7E0D6] shadow-xl relative overflow-hidden"
        >
          {/* Top Vibrant Color Strip */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Details Side */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                  <FileText className="w-3.5 h-3.5" />
                  <span>UPDATED RESUME PDF</span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#2D2622]">{personal.name}</h3>
                <p className="text-emerald-700 font-bold text-base">{personal.role}</p>
              </div>

              {/* Quick Contact Line */}
              <div className="flex flex-wrap gap-6 text-xs font-semibold text-[#6B5E55] pt-3 border-t border-[#E7E0D6]">
                {personal.phone && (
                  <span className="flex items-center gap-2 text-[#2D2622]">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    {personal.phone}
                  </span>
                )}
                <span className="flex items-center gap-2 text-[#2D2622]">
                  <Mail className="w-4 h-4 text-teal-600" />
                  {personal.email}
                </span>
              </div>

              {/* Technical Highlights list */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-[#6B5E55] uppercase tracking-wider">Technical Strengths</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-[#2D2622] bg-[#FAF6F0] p-2.5 rounded-xl border border-[#E7E0D6]">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Side */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-5 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E7E0D6] lg:pl-8">
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-md">
                <Award className="w-10 h-10" />
              </div>

              <a
                href={personal.resumeUrl}
                download="Mohammad_Khorajiya_Resume.pdf"
                className="farhan-btn-primary w-full py-4 shadow-lg text-center"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D2622] hover:text-emerald-600 transition-colors"
              >
                <span>View PDF in Browser</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
