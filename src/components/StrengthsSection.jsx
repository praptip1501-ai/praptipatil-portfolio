import React from 'react';
import { Store, TrendingUp, Layout, Sparkles, Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { keyStrengths } from '../data/portfolioData';

export default function StrengthsSection() {
  const iconsMap = {
    Store: Store,
    TrendingUp: TrendingUp,
    Layout: Layout,
    Sparkles: Sparkles
  };

  return (
    <section className="py-20 relative bg-[#080c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mono-font">
            <Award className="w-3.5 h-3.5" />
            <span>Why Work With Me</span>
          </div>
          <h2 className="syne-font text-3xl sm:text-4xl font-extrabold text-white">
            Core Professional <span className="gradient-text-emerald">Strengths</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Proven strengths that drive high-quality web projects from initial code commit to production launch.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyStrengths.map((item, idx) => {
            const IconComp = iconsMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="syne-font text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 mono-font">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Experience</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
