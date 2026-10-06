import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [showLinkedInPlaceholder, setShowLinkedInPlaceholder] = useState(false);

  return (
    <footer className="border-t border-[#2B2B2B]/15 bg-[#F7F4EF] py-8 sm:py-10 px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-sm">
        {/* Name and identity */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="font-serif font-medium text-lg text-[#1F1F1F]">
            {PORTFOLIO_DATA.profile.name}
          </span>
          <span className="hidden sm:inline text-[#2B2B2B]/30">|</span>
          <span className="text-xs text-[#2B2B2B]/85 font-medium">
            Brand & Marketing Strategist · Business AI
          </span>
        </div>

        {/* Global Contact Access with Recognizable Icons */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-[#1F1F1F]">
          {/* Email with icon */}
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="inline-flex items-center gap-1.5 text-[#1F1F1F] hover:text-[#0F3D44] transition-colors"
          >
            <svg className="w-4 h-4 text-[#0F3D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{PORTFOLIO_DATA.profile.email}</span>
          </a>

          {/* LinkedIn with icon */}
          <button
            onClick={() => setShowLinkedInPlaceholder(true)}
            className="inline-flex items-center gap-1.5 text-[#1F1F1F] hover:text-[#0F3D44] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 text-[#0F3D44] fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </button>

          {/* Download CV with icon */}
          <a
            href={PORTFOLIO_DATA.profile.cvUrl}
            download="Zhang_Chenxi_CV.pdf"
            className="inline-flex items-center gap-1.5 text-[#0F3D44] hover:text-[#0F3D44]/80 font-semibold transition-colors"
          >
            <svg className="w-4 h-4 text-[#0F3D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download CV</span>
          </a>

          <span className="text-[#2B2B2B]/30 hidden sm:inline">·</span>

          <span className="text-[#2B2B2B]/70 font-sans">
            Built with Google AI Studio
          </span>
        </div>
      </div>

      {showLinkedInPlaceholder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#F7F4EF] border border-[#2B2B2B]/20 p-6 max-w-sm w-full rounded-xs shadow-xl">
            <h4 className="font-serif text-lg font-medium text-[#1F1F1F] mb-2">LinkedIn Profile</h4>
            <p className="text-xs text-[#2B2B2B]/85 leading-relaxed mb-4">
              [TBD: Zhang Chenxi’s LinkedIn URL is kept as an intentional placeholder until supplied, per prompt instructions.]
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
    </footer>
  );
};
