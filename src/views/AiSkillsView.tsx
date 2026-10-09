import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AiSkillsView: React.FC = () => {
  const { skillGroups, research } = PORTFOLIO_DATA;

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10 sm:space-y-12">
      {/* Editorial Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44]">
          <span className="font-mono">04</span>
          <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
          <span>Core Capabilities & Research</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] tracking-tight leading-[1.08]">
          AI & Skills
        </h1>

        <p className="text-sm sm:text-base text-[#1F1F1F] font-normal max-w-3xl leading-relaxed">
          The intersection of 9 years leading brand and marketing strategy with quantitative business analytics and AI methods at Singapore Management University.
        </p>
      </div>

      {/* 5 Hybrid Professional Capability Structure */}
      <section className="space-y-6">
        <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
            Capability Matrix
          </span>
          <span className="text-xs text-[#2B2B2B]/80 font-mono font-medium">
            5 Professional Capability Domains
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="bg-white/70 border border-[#2B2B2B]/15 p-5 sm:p-6 rounded-xs space-y-4 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="pb-3 border-b border-[#2B2B2B]/12 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#0F3D44]">
                      {group.number}
                    </span>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-[#1F1F1F]">
                      {group.name}
                    </h3>
                  </div>
                </div>

                {group.subtitle && (
                  <p className="text-[11px] text-[#2B2B2B]/75 font-mono uppercase tracking-wider mt-2 mb-3">
                    {group.subtitle}
                  </p>
                )}

                <ul className="space-y-2.5 mt-2">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-[#1F1F1F]">
                      <div className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D44] mt-2 mr-2 flex-shrink-0" />
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-semibold">{item.name}</span>
                            {item.category && (
                              <span
                                className={`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded-xs font-bold ${
                                  item.category === 'applied'
                                    ? 'bg-[#0F3D44]/10 text-[#0F3D44]'
                                    : 'bg-[#E8A598]/20 text-[#0F3D44]'
                                }`}
                              >
                                {item.category === 'applied' ? 'Applied Experience' : 'Academic Learning'}
                              </span>
                            )}
                          </div>
                          {item.note && (
                            <p className="text-[11px] text-[#2B2B2B]/75 leading-snug mt-0.5">
                              {item.note}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACADEMIC RESEARCH PRESENTATIONS */}
      <section className="space-y-6 pt-2">
        <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
            Academic Research & Conference Presentations
          </span>
          <span className="text-xs text-[#2B2B2B]/80 font-mono font-medium">
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
                <h4 className="font-sans text-lg sm:text-xl font-bold text-[#1F1F1F] leading-snug">
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
