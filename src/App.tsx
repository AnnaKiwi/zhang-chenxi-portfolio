import React, { useState } from 'react';
import { Header, NavTab } from './components/Header';
import { Footer } from './components/Footer';
import { AboutView } from './views/AboutView';
import { ExperienceView } from './views/ExperienceView';
import { SelectedWorkView } from './views/SelectedWorkView';
import { AiSkillsView } from './views/AiSkillsView';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('about');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleNavigateTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#1F1F1F]">
      {/* Global Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleNavigateTab}
      />

      {/* Main Content Area (Compact, High Information Density) */}
      <main className="flex-grow pt-4 sm:pt-6">
        {activeTab === 'about' && (
          <AboutView
            onNavigateTab={handleNavigateTab}
            onSelectProject={handleOpenProject}
          />
        )}

        {activeTab === 'experience' && <ExperienceView />}

        {activeTab === 'work' && (
          <SelectedWorkView onSelectProject={handleOpenProject} />
        )}

        {activeTab === 'ai-skills' && <AiSkillsView />}
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProject}
      />

      {/* Global Minimal Footer */}
      <Footer />
    </div>
  );
}
