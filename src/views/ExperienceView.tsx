import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TimelineStop } from '../components/TimelineStop';
import { CitySkyline } from '../components/CitySkyline';

export const ExperienceView: React.FC = () => {
  const [activeStopId, setActiveStopId] = useState<string>('stop-1-bologna');

  const stops = PORTFOLIO_DATA.careerTimeline;

  const scrollToStop = (id: string) => {
    setActiveStopId(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140; // account for sticky header + sticky mini nav
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Track active stop on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = stops.length - 1; i >= 0; i--) {
        const el = document.getElementById(stops[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveStopId(stops[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stops]);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Sticky Career Journey Navigator (User Control and Freedom, Nielsen principle) */}
      <div className="sticky top-16 sm:top-18 z-30 bg-[#F7F4EF]/98 backdrop-blur-md border-b border-[#2B2B2B]/15 py-2.5 px-4 sm:px-6 lg:px-10 shadow-xs">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#0F3D44] mr-1 hidden sm:inline">
              Journey:
            </span>
            {stops.map((stop) => {
              const isCurrent = activeStopId === stop.id;
              const shortCity = stop.city.split(',')[0].replace(' / Northeast China', '');
              return (
                <button
                  key={stop.id}
                  onClick={() => scrollToStop(stop.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors shrink-0 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#0F3D44] text-[#F7F4EF] font-bold shadow-xs'
                      : 'text-[#1F1F1F] hover:bg-[#2B2B2B]/10 hover:text-[#0F3D44]'
                  }`}
                >
                  {shortCity}
                </button>
              );
            })}
          </div>

          {/* Quick Return to Overview */}
          <button
            onClick={scrollToTop}
            className="text-xs font-semibold text-[#0F3D44] hover:underline flex items-center gap-1 shrink-0 px-2 py-1 cursor-pointer"
          >
            <span>Overview ↑</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        {/* Simplified Page Title & Header */}
        <div id="timeline-overview" className="space-y-3">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44]">
            <span className="font-mono">02</span>
            <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
            <span>Career Milestones</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1F1F1F] tracking-tight leading-[1.08]">
            Career Journey
          </h1>

          <p className="text-sm sm:text-base text-[#1F1F1F] font-normal max-w-3xl leading-relaxed">
            The 9-year progression moving across Bologna → Shenyang → Zhengzhou → Tianjin & Beijing → Suzhou → Northeast China → Singapore.
          </p>

          {/* Legend: Education vs Work */}
          <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-[#2B2B2B] border-t border-[#2B2B2B]/12">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-[#E8A598] bg-[#E8A598]/20" />
              <span className="font-medium">Education Stops</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-[#0F3D44] bg-[#0F3D44]/20" />
              <span className="font-medium">Corporate Leadership & Governance</span>
            </div>
            <span className="text-[#2B2B2B]/40 hidden md:inline">|</span>
            <span className="text-[#2B2B2B]/80 italic">
              Capability labels are narrative chapter themes, not formal job titles.
            </span>
          </div>
        </div>

        {/* Milestone Route Overview Cards */}
        <div className="bg-[#EAE5DA]/55 border border-[#2B2B2B]/15 p-4 sm:p-5 rounded-xs">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#0F3D44]">
            <span className="font-bold uppercase tracking-wider">
              7 Geographic Stops
            </span>
            <span className="font-medium text-[#2B2B2B]">
              2014 – 2027
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {stops.map((stop, idx) => {
              const isEducation = stop.type === 'Education';
              const isSelected = activeStopId === stop.id;

              return (
                <button
                  key={stop.id}
                  onClick={() => scrollToStop(stop.id)}
                  className={`text-left p-2.5 rounded-xs border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F3D44] text-[#F7F4EF] border-[#0F3D44] shadow-xs'
                      : 'bg-white/70 hover:bg-white text-[#1F1F1F] border-[#2B2B2B]/12'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className={isSelected ? 'text-[#E8A598] font-bold' : 'text-[#0F3D44] font-bold'}>
                      0{idx + 1}
                    </span>
                    <span className={isEducation ? 'text-[#E8A598] font-bold' : 'font-semibold opacity-75'}>
                      {stop.type}
                    </span>
                  </div>
                  <div className="font-serif font-medium text-sm truncate">
                    {stop.city.split(',')[0]}
                  </div>
                  <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-[#F7F4EF]/85' : 'text-[#2B2B2B]/75'}`}>
                    {stop.narrativeLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Stops */}
        <div className="space-y-1">
          {stops.map((stop, index) => (
            <div key={stop.id} id={stop.id} className="scroll-mt-36">
              <TimelineStop
                stop={stop}
                index={index}
                total={stops.length}
              />
            </div>
          ))}
        </div>

        {/* Contextual Back to Top Action at End of Journey */}
        <div className="pt-4 pb-2 border-t border-[#2B2B2B]/15 flex justify-between items-center text-xs font-semibold">
          <span className="text-[#2B2B2B]/75 font-mono">End of Career Journey (2014–2027)</span>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 border border-[#0F3D44] text-[#0F3D44] hover:bg-[#0F3D44] hover:text-[#F7F4EF] rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
          >
            <span>Timeline Overview ↑</span>
          </button>
        </div>

        {/* Subtle Decorative Skyline Motif */}
        <div className="pt-2">
          <CitySkyline opacity={0.2} />
        </div>
      </div>
    </div>
  );
};
