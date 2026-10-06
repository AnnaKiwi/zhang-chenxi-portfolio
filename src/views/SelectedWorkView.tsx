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

  // Implement filter-specific ordering per Section 11 & 13
  const getOrderedProjectsForFilter = (filter: Category): Project[] => {
    const byId = (id: string) => allProjects.find((p) => p.id === id);

    if (filter === 'All') {
      const orderedIds = [
        'tianjin-longfor-qingyunque',
        'suzhou-jinmao-mansion',
        'shenyang-vanke-yinyue',
        'jiangshan-mansion',
        'shengjing-chenyuan',
        'community-cultural-ip',
        'zhengzhou-content-marketing',
        'theatre-renovation-design',
        'cuore-della-citta',
      ];
      return orderedIds.map(byId).filter(Boolean) as Project[];
    }

    if (filter === 'Brand Strategy') {
      const orderedIds = [
        'tianjin-longfor-qingyunque',
        'suzhou-jinmao-mansion',
        'shenyang-vanke-yinyue',
      ];
      return orderedIds.map(byId).filter(Boolean) as Project[];
    }

    if (filter === 'Launch Events') {
      const orderedIds = [
        'jiangshan-mansion',
        'shengjing-chenyuan',
        'shenyang-vanke-yinyue',
        'suzhou-jinmao-mansion',
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

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1F1F1F] tracking-tight leading-[1.08]">
          Selected Work
        </h1>

        <p className="text-sm sm:text-base text-[#1F1F1F] font-normal max-w-3xl leading-relaxed">
          Evidence-based case studies spanning landmark property launches, enterprise digital marketing frameworks, and scenographic design roots.
        </p>

        {/* High-Readability Filter Navigation Bar (Section 14) */}
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
          {/* LEVEL 1: HERO CASES (1. Qingyun Que, 2. Jinmao Mansion, 3. Vanke Yinyue) */}
          <section className="space-y-6">
            <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
                  Level 01
                </span>
                <span className="text-sm font-serif font-medium text-[#1F1F1F]">
                  Featured Hero Cases
                </span>
              </div>
              <span className="text-xs text-[#2B2B2B] font-mono font-medium">
                3 cases (Ranked: Qingyun Que → Jinmao Mansion → Vanke Yinyue)
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

          {/* LEVEL 2: ADDITIONAL PROFESSIONAL WORK */}
          <section className="space-y-6 pt-2">
            <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
                  Level 02
                </span>
                <span className="text-sm font-serif font-medium text-[#1F1F1F]">
                  Additional Professional Work
                </span>
              </div>
              <span className="text-xs text-[#2B2B2B] font-mono font-medium">
                {additionalProjects.length} cases
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

          {/* LEVEL 3: DESIGN FOUNDATION */}
          <section className="space-y-6 pt-2">
            <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
                  Level 03
                </span>
                <span className="text-sm font-serif font-medium text-[#1F1F1F]">
                  Design Foundation (Academic Scenography & Architecture)
                </span>
              </div>
              <span className="text-xs text-[#2B2B2B] font-mono font-medium">
                {designFoundationProjects.length} cases
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
        /* Category-Filtered View: Using Filter-Specific Prioritized Ordering */
        <div className="space-y-6">
          <div className="border-b border-[#2B2B2B]/15 pb-2.5 flex items-baseline justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0F3D44] font-bold">
                Category: {activeFilter}
              </span>
            </div>
            <span className="text-xs text-[#2B2B2B] font-mono font-medium">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} (Prioritized order)
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
