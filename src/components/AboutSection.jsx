import React from 'react';
import { User, Award, GraduationCap, CheckCircle2, Code2, ShoppingBag, Cpu, Layout, Sparkles, Smartphone, BarChart3 } from 'lucide-react';
import { personalDetails, education } from '../data/portfolioData';

export default function AboutSection() {
  const highlights = [
    {
      title: "Shopify 2.0 & Liquid Architecture",
      desc: "Deep technical expertise in custom Liquid section development, metafields/metaobjects, schema configuration, and modular template engineering.",
      icon: ShoppingBag,
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
    },
    {
      title: "Front-End Engineering",
      desc: "Proficient in modern HTML5, CSS3, JavaScript (ES6+), React.js, jQuery, Bootstrap, and GSAP ScrollTrigger animations.",
      icon: Code2,
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10"
    },
    {
      title: "Integrations & APIs",
      desc: "Hands-on experience with Shopify REST/GraphQL APIs, payment gateways (Razorpay, Cashfree, GoKwik), and marketing automation (Klaviyo).",
      icon: Cpu,
      color: "text-purple-400 border-purple-500/20 bg-purple-500/10"
    },
    {
      title: "Performance & CRO",
      desc: "Dedicated to achieving top Core Web Vitals, sub-second page loads, accessible UI/UX, and conversion rate optimization.",
      icon: BarChart3,
      color: "text-amber-400 border-amber-500/20 bg-amber-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#090e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mono-font">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="syne-font text-3xl sm:text-4xl font-extrabold text-white">
            Engineering High-Performance <br className="hidden sm:inline" />
            <span className="gradient-text-emerald">Shopify & Front-End Solutions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Passionate about transforming brand vision into high-converting, lightning-fast digital storefronts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <h3 className="syne-font text-2xl font-bold text-white flex items-center gap-2">
                Hello! I'm Prapti Patil
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </h3>

              <p>
                I am a dedicated <strong className="text-white">Front-End Developer & Shopify Specialist</strong> with over <strong>3+ years of hands-on professional experience</strong> building, customizing, and scaling production D2C e-commerce stores across international markets (US, Australia, Europe, India).
              </p>

              <p>
                My expertise spans across <strong>Shopify 2.0 Liquid theme architecture</strong>, building custom section suites, dynamic variant swatches, AJAX cart drawers, interactive product bundles, and seamless payment/Klaviyo integrations.
              </p>

              <p>
                Whether collaborating with design agencies, fast-growing D2C brands, or enterprise clients, I bridge the gap between design aesthetic and technical execution — delivering websites optimized for <strong>speed, responsiveness, UX, and conversion</strong>.
              </p>
            </div>

            {/* Education Badge Card */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mono-font">Education</span>
                <h4 className="text-sm font-bold text-white">{education.degree}</h4>
                <p className="text-xs text-slate-400">{education.institution} • {education.location}</p>
              </div>
            </div>

          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800 flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl border ${item.color} shrink-0`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
