import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AiSkillsView: React.FC = () => {
  const { skills, research } = PORTFOLIO_DATA;

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10 sm:space-y-12">
      {/* Editorial Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44]">
          <span className="font-mono">04</span>
          <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
          <span>Core Capabilities & Research</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1F1F1F] tracking-tight leading-[1.08]">
          AI & Skills
        </h1>

        <p className="text-sm sm:text-base text-[#1F1F1F] font-normal max-w-3xl leading-relaxed">
          The intersection of 9 years leading brand and marketing strategy with developing Business AI capabilities and consumer decision-making research at Singapore Management University.
        </p>
      </div>

      {/* Grouped Capabilities Grid (Compact, High-Contrast, Zero Fake Bars) */}
      <section className="space-y-6">
        <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
            Capability Matrix
          </span>
          <span className="text-xs text-[#2B2B2B] font-mono font-medium">
            4 Core Domains
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* MARKETING */}
          <div className="bg-white/70 border border-[#2B2B2B]/15 p-5 rounded-xs space-y-3 shadow-xs">
            <div className="pb-2.5 border-b border-[#2B2B2B]/12 flex items-center justify-between">
              <h3 className="font-serif text-lg font-medium text-[#1F1F1F]">
                Marketing
              </h3>
              <span className="text-[10px] font-mono text-[#0F3D44] font-bold">
                9 Yrs Practice
              </span>
            </div>
            <ul className="space-y-2">
              {skills.marketing.map((skill, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-[#1F1F1F] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D44] mt-2 mr-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DATA */}
          <div className="bg-white/70 border border-[#2B2B2B]/15 p-5 rounded-xs space-y-3 shadow-xs">
            <div className="pb-2.5 border-b border-[#2B2B2B]/12 flex items-center justify-between">
              <h3 className="font-serif text-lg font-medium text-[#1F1F1F]">
                Data & Analytics
              </h3>
              <span className="text-[10px] font-mono text-[#0F3D44] font-bold">
                Quantitative
              </span>
            </div>
            <ul className="space-y-2">
              {skills.data.map((skill, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-[#1F1F1F] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D44] mt-2 mr-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI */}
          <div className="bg-white/70 border border-[#2B2B2B]/15 p-5 rounded-xs space-y-3 shadow-xs">
            <div className="pb-2.5 border-b border-[#2B2B2B]/12 flex items-center justify-between">
              <h3 className="font-serif text-lg font-medium text-[#1F1F1F]">
                Artificial Intelligence
              </h3>
              <span className="text-[10px] font-mono text-[#0F3D44] font-bold">
                SMU Focus
              </span>
            </div>
            <ul className="space-y-2">
              {skills.ai.map((skill, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-[#1F1F1F] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D44] mt-2 mr-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DESIGN */}
          <div className="bg-white/70 border border-[#2B2B2B]/15 p-5 rounded-xs space-y-3 shadow-xs">
            <div className="pb-2.5 border-b border-[#2B2B2B]/12 flex items-center justify-between">
              <h3 className="font-serif text-lg font-medium text-[#1F1F1F]">
                Design & Spatial
              </h3>
              <span className="text-[10px] font-mono text-[#0F3D44] font-bold">
                MFA Foundation
              </span>
            </div>
            <ul className="space-y-2">
              {skills.design.map((skill, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-[#1F1F1F] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D44] mt-2 mr-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESEARCH PRESENTATIONS (Strictly Source-Grounded, Section 17) */}
      <section className="space-y-6 pt-2">
        <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
            Academic Research & Conference Presentations
          </span>
          <span className="text-xs text-[#2B2B2B] font-mono font-medium">
            Accepted 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {research.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-[#EAE5DA]/60 border border-[#2B2B2B]/15 rounded-xs flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#0F3D44] font-bold uppercase mb-2">
                  <span>{item.status}</span>
                  <span>·</span>
                  <span>{item.location}</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1F1F1F] leading-snug">
                  "{item.title}"
                </h4>
              </div>

              <div className="pt-3 border-t border-[#2B2B2B]/12 flex items-center justify-between text-xs text-[#2B2B2B] font-mono font-medium">
                <span>{item.venue}</span>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
