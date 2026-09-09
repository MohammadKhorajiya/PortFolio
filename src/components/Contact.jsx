import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`;

  return (
    <section id="contact" className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2622] tracking-tight">
          Let's Build Something Amazing.
        </h2>
        <p className="text-base text-[#6B5E55]">
          Interested in working together or hiring a Java backend specialist? Send me a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-[#E7E0D6] shadow-md space-y-6">
            <h3 className="text-xl font-bold text-[#2D2622]">Contact Details</h3>

            <div className="space-y-4">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF6F0] border border-[#E7E0D6] hover:border-[#2D2622] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#2D2622] group-hover:bg-[#2D2622] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B5E55] font-semibold">Direct Email</div>
                  <div className="text-sm font-bold text-[#2D2622]">{personal.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF6F0] border border-[#E7E0D6] hover:border-[#2D2622] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#2D2622] group-hover:bg-[#2D2622] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B5E55] font-semibold">Phone</div>
                  <div className="text-sm font-bold text-[#2D2622]">{personal.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF6F0] border border-[#E7E0D6]">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#2D2622]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B5E55] font-semibold">Location</div>
                  <div className="text-sm font-bold text-[#2D2622]">{personal.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 border border-[#E7E0D6] shadow-md space-y-5"
          >
            <div>
              <label className="block text-xs font-bold text-[#2D2622] uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#E7E0D6] text-sm text-[#2D2622] focus:outline-none focus:border-[#2D2622] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2D2622] uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="e.g. sarah@example.com"
                className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#E7E0D6] text-sm text-[#2D2622] focus:outline-none focus:border-[#2D2622] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2D2622] uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your project, backend requirements, or opportunity..."
                className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#E7E0D6] text-sm text-[#2D2622] focus:outline-none focus:border-[#2D2622] transition-colors resize-none"
              />
            </div>

            <button type="submit" className="w-full farhan-btn-primary py-4 shadow-md">
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>

            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
