import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export type NavTab = 'about' | 'experience' | 'work' | 'ai-skills';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience & Education' },
    { id: 'work', label: 'Selected Work' },
    { id: 'ai-skills', label: 'AI & Skills' },
  ];

  const handleNavClick = (id: NavTab) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F4EF]/95 backdrop-blur-md border-b border-[#2B2B2B]/15 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand / Name — Functions as link returning to About landing view */}
        <button
          onClick={() => handleNavClick('about')}
          className="text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F3D44] cursor-pointer"
        >
          <span className="font-sans text-xl sm:text-2xl tracking-tight font-bold text-[#1F1F1F] group-hover:text-[#0F3D44] transition-colors block">
            {PORTFOLIO_DATA.profile.name}
          </span>
          <span className="text-[10px] tracking-widest uppercase text-[#2B2B2B]/75 font-sans font-semibold block">
            Marketing Strategy × Business Analytics × AI
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-wide transition-all py-1.5 relative cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0F3D44] ${
                  isActive
                    ? 'text-[#0F3D44] font-bold'
                    : 'text-[#1F1F1F] hover:text-[#0F3D44] font-semibold'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0F3D44]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions: Download CV + LinkedIn */}
        <div className="hidden md:flex items-center space-x-3.5">
          {/* Download CV button */}
          <a
            href={PORTFOLIO_DATA.profile.cvUrl}
            download="Zhang_Chenxi_CV.pdf"
            className="inline-flex items-center justify-center px-4 py-2 text-xs tracking-wider uppercase font-semibold text-[#F7F4EF] bg-[#0F3D44] hover:bg-[#0F3D44]/90 transition-all rounded-xs shadow-xs focus-visible:ring-2 focus-visible:ring-[#0F3D44]"
          >
            <svg
              className="w-3.5 h-3.5 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </a>

          {/* Real Functional LinkedIn Icon Anchor */}
          <a
            href={PORTFOLIO_DATA.profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 text-[#1F1F1F] hover:text-[#0F3D44] transition-colors rounded-xs hover:bg-[#2B2B2B]/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0F3D44] cursor-pointer"
          >
            <svg className="w-4.5 h-4.5 fill-current text-[#0F3D44]" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href={PORTFOLIO_DATA.profile.cvUrl}
            download="Zhang_Chenxi_CV.pdf"
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F7F4EF] bg-[#0F3D44] rounded-xs"
          >
            CV
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#1F1F1F] hover:text-[#0F3D44] focus-visible:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2B2B2B]/15 bg-[#F7F4EF] px-5 py-4 space-y-2.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 text-sm ${
                activeTab === item.id
                  ? 'text-[#0F3D44] font-semibold pl-2 border-l-2 border-[#0F3D44]'
                  : 'text-[#1F1F1F] hover:text-[#0F3D44] font-medium'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#2B2B2B]/15 flex items-center justify-between">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="text-xs text-[#2B2B2B]/85 font-mono"
            >
              {PORTFOLIO_DATA.profile.email}
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#0F3D44] font-semibold cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
