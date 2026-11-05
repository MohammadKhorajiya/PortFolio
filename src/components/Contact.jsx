import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const infoCards = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null },
  ];

  return (
    <section id="contact" className="py-24 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-14 text-center"
        >
          <span className="kicker">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F2F6F3]">
            Let's build something <span className="text-gradient">reliable</span>.
          </h2>
          <p className="text-sm text-[#8B9C94] max-w-xl mx-auto">
            Hiring for a backend role or need a Spring Boot API built right? My inbox is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {infoCards.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? 'a' : 'div';
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                  className="glass-card p-5 flex items-center gap-4 hover:border-mint/30 hover:bg-white/[0.05] transition-all group block"
                >
                  <div className="w-11 h-11 rounded-xl bg-mint/10 border border-mint/25 flex items-center justify-center text-mint-bright group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[#6E817A]">{label}</div>
                    <div className="text-sm font-bold text-[#E8EDEA] truncate">{value}</div>
                  </div>
                </Wrapper>
              );
            })}

            <div className="glass-card p-5 flex items-center gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9FB6AC] hover:text-mint-bright hover:border-mint/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9FB6AC] hover:text-mint-bright hover:border-mint/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#6E817A] ml-1">Elsewhere</span>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 glass-card p-7 sm:p-8 space-y-5 hover:border-mint/25"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#6E817A] mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="field-input"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#6E817A] mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="field-input"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-[#6E817A] mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role or project..."
                className="field-input resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full py-4">
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
            <p className="text-center font-mono text-[10px] text-[#5C6E66]">
              Opens your mail app addressed to {personal.email}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
