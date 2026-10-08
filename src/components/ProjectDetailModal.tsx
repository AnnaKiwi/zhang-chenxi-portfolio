import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';
import { ProjectCarousel } from './ProjectCarousel';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/65 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#F7F4EF] text-[#1F1F1F] rounded-xs shadow-2xl border border-[#2B2B2B]/20 overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-7 py-3.5 bg-[#F7F4EF]/98 backdrop-blur-md border-b border-[#2B2B2B]/15">
          <div className="flex items-center gap-2 text-xs text-[#2B2B2B] font-mono">
            <span className="text-[#0F3D44] font-bold">{project.company}</span>
            <span>·</span>
            <span className="font-medium">{project.city}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-[#1F1F1F] hover:text-[#0F3D44] hover:bg-[#2B2B2B]/10 rounded-xs transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-8">
          {/* Header Block */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0F3D44] mb-2">
              <span>{project.categories.join(' / ')}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F1F1F] leading-tight">
              {project.name}
            </h2>

            {project.chineseName && (
              <p className="font-serif text-xl sm:text-2xl text-[#2B2B2B]/80 mt-0.5">
                {project.chineseName}
              </p>
            )}
          </div>

          {/* Key Metrics Grid if provided */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 p-4 bg-[#EAE5DA]/60 border border-[#2B2B2B]/15 rounded-xs">
              {project.metrics.map((metric, idx) => (
                <div key={idx}>
                  <span className="block font-serif text-xl sm:text-2xl font-bold text-[#0F3D44]">
                    {metric.value}
                  </span>
                  <span className="block text-xs text-[#2B2B2B] font-medium mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Primary Visual */}
          <div className="border border-[#2B2B2B]/15 rounded-xs overflow-hidden">
            {project.carouselImages && project.carouselImages.length > 1 ? (
              <ProjectCarousel
                images={project.carouselImages}
              />
            ) : (
              <ProjectImage
                src={project.primaryImage}
                alt={project.name}
                projectName={project.name}
                chineseName={project.chineseName}
                sourceRef={project.evidence[0]?.sourceRef}
                caption={project.evidence[0]?.caption}
              />
            )}
          </div>

          {/* Optional Video Evidence (Video-ready architecture, only shown when video assets are present) */}
          {project.videos && project.videos.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
                Video Evidence
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {project.videos.map((vid, vIdx) => (
                  <div key={vIdx} className="border border-[#2B2B2B]/15 rounded-xs overflow-hidden bg-black/5 p-3">
                    {vid.title && (
                      <p className="text-xs font-medium text-[#1F1F1F] mb-2">{vid.title}</p>
                    )}
                    <video
                      controls
                      poster={vid.poster}
                      className="w-full aspect-[16/9] object-cover bg-black"
                    >
                      <source src={vid.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Case Study Sections (Only where supported by source material) */}
          <div className="space-y-6 max-w-3xl">
            {/* 1. Project Overview */}
            {project.overview && (
              <section>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold mb-1.5">
                  01. Project Overview
                </h3>
                <p className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-normal">
                  {project.overview}
                </p>
              </section>
            )}

            {/* 2. Background / Challenge */}
            {project.backgroundChallenge && (
              <section>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold mb-1.5">
                  02. Background & Challenge
                </h3>
                <p className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-normal">
                  {project.backgroundChallenge}
                </p>
              </section>
            )}

            {/* 3. My Role */}
            {project.myRole && (
              <section>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold mb-1.5">
                  03. My Role & Leadership
                </h3>
                <p className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-normal">
                  {project.myRole}
                </p>
              </section>
            )}

            {/* 4. Strategy / Approach */}
            {project.strategyApproach && (
              <section>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold mb-1.5">
                  04. Strategy & Approach
                </h3>
                <p className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-normal">
                  {project.strategyApproach}
                </p>
              </section>
            )}

            {/* 5. Execution */}
            {project.execution && (
              <section>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold mb-1.5">
                  05. Execution & Tactics
                </h3>
                <p className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-normal">
                  {project.execution}
                </p>
              </section>
            )}

            {/* 6. Results */}
            {project.results && (
              <section className="p-5 bg-[#0F3D44]/8 border-l-3 border-[#0F3D44] rounded-r-xs">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold mb-1.5">
                  06. Verified Business Results
                </h3>
                <p className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-medium">
                  {project.results}
                </p>
              </section>
            )}

            {/* 7. Visual Evidence Archive */}
            {project.evidence && project.evidence.length > 0 && (
              <section className="pt-4 border-t border-[#2B2B2B]/12">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold mb-3">
                  07. Visual Evidence Archive
                </h3>
                <p className="text-xs text-[#2B2B2B] font-medium mb-3">
                  Preserved relationship between project narrative and Portfolio visual materials:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {project.evidence.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <ProjectImage
                        src={item.src || (item.filename.startsWith('/') ? item.filename : `/Images/${item.filename}`)}
                        alt={item.caption}
                        projectName={project.name}
                        sourceRef={item.sourceRef}
                        caption={item.caption}
                      />
                      <div className="flex items-start justify-between gap-2 text-xs text-[#2B2B2B] px-1 font-medium">
                        <span>{item.caption}</span>
                        <span className="font-mono text-[11px] text-[#0F3D44] shrink-0 font-bold">
                          {item.sourceRef}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-7 py-3.5 bg-[#ECE8DF] border-t border-[#2B2B2B]/15 flex items-center justify-between">
          <span className="text-xs text-[#2B2B2B] font-mono font-medium">
            Zhang Chenxi · Selected Work Archive
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#F7F4EF] bg-[#0F3D44] rounded-xs hover:bg-[#0F3D44]/90 transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
