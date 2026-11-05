import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Resume() {
  const { personal } = portfolioData;

  const highlights = [
    'Secure REST APIs — Java 8+, Spring Boot & Spring Security',
    'Stateless JWT authentication & role-based access control',
    'MongoDB data-access layer & Redis caching',
    'JUnit 5 & Mockito automated test suites',
    'Spring WebClient non-blocking integration with retry & rate limiting',
    'SonarQube analysis & Render cloud deployment',
  ];

  return (
    <section id="resume" className="py-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden hover:border-mint/30 hover:shadow-xl"
      >
        {/* Gradient edge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mint via-mint-teal to-mint-cyan" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <span className="kicker"><FileText className="w-3 h-3" /> Resume 2026</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
                {personal.name} — <span className="text-gradient">{personal.role}</span>
              </h2>
              <p className="text-sm text-ink-muted">
                One-page summary of experience, projects, skills and education.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[13px] text-ink-soft">
                  <span className="font-mono text-mint text-sm leading-tight">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 lg:border-l lg:border-paper-line lg:pl-10">
            <a
              href={personal.resumeUrl}
              download="Mohammad_Khorajiya_Resume.pdf"
              className="btn-primary w-full py-4"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View PDF</span>
            </a>
            <p className="font-mono text-[10px] text-ink-faint text-center pt-1">PDF · Updated Nov 2026</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
