import React from 'react';
import { CareerStop } from '../data/portfolioData';

interface TimelineStopProps {
  stop: CareerStop;
  index: number;
  total: number;
}

export const TimelineStop: React.FC<TimelineStopProps> = ({
  stop,
  index,
  total,
}) => {
  const isEducation = stop.type === 'Education';

  return (
    <div className="relative group">
      {/* Vertical connector line */}
      {index < total - 1 && (
        <div
          className="absolute left-4 top-10 bottom-0 w-[1.5px] bg-[#2B2B2B]/20 group-hover:bg-[#0F3D44]/40 transition-colors"
          aria-hidden="true"
        />
      )}

      <div className="flex items-start space-x-5 pb-8 sm:pb-10">
        {/* Node indicator */}
        <div className="relative z-10 flex-shrink-0 mt-1">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-105 ${
              isEducation
                ? 'bg-[#E8A598]/25 border-[#E8A598] text-[#0F3D44]'
                : 'bg-[#0F3D44]/15 border-[#0F3D44] text-[#0F3D44]'
            }`}
          >
            {isEducation ? (
              /* Education Cap Icon */
              <svg className="w-4 h-4 text-[#0F3D44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            ) : (
              /* Work Briefcase / Building Icon */
              <svg className="w-4 h-4 text-[#0F3D44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            )}
          </div>
        </div>

        {/* Content Box */}
        <div className="flex-grow bg-[#F7F4EF] border border-[#2B2B2B]/15 rounded-xs p-5 sm:p-7 hover:border-[#0F3D44]/50 hover:shadow-xs transition-all">
          {/* Header Row: City, Years, Type indicator */}
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-2xl font-bold text-[#1F1F1F]">
                {stop.city}
              </span>
              <span className="text-xs uppercase tracking-wider font-mono font-bold px-2 py-0.5 border rounded-xs bg-[#0F3D44]/10 text-[#0F3D44] border-[#0F3D44]/25">
                0{index + 1}
              </span>
            </div>
            <span className="font-mono text-xs text-[#2B2B2B] font-bold tracking-wider">
              {stop.years}
            </span>
          </div>

          {/* Narrative capability label */}
          <div className="mb-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F3D44] font-bold block">
              Strategic Phase: {stop.narrativeLabel}
            </span>
          </div>

          {/* Organisation & Official Role */}
          <div className="mb-4 pb-3 border-b border-[#2B2B2B]/12">
            <h4 className="font-sans text-base sm:text-lg font-bold text-[#1F1F1F]">
              {stop.organisation}
            </h4>
            <p className="font-serif text-lg sm:text-xl text-[#0F3D44] font-semibold mt-0.5">
              {stop.role}
            </p>
          </div>

          {/* Selected Achievements / Responsibilities */}
          <div className="space-y-2.5">
            <h5 className="text-[11px] tracking-wider uppercase font-bold text-[#0F3D44]">
              Selected Achievements & Impact
            </h5>
            <ul className="space-y-2">
              {stop.achievements.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-[#1F1F1F] font-normal leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D44] mt-2 mr-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional notes */}
          {stop.notes && (
            <p className="mt-3 pt-2.5 border-t border-[#2B2B2B]/12 text-xs italic text-[#2B2B2B]/85 font-medium">
              {stop.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
