import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TimelineStop } from '../components/TimelineStop';
import { CitySkyline } from '../components/CitySkyline';

export const ExperienceView: React.FC = () => {
  const [activeStopId, setActiveStopId] = useState<string>('stop-2-shenyang');

  // Professional progression consists of the 5 corporate milestones
  const professionalStops = PORTFOLIO_DATA.careerTimeline.filter(
    (stop) => stop.type === 'Work'
  );

  const educationCredentials = PORTFOLIO_DATA.educationCredentials;

  const scrollToSection = (id: string) => {
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
    const allTrackedIds = [
      ...professionalStops.map((s) => s.id),
      'chapter-singapore',
      'section-education',
    ];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = allTrackedIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(allTrackedIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveStopId(allTrackedIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [professionalStops]);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Sticky Career Progression Navigator */}
      <div className="sticky top-16 sm:top-18 z-30 bg-[#F7F4EF]/98 backdrop-blur-md border-b border-[#2B2B2B]/15 py-2.5 px-4 sm:px-6 lg:px-10 shadow-xs">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#0F3D44] mr-1 hidden sm:inline">
              Progression:
            </span>
            {professionalStops.map((stop, idx) => {
              const isCurrent = activeStopId === stop.id;
              const shortCity = stop.city === 'Shenyang / Northeast China' ? 'Northeast China' : stop.city.split(',')[0];
              return (
                <button
                  key={stop.id}
                  onClick={() => scrollToSection(stop.id)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors shrink-0 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#0F3D44] text-[#F7F4EF] font-bold shadow-xs'
                      : 'text-[#1F1F1F] hover:bg-[#2B2B2B]/10 hover:text-[#0F3D44]'
                  }`}
                >
                  0{idx + 1} {shortCity}
                </button>
              );
            })}

            {/* Singapore Academic Transition Link */}
            <span className="text-[#2B2B2B]/30 mx-1 hidden sm:inline">|</span>
            <button
              onClick={() => scrollToSection('chapter-singapore')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors shrink-0 cursor-pointer ${
                activeStopId === 'chapter-singapore'
                  ? 'bg-[#0F3D44] text-[#F7F4EF] font-bold shadow-xs'
                  : 'text-[#0F3D44] hover:bg-[#0F3D44]/10 font-bold'
              }`}
            >
              Singapore (Business AI)
            </button>

            {/* Education Credentials Link */}
            <span className="text-[#2B2B2B]/30 mx-1 hidden sm:inline">|</span>
            <button
              onClick={() => scrollToSection('section-education')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors shrink-0 cursor-pointer ${
                activeStopId === 'section-education'
                  ? 'bg-[#0F3D44] text-[#F7F4EF] font-bold shadow-xs'
                  : 'text-[#0F3D44] hover:bg-[#0F3D44]/10 font-bold'
              }`}
            >
              Education
            </button>
          </div>

          {/* Quick Return to Overview */}
          <button
            onClick={scrollToTop}
            className="text-xs font-bold text-[#0F3D44] hover:underline flex items-center gap-1 shrink-0 px-2 py-1 cursor-pointer"
          >
            <span>Overview ↑</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        {/* Page Title & Header */}
        <div id="timeline-overview" className="space-y-3">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44]">
            <span className="font-mono">02</span>
            <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
            <span>Professional Experience & Academic Credentials</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] tracking-tight leading-[1.08]">
            Experience & Education
          </h1>

          <p className="text-sm sm:text-base text-[#1F1F1F] font-normal max-w-3xl leading-relaxed">
            A 9-year progression in corporate brand, go-to-market and marketing governance across Shenyang → Zhengzhou → Tianjin & Beijing → Suzhou → Northeast China, leading into Business AI in Singapore.
          </p>

          {/* Track Record & Strategic Scope */}
          <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-[#2B2B2B] border-t border-[#2B2B2B]/12">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F3D44]" />
              <span className="font-bold text-[#1F1F1F]">Professional Marketing Progression</span>
            </div>
            <span className="text-[#2B2B2B]/40 hidden sm:inline">|</span>
            <span className="font-semibold text-[#1F1F1F]">
              4 Fortune Global 500 Developers · RMB 22B+ Sales Supported (2024–2025)
            </span>
            <span className="text-[#2B2B2B]/40 hidden md:inline">|</span>
            <span className="text-[#2B2B2B] font-medium">
              Chapter labels describe strategic capability phases.
            </span>
          </div>
        </div>

        {/* Milestone Route Overview Cards */}
        <div className="bg-[#EAE5DA]/55 border border-[#2B2B2B]/15 p-4 sm:p-5 rounded-xs">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#0F3D44]">
            <span className="font-bold uppercase tracking-wider">
              5 Professional Milestones
            </span>
            <span className="font-bold text-[#1F1F1F]">
              2017 – 2026 · 9-Year Track Record
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {professionalStops.map((stop, idx) => {
              const isSelected = activeStopId === stop.id;
              const displayCity = stop.city === 'Shenyang / Northeast China' ? 'Northeast China' : stop.city.split(',')[0];

              return (
                <button
                  key={stop.id}
                  onClick={() => scrollToSection(stop.id)}
                  className={`text-left p-3 rounded-xs border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F3D44] text-[#F7F4EF] border-[#0F3D44] shadow-xs'
                      : 'bg-white/80 hover:bg-white text-[#1F1F1F] border-[#2B2B2B]/15'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                    <span className={isSelected ? 'text-[#E8A598] font-bold' : 'text-[#0F3D44] font-bold'}>
                      0{idx + 1}
                    </span>
                    <span className="font-bold uppercase tracking-wider text-[10px] opacity-80">
                      {stop.years.split('–')[0].trim().split(' ')[1] || stop.years.split('–')[0]}
                    </span>
                  </div>
                  <div className="font-sans font-bold text-sm sm:text-base truncate">
                    {displayCity}
                  </div>
                  <div className={`text-[11px] truncate mt-1 font-medium ${isSelected ? 'text-[#F7F4EF]/90' : 'text-[#2B2B2B]'}`}>
                    {stop.narrativeLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION A: PROFESSIONAL EXPERIENCE (5 STOPS + CONTINUOUS CONNECTOR TO SINGAPORE) */}
        <section className="space-y-4">
          <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
              Part A · Professional Experience
            </span>
            <span className="text-xs text-[#2B2B2B]/80 font-mono font-medium">
              5 Corporate Milestones (2017–2026)
            </span>
          </div>

          <div className="space-y-1">
            {professionalStops.map((stop, index) => (
              <div key={stop.id} id={stop.id} className="scroll-mt-36">
                <TimelineStop
                  stop={stop}
                  index={index}
                  total={professionalStops.length}
                />
              </div>
            ))}
          </div>

          {/* NEXT CHAPTER · SINGAPORE (CONTINUOUS VERTICAL TIMELINE CONNECTOR) */}
          <div id="chapter-singapore" className="relative scroll-mt-36 pt-2">
            {/* Visual connector line seamlessly entering the Academic Transition node */}
            <div
              className="absolute left-4 top-0 h-10 w-[1.5px] bg-[#0F3D44]/40"
              aria-hidden="true"
            />

            <div className="flex items-start space-x-5">
              {/* Distinct Differentiated Academic Node */}
              <div className="relative z-10 flex-shrink-0 mt-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 bg-[#0F3D44] border-[#0F3D44] text-[#F7F4EF] shadow-xs">
                  {/* Graduation Cap / Academic Transition Icon */}
                  <svg className="w-4 h-4 text-[#F7F4EF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
              </div>

              {/* Differentiated Academic Transition Card */}
              <div className="flex-grow p-6 sm:p-8 bg-[#0F3D44]/6 border-2 border-[#0F3D44]/35 rounded-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#0F3D44]/20 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold block mb-1">
                      Academic Transition · Future Direction
                    </span>
                    <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
                      Singapore Management University · Business AI
                    </h2>
                  </div>
                  <div className="sm:text-right">
                    <span className="font-mono text-xs text-[#0F3D44] font-bold tracking-wider block">
                      Aug 2026 – Aug 2027
                    </span>
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#2B2B2B] font-bold">
                      Lee Kong Chian School of Business
                    </span>
                  </div>
                </div>

                <p className="font-sans text-base sm:text-lg text-[#1F1F1F] font-normal leading-relaxed max-w-3xl">
                  Communicates the transition from nine years of brand leadership and corporate marketing governance at four Fortune Global 500 developers into quantitative, data-driven Business AI at Singapore Management University — applying artificial intelligence to marketing analytics, consumer decision-making, and high-involvement purchasing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                  <div className="p-5 bg-white/85 border border-[#2B2B2B]/15 rounded-xs space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
                      Institution & Degree
                    </span>
                    <h3 className="font-sans text-lg font-bold text-[#1F1F1F]">
                      Singapore Management University
                    </h3>
                    <p className="text-xs font-bold text-[#0F3D44]">
                      Lee Kong Chian School of Business
                    </p>
                    <p className="text-sm font-semibold text-[#1F1F1F]">
                      Master of Science in Business AI candidate
                    </p>
                    <div className="pt-2.5 border-t border-[#2B2B2B]/10 text-xs text-[#2B2B2B] space-y-1.5">
                      <p className="font-medium">
                        <strong className="text-[#0F3D44] font-bold">Scholarship:</strong> Awarded prestigious Community Impact Scholarship.
                      </p>
                      <p className="font-medium">
                        <strong className="text-[#0F3D44] font-bold">Availability:</strong> Full-time internship starting January 2027 in Singapore.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-white/85 border border-[#2B2B2B]/15 rounded-xs space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
                      Core Coursework & Research
                    </span>
                    <ul className="text-xs text-[#1F1F1F] space-y-2 leading-relaxed pt-1">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D44] mt-1.5 shrink-0" />
                        <span><strong className="font-bold">Coursework:</strong> AI-Powered Marketing, Human-AI Collaboration, Data-Driven Decision Making with AI, Data Storytelling and AI-augmented Influencing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D44] mt-1.5 shrink-0" />
                        <span><strong className="font-bold">Academic Research:</strong> Empirical study on AI-generated influencers in consumer and high-involvement purchasing decisions (accepted at APMA & CMIC 2026).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION B: EDUCATION CREDENTIALS (THE THREE ACADEMIC INSTITUTIONS) */}
        <section id="section-education" className="scroll-mt-36 pt-6 space-y-6">
          <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
              Part B · Academic Credentials
            </span>
            <span className="text-xs text-[#2B2B2B]/80 font-mono font-medium">
              3 Higher Education Institutions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationCredentials.map((edu, idx) => (
              <div key={idx} className="p-5 sm:p-6 bg-white/70 border border-[#2B2B2B]/20 rounded-xs space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
                  {edu.location}
                </span>
                <h3 className="font-sans text-lg font-bold text-[#1F1F1F] leading-tight">
                  {edu.institution}
                </h3>
                {edu.school && (
                  <p className="text-xs font-medium text-[#2B2B2B]/85">
                    {edu.school}
                  </p>
                )}
                <p className="text-sm font-bold text-[#0F3D44]">
                  {edu.degree}
                </p>
                <p className="text-xs text-[#2B2B2B] font-mono font-semibold">
                  {edu.period}
                </p>
                <p className="text-xs text-[#2B2B2B] pt-2 border-t border-[#2B2B2B]/10 leading-relaxed font-normal">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contextual Back to Top Action at End of Journey */}
        <div className="pt-4 pb-2 border-t border-[#2B2B2B]/15 flex justify-between items-center text-xs font-bold">
          <span className="text-[#2B2B2B] font-mono">End of Professional & Academic Journey (2017–2027)</span>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 border border-[#0F3D44] text-[#0F3D44] hover:bg-[#0F3D44] hover:text-[#F7F4EF] rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
          >
            <span>Overview ↑</span>
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
