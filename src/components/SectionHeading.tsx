import React from 'react';

interface SectionHeadingProps {
  number?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  kicker,
  title,
  subtitle,
  className = '',
  align = 'left',
}) => {
  return (
    <div className={`mb-8 sm:mb-10 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {/* Editorial Kicker */}
      {(number || kicker) && (
        <div className={`flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#0F3D44] mb-2 ${align === 'center' ? 'justify-center' : ''}`}>
          {number && <span className="font-mono text-[#0F3D44]">{number}</span>}
          {number && kicker && <span aria-hidden="true" className="text-[#2B2B2B]/40">/</span>}
          {kicker && <span>{kicker}</span>}
        </div>
      )}

      {/* Main Title */}
      <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1F1F] leading-[1.12]">
        {title}
      </h2>

      {/* Optional Editorial Subtitle */}
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg text-[#2B2B2B]/85 max-w-2xl font-normal leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {/* Architectural rule line */}
      <div className={`w-12 h-[1.5px] bg-[#0F3D44]/40 mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};
