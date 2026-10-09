import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { CountUpMetric } from '../components/CountUpMetric';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { ProjectImage } from '../components/ProjectImage';

interface AboutViewProps {
  onNavigateTab: (tab: 'experience' | 'work' | 'ai-skills') => void;
  onSelectProject?: (project: Project) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigateTab,
  onSelectProject,
}) => {
  const {
    profile,
    snapshotFigures,
    aboutStory,
    workAuthorization,
    educationCredentials,
    projects,
  } = PORTFOLIO_DATA;

  // The 3 Level 01 projects in exact approved order: Jinmao Mansion -> Vanke Yinyue -> Longfor Qingyun Que
  const heroCases = projects.filter((p) => p.level === 'hero');

  // Trigger Career Snapshot count-up once upon entering viewport with approved threshold
  const [snapshotTriggered, setSnapshotTriggered] = useState(false);
  const snapshotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (snapshotTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setSnapshotTriggered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4, // Approved 0.35 to 0.5 meaningful visibility threshold
        rootMargin: '0px 0px -40px 0px', // Ensures section is visibly into viewport before start
      }
    );

    if (snapshotRef.current) {
      observer.observe(snapshotRef.current);
    }

    return () => observer.disconnect();
  }, [snapshotTriggered]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12 sm:space-y-16">
      {/* SECTION A: INTRODUCTION, BIOGRAPHY & SUPPORTING MODULES */}
      <section className="pt-2 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Personal Identity, Positioning, CTA, Biography, Supporting Modules */}
          <div className="lg:col-span-8 space-y-6">
            <div className="text-xs tracking-widest uppercase font-bold text-[#0F3D44]">
              <span>SINGAPORE · SINGAPORE MANAGEMENT UNIVERSITY</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F1F1F] leading-[1.08]">
                {profile.name}
              </h1>
              <p className="text-sm sm:text-base font-sans font-bold tracking-wide text-[#0F3D44] uppercase">
                Marketing Strategy × Business Analytics × AI
              </p>
            </div>

            {/* APPROVED PROFESSIONAL POSITIONING */}
            <div className="p-5 sm:p-6 bg-[#EAE5DA]/55 border-l-3 border-[#0F3D44] rounded-r-xs">
              <p className="font-sans text-base sm:text-lg text-[#1F1F1F] font-normal leading-relaxed">
                "{profile.positioning}"
              </p>
            </div>

            {/* Quick Exploration CTA Buttons */}
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

            {/* BIOGRAPHY */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44]">
                <span className="font-mono">01</span>
                <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
                <span>Biography</span>
              </div>
              <p className="font-sans text-base sm:text-lg text-[#1F1F1F] font-normal leading-relaxed">
                {aboutStory}
              </p>
            </div>
          </div>

          {/* Right Column: Portrait Frame + Restored Portrait Information Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-xs sm:max-w-sm sticky top-24">
              <div className="aspect-[4/5] bg-[#ECE8DF] border border-[#2B2B2B]/20 rounded-xs overflow-hidden shadow-xs relative">
                <img
                  src={profile.portraitUrl}
                  alt="Zhang Chenxi — Professional Portrait"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>

              {/* RESTORED PORTRAIT INFORMATION CARD (Directly below portrait) */}
              <div className="mt-3 p-3.5 sm:p-4 bg-white border border-[#2B2B2B]/15 rounded-xs shadow-2xs">
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[#0F3D44] uppercase tracking-wider font-bold">
                      Location:
                    </span>
                    <span className="text-[#1F1F1F] font-bold text-right font-mono">
                      Singapore
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[#0F3D44] uppercase tracking-wider font-bold">
                      Affiliation:
                    </span>
                    <span className="text-[#1F1F1F] font-bold text-right font-mono">
                      SMU LKCSB
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[#0F3D44] uppercase tracking-wider font-bold">
                      Degree:
                    </span>
                    <span className="text-[#0F3D44] font-bold text-right font-mono">
                      MSc in Business AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: CAREER SNAPSHOT (WITH VIEWPORT COUNT-UP ANIMATION) */}
      <section
        ref={snapshotRef}
        className="border-t border-b border-[#2B2B2B]/15 py-8 sm:py-10"
      >
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44] mb-6">
          <span className="font-mono">02</span>
          <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
          <span>Career Snapshot</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5">
          {snapshotFigures.map((fig, idx) => (
            <CountUpMetric
              key={idx}
              target={fig.target}
              suffix={fig.suffix}
              metric={fig.metric}
              prefix={fig.prefix}
              unit={fig.unit}
              detail={fig.detail}
              trigger={snapshotTriggered}
            />
          ))}
        </div>
      </section>

      {/* SECTION C: EDUCATION (THE THREE ACADEMIC INSTITUTIONS) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44] mb-2">
          <span className="font-mono">03</span>
          <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
          <span>Education Credentials</span>
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

        {/* WORK AUTHORIZATION CARD (Clean placement outside Skills) */}
        <div className="mt-6 p-5 sm:p-6 bg-[#ECE8DF]/60 border border-[#2B2B2B]/20 rounded-xs space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
            Work Authorization
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
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
      </section>

      {/* SECTION D: FEATURED WORK PREVIEW (LEVEL 01: Jinmao -> Yinyue -> Qingyun Que) */}
      <section className="space-y-6 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#2B2B2B]/15 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44] mb-1">
              <span className="font-mono">04</span>
              <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
              <span>Featured Work Preview</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
              Project Strategy & Planning
            </h2>
          </div>
          <button
            onClick={() => onNavigateTab('work')}
            className="text-xs font-bold uppercase tracking-wider text-[#0F3D44] hover:underline flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <span>Open All Project Archive Cases</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* 3 Level 01 Cards in Exact Sequence: Jinmao -> Yinyue -> Qingyun Que */}
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
                {/* Responsive Project Media Area near top of each Level 01 card */}
                <div className="w-full mb-3.5 overflow-hidden rounded-xs border border-[#2B2B2B]/10 bg-[#ECE8DF]">
                  {project.carouselImages && project.carouselImages.length > 1 ? (
                    <ProjectCarousel
                      images={project.carouselImages}
                      aspectRatio="16/10"
                      className="w-full"
                    />
                  ) : (
                    <ProjectImage
                      src={project.primaryImage}
                      alt={project.name}
                      aspectRatio="16/10"
                    />
                  )}
                </div>

                <div className="flex justify-between items-center text-[11px] font-mono text-[#0F3D44] font-bold mb-2">
                  <span>0{idx + 1} · {project.company}</span>
                  <span className="text-[#2B2B2B]/70">{project.year}</span>
                </div>
                <h3 className="font-sans text-lg sm:text-xl font-bold text-[#1F1F1F] group-hover:text-[#0F3D44] transition-colors leading-tight">
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
                    <span className="block font-sans font-bold text-sm text-[#0F3D44]">
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

      {/* SECTION E: CONTACT ME */}
      <section className="p-6 sm:p-8 bg-[#ECE8DF] border border-[#2B2B2B]/15 rounded-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold block mb-1">
              Direct Inquiries
            </span>
            <h3 className="font-sans text-2xl font-bold text-[#1F1F1F]">
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

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#2B2B2B]/35 bg-white/70 text-[#1F1F1F] hover:border-[#0F3D44] hover:text-[#0F3D44] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current text-[#0F3D44]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.cvUrl}
              download="Zhang_Chenxi_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#2B2B2B]/35 bg-white/70 text-[#1F1F1F] hover:border-[#0F3D44] hover:text-[#0F3D44] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#0F3D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
