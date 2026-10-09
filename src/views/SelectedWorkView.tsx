import React, { useState } from 'react';
import { Category, PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';

interface SelectedWorkViewProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorkView: React.FC<SelectedWorkViewProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filterTabs: Category[] = [
    'All',
    'Brand Strategy',
    'Launch Events',
    'Content Marketing',
    'Art & Design',
  ];

  const allProjects = PORTFOLIO_DATA.projects;

  // Enforce explicit order per requirements:
  // Level 01: Jinmao -> Yinyue -> Qingyun Que
  // Level 02: Jiangshan -> Yinyue Launch -> Community IP -> Zhengzhou
  // Level 03: Theatre Renovation -> Cuore della citta
  const getOrderedProjectsForFilter = (filter: Category): Project[] => {
    const byId = (id: string) => allProjects.find((p) => p.id === id);

    if (filter === 'All') {
      const orderedIds = [
        'suzhou-jinmao-mansion',
        'shenyang-vanke-yinyue',
        'tianjin-longfor-qingyunque',
        'jiangshan-mansion',
        'shenyang-vanke-yinyue-launch',
        'community-cultural-ip',
        'zhengzhou-content-marketing',
        'theatre-renovation-design',
        'cuore-della-citta',
      ];
      return orderedIds.map(byId).filter(Boolean) as Project[];
    }

    if (filter === 'Brand Strategy') {
      const orderedIds = [
        'suzhou-jinmao-mansion',
        'shenyang-vanke-yinyue',
        'tianjin-longfor-qingyunque',
        'community-cultural-ip',
      ];
      return orderedIds.map(byId).filter(Boolean) as Project[];
    }

    if (filter === 'Launch Events') {
      const orderedIds = [
        'suzhou-jinmao-mansion',
        'shenyang-vanke-yinyue',
        'jiangshan-mansion',
        'shenyang-vanke-yinyue-launch',
      ];
      return orderedIds.map(byId).filter(Boolean) as Project[];
    }

    if (filter === 'Content Marketing') {
      const orderedIds = [
        'tianjin-longfor-qingyunque',
        'zhengzhou-content-marketing',
        'community-cultural-ip',
      ];
      return orderedIds.map(byId).filter(Boolean) as Project[];
    }

    if (filter === 'Art & Design') {
      const orderedIds = [
        'theatre-renovation-design',
        'cuore-della-citta',
      ];
      return orderedIds.map(byId).filter(Boolean) as Project[];
    }

    return allProjects.filter((p) => (p.categories as string[]).includes(filter));
  };

  const filteredProjects = getOrderedProjectsForFilter(activeFilter);

  // Group into levels when on 'All' view
  const isAllFilter = activeFilter === 'All';
  const heroProjects = filteredProjects.filter((p) => p.level === 'hero');
  const additionalProjects = filteredProjects.filter((p) => p.level === 'additional');
  const designFoundationProjects = filteredProjects.filter((p) => p.level === 'design-foundation');

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10 sm:space-y-12">
      {/* Editorial Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#0F3D44]">
          <span className="font-mono">03</span>
          <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>
          <span>Project Archive</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] tracking-tight leading-[1.08]">
          Selected Work
        </h1>

        <p className="text-sm sm:text-base text-[#1F1F1F] font-normal max-w-3xl leading-relaxed">
          Evidence-based case studies spanning landmark property launches, enterprise digital marketing frameworks, and scenographic design roots.
        </p>

        {/* High-Readability Filter Navigation Bar */}
        <div className="pt-4 flex flex-wrap items-center gap-2 border-b border-[#2B2B2B]/15 pb-4">
          <span className="text-xs uppercase tracking-wider text-[#1F1F1F] font-bold mr-2">
            Filter:
          </span>
          {filterTabs.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs tracking-wider uppercase font-bold rounded-xs transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#0F3D44] text-[#F7F4EF] border-[#0F3D44] shadow-xs ring-1 ring-[#0F3D44]'
                    : 'bg-white/80 text-[#1F1F1F] border-[#2B2B2B]/20 hover:bg-[#0F3D44]/10 hover:text-[#0F3D44]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* When ALL filter is selected: Structured by 3 Conceptual Levels */}
      {isAllFilter ? (
        <div className="space-y-12">
          {/* LEVEL 01 — PROJECT STRATEGY & PLANNING (01 Jinmao -> 02 Yinyue -> 03 Qingyun Que) */}
          <section className="space-y-6">
            <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
                  LEVEL 01
                </span>
                <span className="text-sm font-sans font-bold text-[#1F1F1F] uppercase tracking-wide">
                  PROJECT STRATEGY & PLANNING
                </span>
              </div>
              <span className="text-xs text-[#2B2B2B]/80 font-mono font-medium">
                3 PROJECTS
              </span>
            </div>

            <div className="space-y-8">
              {heroProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetail={onSelectProject}
                  isHero={true}
                />
              ))}
            </div>
          </section>

          {/* LEVEL 02 — BRAND & ACTIVATIONS */}
          <section className="space-y-6 pt-2">
            <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
                  LEVEL 02
                </span>
                <span className="text-sm font-sans font-bold text-[#1F1F1F] uppercase tracking-wide">
                  BRAND & ACTIVATIONS
                </span>
              </div>
              <span className="text-xs text-[#2B2B2B]/80 font-mono font-medium">
                {additionalProjects.length} PROJECTS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetail={onSelectProject}
                  isHero={false}
                />
              ))}
            </div>
          </section>

          {/* LEVEL 03 — DESIGN FOUNDATION */}
          <section className="space-y-6 pt-2">
            <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
                  LEVEL 03
                </span>
                <span className="text-sm font-sans font-bold text-[#1F1F1F] uppercase tracking-wide">
                  DESIGN FOUNDATION
                </span>
              </div>
              <span className="text-xs text-[#2B2B2B]/80 font-mono font-medium">
                {designFoundationProjects.length} PROJECTS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designFoundationProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetail={onSelectProject}
                  isHero={false}
                />
              ))}
            </div>
          </section>
        </div>
      ) : (
        /* Category-Filtered View */
        <div className="space-y-6">
          <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
                Category: {activeFilter}
              </span>
            </div>
            <span className="text-xs text-[#2B2B2B]/80 font-mono font-medium">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetail={onSelectProject}
                isHero={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
