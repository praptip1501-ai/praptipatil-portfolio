import React, { useState } from 'react';
import { Sparkles, ArrowRight, Copy, Check, ExternalLink, Code2, ShoppingBag, ShieldCheck, Zap, Layers, MapPin } from 'lucide-react';
import { personalDetails, stats } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const techBadges = [
    { name: 'Shopify 2.0 & Liquid', icon: ShoppingBag, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
    { name: 'JavaScript (ES6+)', icon: Code2, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
    { name: 'React & UI Architecture', icon: Layers, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
    { name: 'GSAP Animations', icon: Sparkles, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
    { name: 'CRO & Core Web Vitals', icon: Zap, color: 'text-rose-400 border-rose-500/30 bg-rose-500/10' }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-glow"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase mono-font">
                Available for New Projects & Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="syne-font text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Crafting High-Converting <br />
                <span className="gradient-text-emerald">D2C E-Commerce</span> & <br />
                <span className="gradient-text-cyber">Front-End Experiences</span>
              </h1>
            </div>

            {/* Subtitle / Pitch */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Hi, I'm <strong className="text-white font-semibold">Prapti Patil</strong>. A Front-End Developer & Shopify Specialist with <span className="text-emerald-400 font-semibold">3+ years of experience</span> crafting production-ready Liquid themes, custom interactive sections, fast checkout flows, and high-performance web applications.
            </p>

            {/* Location & Quick Info */}
            <div className="flex items-center gap-4 text-xs text-slate-400 mono-font">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Nagpur, India</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>7+ Global Client Stores</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-400 hover:text-slate-200 text-sm transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 space-y-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mono-font">Core Technologies:</span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, idx) => {
                  const IconComp = badge.icon;
                  return (
                    <div
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-medium backdrop-blur-md ${badge.color}`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{badge.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Visual / Code Floating Window */}
          <div className="lg:col-span-5 relative">
            <div className="relative glass-card rounded-2xl p-6 border border-slate-800/80 shadow-2xl space-y-6">
              
              {/* Window Bar Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="text-[11px] text-slate-400 mono-font">prapti-patil-portfolio.liquid</div>
              </div>

              {/* Live Preview Code snippet */}
              <div className="space-y-3 font-mono text-xs text-slate-300 bg-[#060a12] p-4 rounded-xl border border-slate-900 overflow-x-auto">
                <div className="text-slate-500">// Shopify 2.0 Custom Section Architect</div>
                <div>
                  <span className="text-purple-400">{"{%"}</span> <span className="text-emerald-400">schema</span> <span className="text-purple-400">{"%}"}</span>
                </div>
                <div className="pl-4 text-amber-300">
                  {`{`}
                  <br />
                  <span className="text-cyan-300 pl-2">"name":</span> <span className="text-emerald-300">"Interactive D2C Upsell Section"</span>,
                  <br />
                  <span className="text-cyan-300 pl-2">"settings":</span> [<br />
                  <span className="text-slate-400 pl-4">{`{ "type": "product", "id": "featured_product" },`}</span><br />
                  <span className="text-slate-400 pl-4">{`{ "type": "checkbox", "id": "enable_ajax_cart", "default": true }`}</span><br />
                  <span className="text-amber-300 pl-2">]</span><br />
                  {`}`}
                </div>
                <div>
                  <span className="text-purple-400">{"{%"}</span> <span className="text-emerald-400">endschema</span> <span className="text-purple-400">{"%}"}</span>
                </div>
                <div className="text-emerald-400 pt-1">
                  &lt;section class="d2c-upsell-drawer" data-ajax-cart="true"&gt;
                </div>
                <div className="pl-4 text-slate-300">
                  &lt;h2 class="title"&gt;<span className="text-yellow-300">{`{{ section.settings.title }}`}</span>&lt;/h2&gt;
                </div>
                <div className="text-emerald-400">
                  &lt;/section&gt;
                </div>
              </div>

              {/* Stats Highlights Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {stats.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                    <span className="syne-font text-2xl font-bold text-emerald-400">{item.value}</span>
                    <span className="text-xs font-semibold text-slate-200">{item.label}</span>
                    <span className="text-[10px] text-slate-400 mono-font">{item.sub}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Floating Decorative Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 glass-card p-3 rounded-xl border border-emerald-500/30 shadow-xl items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Liquid Theme Master</span>
                <span className="text-[10px] text-emerald-400">Shopify 2.0 & Metafields</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
