import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { CitySkyline } from '../components/CitySkyline';

interface AboutViewProps {
  onNavigateTab: (tab: 'experience' | 'work' | 'ai-skills') => void;
  onSelectProject?: (project: Project) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigateTab,
  onSelectProject,
}) => {
  const [showLinkedInPlaceholder, setShowLinkedInPlaceholder] = useState(false);

  const {
    profile,
    snapshotFigures,
    aboutStory,
    languages,
    workAuthorization,
    earlierEducation,
    projects,
  } = PORTFOLIO_DATA;

  // The 3 hero cases in approved priority: Qingyun Que, Jinmao Mansion, Vanke Yinyue
  const heroCases = projects.filter((p) => p.level === 'hero');

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12 sm:space-y-16">
      {/* SECTION A: INTRODUCTION & PORTRAIT */}
      <section className="pt-2 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Personal Identity & Position */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5 text-xs tracking-widest uppercase font-bold text-[#0F3D44]">
              <span>Singapore</span>
              <span aria-hidden="true" className="text-[#2B2B2B]/40">·</span>
              <span>Singapore Management University</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1F1F1F] leading-[1.08]">
                {profile.name}
              </h1>
              <p className="text-sm sm:text-base font-sans font-bold tracking-wide text-[#0F3D44] uppercase">
                Brand & Marketing Strategist · MSc in Business AI Candidate
              </p>
            </div>

            {/* SECTION B: APPROVED PROFESSIONAL POSITIONING */}
            <div className="p-5 sm:p-6 bg-[#EAE5DA]/55 border-l-3 border-[#0F3D44] rounded-r-xs">
              <p className="font-serif text-xl sm:text-2xl text-[#1F1F1F] font-normal leading-relaxed">
                "{profile.positioning}"
              </p>
            </div>

            {/* Quick Exploration Buttons (Coherent button system) */}
            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-bold tracking-wider uppercase">
              <button
                onClick={() => onNavigateTab('work')}
                className="px-5 py-2.5 bg-[#0F3D44] text-[#F7F4EF] hover:bg-[#0F3D44]/90 transition-all rounded-xs shadow-xs flex items-center gap-2 cursor-pointer font-bold tracking-wider uppercase"
              >
                <span>Selected Work</span>
                <span aria-hidden="true">→</span>
              </button>

              <button
                onClick={() => onNavigateTab('experience')}
                className="px-5 py-2.5 border border-[#2B2B2B]/35 hover:border-[#0F3D44] text-[#1F1F1F] hover:text-[#0F3D44] bg-white/70 hover:bg-[#0F3D44]/5 transition-all rounded-xs shadow-xs flex items-center gap-2 cursor-pointer font-bold tracking-wider uppercase"
              >
                <span>Career Journey</span>
                <span aria-hidden="true">→</span>
              </button>

              <button
                onClick={() => onNavigateTab('ai-skills')}
                className="px-5 py-2.5 border border-[#2B2B2B]/35 hover:border-[#0F3D44] text-[#1F1F1F] hover:text-[#0F3D44] bg-white/70 hover:bg-[#0F3D44]/5 transition-all rounded-xs shadow-xs flex items-center gap-2 cursor-pointer font-bold tracking-wider uppercase"
              >
                <span>AI & Skills</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Portrait Frame + Current Academic & Location Signals */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div className="aspect-[4/5] bg-[#ECE8DF] border border-[#2B2B2B]/20 rounded-xs overflow-hidden shadow-xs relative">
                <img
                  src={profile.portraitUrl}
                  alt="Zhang Chenxi — Professional Portrait"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>

              {/* Verified Status Card */}
              <div className="mt-3 p-3 bg-white/70 border border-[#2B2B2B]/15 rounded-xs space-y-1 text-xs">
                <div className="flex justify-between font-mono text-[#2B2B2B]">
                  <span className="text-[#2B2B2B]/70">Location:</span>
                  <span className="font-bold text-[#1F1F1F]">Singapore</span>
                </div>
                <div className="flex justify-between font-mono text-[#2B2B2B]">
                  <span className="text-[#2B2B2B]/70">Affiliation:</span>
                  <span className="font-bold text-[#1F1F1F]">SMU LKCSB</span>
                </div>
                <div className="flex justify-between font-mono text-[#2B2B2B]">
                  <span className="text-[#2B2B2B]/70">Degree:</span>
                  <span className="font-bold text-[#0F3D44]">MSc in Business AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: CAREER SNAPSHOT (5 KEY FIGURES) */}
      <section className="border-t border-b border-[#2B2B2B]/15 py-8 sm:py-10">
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44] mb-6">
          <span className="font-mono">01</span>
          <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
          <span>Career Snapshot</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5">
          {/* Metric 1: 9 Years */}
          <div className="flex flex-col justify-between border-l-2 border-[#0F3D44] pl-4 py-1">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1F1F] tracking-tight leading-none">
                  9
                </span>
                <span className="text-xs font-sans font-bold text-[#0F3D44] uppercase tracking-wider">
                  Years
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider text-[#2B2B2B] mt-2.5 leading-snug">
                IN BRAND & MARKETING STRATEGY
              </p>
            </div>
          </div>

          {/* Metric 2: 4 Fortune Global 500 */}
          <div className="flex flex-col justify-between border-l-2 border-[#0F3D44] pl-4 py-1">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1F1F] tracking-tight leading-none">
                  4
                </span>
                <span className="text-xs font-sans font-bold text-[#0F3D44] uppercase tracking-wider">
                  Fortune 500
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider text-[#2B2B2B] mt-2.5 leading-snug">
                DEVELOPERS: VANKE, CHINA JINMAO, LONGFOR, SUNAC
              </p>
            </div>
          </div>

          {/* Metric 3: 41 Projects */}
          <div className="flex flex-col justify-between border-l-2 border-[#0F3D44] pl-4 py-1">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1F1F] tracking-tight leading-none">
                  41
                </span>
                <span className="text-xs font-sans font-bold text-[#0F3D44] uppercase tracking-wider">
                  Projects
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider text-[#2B2B2B] mt-2.5 leading-snug">
                UNDER REGIONAL BRAND GOVERNANCE
              </p>
            </div>
          </div>

          {/* Metric 4: RMB 22B+ */}
          <div className="flex flex-col justify-between border-l-2 border-[#0F3D44] pl-4 py-1">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#0F3D44] uppercase tracking-wider">
                  RMB
                </span>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1F1F] tracking-tight leading-none">
                  22B+
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider text-[#2B2B2B] mt-2.5 leading-snug">
                IN SALES SUPPORTED (2024–2025)
              </p>
            </div>
          </div>

          {/* Metric 5: RMB 1B */}
          <div className="flex flex-col justify-between border-l-2 border-[#0F3D44] pl-4 py-1">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#0F3D44] uppercase tracking-wider">
                  RMB
                </span>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1F1F] tracking-tight leading-none">
                  1B
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider text-[#2B2B2B] mt-2.5 leading-snug">
                OPENING-DAY SALES (QINGYUN QUE LAUNCH)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: SHORT BIOGRAPHY (APPROVED TEXT ONLY) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44] mb-2">
          <span className="font-mono">02</span>
          <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
          <span>Biography</span>
        </div>

        <div className="max-w-3xl">
          <p className="font-serif text-xl sm:text-2xl text-[#1F1F1F] font-normal leading-relaxed">
            {aboutStory}
          </p>
        </div>
      </section>

      {/* SECTION E: EDUCATION (ONLY THE THREE ACADEMIC INSTITUTIONS) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44] mb-2">
          <span className="font-mono">03</span>
          <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
          <span>Education</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education: SMU */}
          <div className="p-5 sm:p-6 bg-white/70 border border-[#2B2B2B]/20 rounded-xs space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
              Current Education · Singapore
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1F1F1F] leading-tight">
              Singapore Management University
            </h3>
            <p className="text-sm font-bold text-[#0F3D44]">
              Master of Science in Business AI
            </p>
            <p className="text-xs text-[#2B2B2B] font-mono font-semibold">
              Aug 2026 – Aug 2027
            </p>
            <p className="text-xs text-[#2B2B2B] pt-2 border-t border-[#2B2B2B]/10 leading-relaxed font-normal">
              Awarded Community Impact scholarship. Coursework: AI-Powered Marketing, Human-AI Collaboration, Data-Driven Decision Making.
            </p>
          </div>

          {/* Education: Bologna */}
          <div className="p-5 sm:p-6 bg-white/70 border border-[#2B2B2B]/20 rounded-xs space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
              Graduate Degree · Italy
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1F1F1F] leading-tight">
              Accademia di Belle Arti di Bologna
            </h3>
            <p className="text-sm font-bold text-[#0F3D44]">
              MFA in Scenography & Staging
            </p>
            <p className="text-xs text-[#2B2B2B] font-mono font-semibold">
              Oct 2014 – Feb 2017
            </p>
            <p className="text-xs text-[#2B2B2B] pt-2 border-t border-[#2B2B2B]/10 leading-relaxed font-normal">
              Foundation in spatial storytelling, scenography, lighting, and architectural staging.
            </p>
          </div>

          {/* Earlier Education: Anshan Normal */}
          <div className="p-5 sm:p-6 bg-white/70 border border-[#2B2B2B]/20 rounded-xs space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
              Undergraduate Degree · China
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1F1F1F] leading-tight">
              {earlierEducation.institution}
            </h3>
            <p className="text-sm font-bold text-[#0F3D44]">
              {earlierEducation.degree}
            </p>
            <p className="text-xs text-[#2B2B2B] font-mono font-semibold">
              {earlierEducation.years}
            </p>
            <p className="text-xs text-[#2B2B2B] pt-2 border-t border-[#2B2B2B]/10 leading-relaxed font-normal">
              Foundational art, spatial and visual design training.
            </p>
          </div>
        </div>

        {/* CREDENTIALS & ADDITIONAL INFORMATION (Separate Section Below the 3 Education Cards) */}
        <div className="mt-8 pt-6 border-t border-[#2B2B2B]/15 space-y-4">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44]">
            <span className="font-mono">03.1</span>
            <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
            <span>Credentials & Additional Information</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages Card */}
            <div className="p-5 sm:p-6 bg-[#ECE8DF]/60 border border-[#2B2B2B]/20 rounded-xs space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
                Languages
              </span>
              <ul className="text-xs divide-y divide-[#2B2B2B]/10">
                {languages.map((l, i) => (
                  <li key={i} className="py-2.5 flex justify-between items-center text-[#1F1F1F]">
                    <span className="font-bold text-sm">{l.language}</span>
                    <span className="font-mono font-bold text-xs text-[#0F3D44]">{l.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Work Authorization Card */}
            <div className="p-5 sm:p-6 bg-[#ECE8DF]/60 border border-[#2B2B2B]/20 rounded-xs space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
                Work Authorization
              </span>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-white/70 border border-[#2B2B2B]/15 rounded-xs">
                  <div className="flex justify-between items-baseline mb-1">
                    <strong className="text-sm font-bold text-[#1F1F1F]">Singapore</strong>
                    <span className="font-mono font-bold text-[11px] text-[#0F3D44] uppercase tracking-wider">Internship</span>
                  </div>
                  <p className="text-[#2B2B2B] leading-relaxed">
                    {workAuthorization.singapore}
                  </p>
                </div>
                <div className="p-3 bg-white/70 border border-[#2B2B2B]/15 rounded-xs">
                  <div className="flex justify-between items-baseline mb-1">
                    <strong className="text-sm font-bold text-[#1F1F1F]">China</strong>
                    <span className="font-mono font-bold text-[11px] text-[#0F3D44] uppercase tracking-wider">Citizen</span>
                  </div>
                  <p className="text-[#2B2B2B] leading-relaxed">
                    Permanent citizen work rights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO PROJECTS PREVIEW (Qingyun Que, Jinmao Mansion, Vanke Yinyue) */}
      <section className="space-y-6 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#2B2B2B]/15 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44] mb-1">
              <span className="font-mono">04</span>
              <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
              <span>Featured Work Preview</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1F1F1F]">
              Primary Hero Cases
            </h2>
          </div>

          <button
            onClick={() => onNavigateTab('work')}
            className="text-xs font-bold uppercase tracking-wider text-[#0F3D44] hover:underline flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <span>Open All 9 Archive Projects</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* 3 Hero Cards Compact Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroCases.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => {
                if (onSelectProject) {
                  onSelectProject(project);
                } else {
                  onNavigateTab('work');
                }
              }}
              className="p-4 bg-white/70 border border-[#2B2B2B]/15 rounded-xs hover:border-[#0F3D44]/60 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center text-[11px] font-mono text-[#0F3D44] font-bold mb-2">
                  <span>0{idx + 1} · {project.company}</span>
                  <span className="text-[#2B2B2B]/70">{project.year}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1F1F1F] group-hover:text-[#0F3D44] transition-colors leading-tight">
                  {project.name}
                </h3>
                {project.chineseName && (
                  <p className="text-xs text-[#2B2B2B]/75 font-normal mt-0.5">
                    {project.chineseName}
                  </p>
                )}
                <p className="text-xs text-[#2B2B2B] mt-2.5 line-clamp-3 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-4 pt-3 border-t border-[#2B2B2B]/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="block font-serif font-bold text-sm text-[#0F3D44]">
                      {project.metrics[0].value}
                    </span>
                    <span className="text-[10px] text-[#2B2B2B]/75 font-medium">
                      {project.metrics[0].label}
                    </span>
                  </div>
                  <span className="text-xs text-[#0F3D44] font-bold group-hover:translate-x-1 transition-transform">
                    Case Study →
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* SECTION F: CONTACT (RECOGNIZABLE ICONS, NO PHONE NUMBER) */}
      <section className="p-6 sm:p-8 bg-[#ECE8DF] border border-[#2B2B2B]/15 rounded-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold block mb-1">
              Direct Inquiries
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1F1F1F]">
              Contact me
            </h3>
            <p className="text-xs text-[#2B2B2B] mt-1">
              Available for full-time internship starting January 2027 in Singapore.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0F3D44] text-[#F7F4EF] text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#0F3D44]/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{profile.email}</span>
            </a>

            <button
              onClick={() => setShowLinkedInPlaceholder(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#2B2B2B]/35 bg-white/70 text-[#1F1F1F] hover:border-[#0F3D44] hover:text-[#0F3D44] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </button>

            <a
              href={profile.cvUrl}
              download="Zhang_Chenxi_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#2B2B2B]/35 bg-white/70 text-[#1F1F1F] hover:border-[#0F3D44] hover:text-[#0F3D44] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Skyline Motif */}
      <div className="pt-4 pb-2">
        <CitySkyline opacity={0.2} />
      </div>

      {showLinkedInPlaceholder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#F7F4EF] border border-[#2B2B2B]/20 p-6 max-w-sm w-full rounded-xs shadow-xl">
            <h4 className="font-serif text-lg font-medium text-[#1F1F1F] mb-2">LinkedIn Profile</h4>
            <p className="text-xs text-[#2B2B2B]/85 leading-relaxed mb-4">
              [TBD: Per prompt guardrails, Zhang Chenxi’s direct LinkedIn URL will be linked here once provided by the user.]
            </p>
            <button
              onClick={() => setShowLinkedInPlaceholder(false)}
              className="w-full py-2 bg-[#0F3D44] text-[#F7F4EF] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#0F3D44]/90 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
