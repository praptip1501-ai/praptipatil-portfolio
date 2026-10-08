import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-[#080c14] bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mono-font">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="syne-font text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Professional <span className="gradient-text-emerald">Experience Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Over 3+ years of professional front-end engineering, Shopify theme customization, and client-facing web development.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {workExperience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:bg-emerald-400 group-hover:scale-125 transition-all shadow-md shadow-emerald-500/50"></div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5">
                
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mono-font border border-emerald-500/20">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <h3 className="syne-font text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors pt-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400 pt-0.5">
                      <span className="font-semibold text-slate-200">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                    {exp.type}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-xs mono-font"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
