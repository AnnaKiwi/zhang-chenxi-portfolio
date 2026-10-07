import React, { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  sourceRef?: string;
  className?: string;
  aspectRatio?: string;
  projectName?: string;
  chineseName?: string;
  onClick?: () => void;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  caption,
  sourceRef,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  projectName,
  chineseName,
  onClick,
}) => {
  const [hasError, setHasError] = useState(false);
  const filename = src.split('/').pop() || src;
  const isRealAsset =
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('/Images/') ||
    src.startsWith('/images/') ||
    src.startsWith('/jinmao/') ||
    src.startsWith('/portrait/') ||
    src.startsWith('/qingyunque/') ||
    src.startsWith('/yinyue/');

  if (isRealAsset) {
    return (
      <div
        onClick={onClick}
        className={`relative overflow-hidden bg-[#ECE8DF] border border-[#2B2B2B]/15 rounded-xs transition-all duration-300 group ${aspectRatio} ${className} ${
          onClick ? 'cursor-pointer hover:border-[#0F3D44]/60' : ''
        }`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#ECE8DF] border border-[#2B2B2B]/15 rounded-xs transition-all duration-300 group ${aspectRatio} ${className} ${
        onClick ? 'cursor-pointer hover:border-[#0F3D44]/60' : ''
      }`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        /* Restrained, neutral architectural placeholder as strictly specified */
        <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#F5F2EB] to-[#EAE5DA] text-[#1F1F1F] relative select-none">
          {/* Subtle architectural grid lines */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #2B2B2B 1px, transparent 1px), linear-gradient(to bottom, #2B2B2B 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Top header */}
          <div className="relative z-10 flex items-start justify-between gap-2.5">
            <div>
              <span className="text-[10px] tracking-wider uppercase font-bold text-[#0F3D44] block">
                Visual Evidence
              </span>
              {projectName && (
                <div className="mt-0.5">
                  <h4 className="text-sm font-serif font-bold text-[#1F1F1F] leading-tight">
                    {projectName}
                  </h4>
                  {chineseName && (
                    <span className="text-xs text-[#2B2B2B]/80 font-sans font-medium block">
                      {chineseName}
                    </span>
                  )}
                </div>
              )}
            </div>

            {sourceRef && (
              <span className="text-[11px] font-mono font-bold text-[#0F3D44] bg-[#0F3D44]/10 px-2 py-0.5 border border-[#0F3D44]/25 rounded-xs shrink-0">
                {sourceRef}
              </span>
            )}
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 my-auto py-1 text-center flex flex-col items-center justify-center">
            <div className="w-9 h-9 mb-1.5 rounded border border-[#2B2B2B]/30 flex items-center justify-center text-[#2B2B2B]/60">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            {caption ? (
              <p className="text-xs text-[#1F1F1F] font-medium max-w-xs line-clamp-2 px-1 leading-relaxed">
                {caption}
              </p>
            ) : (
              <p className="text-xs text-[#2B2B2B] font-medium">
                Project Image: {filename}
              </p>
            )}
          </div>

          {/* Bottom filename info */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#2B2B2B] border-t border-[#2B2B2B]/15 pt-1.5 font-medium">
            <span>/Images/{filename}</span>
            <span className="text-[#0F3D44] font-bold">Ready for asset pass</span>
          </div>
        </div>
      )}

      {/* Subtle overlay indicator on hover if clickable */}
      {onClick && (
        <div className="absolute inset-0 bg-[#0F3D44]/0 group-hover:bg-[#0F3D44]/5 transition-colors pointer-events-none" />
      )}
    </div>
  );
};
