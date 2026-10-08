import React, { useState } from 'react';
import { Cpu, ShoppingBag, Code2, Zap, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const toolsList = [
    "Shopify CLI", "Liquid Architecture", "React.js", "JavaScript (ES6+)", "GSAP / ScrollTrigger",
    "jQuery", "HTML5 & CSS3", "Bootstrap", "AJAX", "REST APIs", "Shopify Metafields",
    "Razorpay", "Cashfree", "GoKwik", "Klaviyo", "Core Web Vitals", "Technical SEO",
    "Git / GitHub", "Cursor AI", "VS Code", "Chrome DevTools"
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#090e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mono-font">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="syne-font text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Skills & <span className="gradient-text-emerald">Technology Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive matrix of front-end tools, Shopify frameworks, API integrations, and performance engineering practices I use daily.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-xl shadow-emerald-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Category Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Proficiency Bars */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="space-y-1">
              <h3 className="syne-font text-xl font-bold text-white">
                {skillCategories[activeTab].name}
              </h3>
              <p className="text-xs text-slate-400">
                {skillCategories[activeTab].description}
              </p>
            </div>

            <div className="space-y-5 pt-2">
              {skillCategories[activeTab].skills.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {skill.name}
                    </span>
                    <span className="mono-font font-bold text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700 shadow-sm shadow-emerald-500/50"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mastered Tools Cloud & Highlights */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <h3 className="syne-font text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                Tools & Ecosystem
              </h3>
              <p className="text-xs text-slate-400">
                Technologies and developer workflows integrated into production routines:
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {toolsList.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 pt-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mono-font">
                Development Philosophy
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Writing clean, scalable Liquid & JavaScript code designed for fast mobile page loads, effortless client management, and high conversion impact."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
