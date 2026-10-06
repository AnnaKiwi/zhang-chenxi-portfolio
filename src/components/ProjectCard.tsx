import React from 'react';
import { Project } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';
import { ProjectCarousel } from './ProjectCarousel';

interface ProjectCardProps {
  project: Project;
  onOpenDetail: (project: Project) => void;
  isHero?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetail,
  isHero = false,
}) => {
  return (
    <article
      onClick={() => onOpenDetail(project)}
      className={`group cursor-pointer flex flex-col bg-[#F7F4EF] border border-[#2B2B2B]/15 rounded-xs transition-all duration-300 hover:border-[#0F3D44]/60 hover:shadow-sm ${
        isHero ? 'md:grid md:grid-cols-12 md:gap-7 items-center p-5 sm:p-6 md:p-7' : 'p-4 sm:p-5'
      }`}
    >
      {/* Visual Image Representation */}
      <div className={isHero ? 'md:col-span-7' : 'w-full mb-4'}>
        {project.carouselImages && project.carouselImages.length > 1 ? (
          <ProjectCarousel
            images={project.carouselImages}
            aspectRatio={isHero ? 'aspect-[16/10]' : 'aspect-[16/11]'}
            onImageClick={() => onOpenDetail(project)}
          />
        ) : (
          <ProjectImage
            src={project.primaryImage}
            alt={`${project.name} - ${project.company}`}
            projectName={project.name}
            chineseName={project.chineseName}
            sourceRef={project.evidence[0]?.sourceRef}
            caption={project.evidence[0]?.caption}
            aspectRatio={isHero ? 'aspect-[16/10]' : 'aspect-[16/11]'}
          />
        )}
      </div>

      {/* Content & Metadata */}
      <div className={isHero ? 'md:col-span-5 flex flex-col justify-between mt-5 md:mt-0' : 'flex flex-col flex-grow justify-between'}>
        <div>
          {/* Metadata Row: Category, City, Year (clean text with typographic separators, NO pills) */}
          <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#2B2B2B] font-sans mb-2.5">
            <span className="font-semibold text-[#0F3D44]">
              {project.categories.join(' · ')}
            </span>
            <span aria-hidden="true" className="text-[#2B2B2B]/40 font-bold">/</span>
            <span className="font-medium text-[#2B2B2B]">{project.city}</span>
            <span aria-hidden="true" className="text-[#2B2B2B]/40 font-bold">/</span>
            <span className="font-mono text-[#2B2B2B]/80 font-medium">{project.year}</span>
          </div>

          {/* Titles */}
          <div className="mb-2.5">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1F1F1F] group-hover:text-[#0F3D44] transition-colors leading-tight">
              {project.name}
            </h3>
            {project.chineseName && (
              <span className="font-serif text-base sm:text-lg text-[#2B2B2B]/75 font-normal block mt-0.5">
                {project.chineseName}
              </span>
            )}
          </div>

          {/* Company Kicker */}
          <p className="text-xs uppercase tracking-wider text-[#0F3D44] font-semibold mb-2.5">
            {project.company}
          </p>

          {/* Overview text */}
          <p className="text-sm text-[#2B2B2B] font-normal leading-relaxed line-clamp-3 mb-4">
            {project.overview}
          </p>

          {/* Metrics preview if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#2B2B2B]/12 mb-4">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx}>
                  <span className="block text-base font-serif font-bold text-[#0F3D44]">
                    {m.value}
                  </span>
                  <span className="block text-[11px] text-[#2B2B2B]/85 font-medium tracking-tight">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View Case Study Link */}
        <div className="pt-2 flex items-center text-xs tracking-wider uppercase font-semibold text-[#0F3D44] group-hover:translate-x-1 transition-transform">
          <span>Explore Case Study</span>
          <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </article>
  );
};
