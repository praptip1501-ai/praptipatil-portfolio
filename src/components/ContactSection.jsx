import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, Github, Linkedin, Sparkles, Phone, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Shopify Theme Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (personalDetails.phone) {
      navigator.clipboard.writeText(personalDetails.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti burst!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mono-font">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="syne-font text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Let's Build Something <span className="gradient-text-emerald">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Whether you have a new Shopify storefront project, need custom Liquid development, or wish to discuss full-time roles — let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mono-font">Direct Contact</span>
                <h3 className="syne-font text-2xl font-bold text-white">Contact Details</h3>
                <p className="text-xs text-slate-400">
                  Feel free to reach out via email, phone, or connect on LinkedIn / GitHub.
                </p>
              </div>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider mono-font">Email Address</span>
                      <span className="text-sm font-bold text-white">{personalDetails.email}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Box */}
              {personalDetails.phone && (
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider mono-font">Phone Number</span>
                        <a href={`tel:${personalDetails.phone}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                          {personalDetails.phone}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyPhone}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Location & Status */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{personalDetails.location}</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Response Time: Usually within 24 hours</span>
                </div>
              </div>

              {/* Social Connections */}
              <div className="space-y-2 pt-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mono-font">Connect Online:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Availability Badge */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-xs text-emerald-300">
              <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Available for full-time Front-End / Shopify engineering roles and select D2C consulting.</span>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="syne-font text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Your message has been sent successfully. I will get back to you shortly at <strong className="text-emerald-400">{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 mono-font">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 mono-font">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs transition-colors"
                    />
                  </div>

                </div>

                {/* Project Type Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 mono-font">Project Type / Inquiry *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 focus:outline-none focus:border-emerald-500 text-xs transition-colors"
                  >
                    <option value="Shopify Theme Development">Shopify Theme Development / Customization</option>
                    <option value="Custom Liquid Sections">Custom Liquid Sections & Metafields</option>
                    <option value="Front-End React Application">Front-End React Web Application</option>
                    <option value="Full Store Speed & CRO Optimization">Full Store Speed & CRO Optimization</option>
                    <option value="Full-Time Role Inquiry">Full-Time Role / Hiring Inquiry</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 mono-font">Message Details *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, timeline, or job inquiry details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.01] active:scale-95"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
