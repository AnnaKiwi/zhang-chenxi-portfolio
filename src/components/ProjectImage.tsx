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
  isReserved?: boolean;
  reservedText?: string;
  onClick?: () => void;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  caption,
  sourceRef,
  className = '',
  aspectRatio,
  projectName,
  chineseName,
  isReserved = false,
  reservedText = 'VISUAL CASE MATERIALS TO BE ADDED',
  onClick,
}) => {
  const [hasError, setHasError] = useState(false);
  const [naturalAspect, setNaturalAspect] = useState<number | null>(null);

  const filename = src ? src.split('/').pop() || src : '';
  const isRealAsset =
    src &&
    !isReserved &&
    (src.startsWith('http://') ||
      src.startsWith('https://') ||
      src.startsWith('/Images/') ||
      src.startsWith('/images/'));

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight && naturalHeight > 0) {
      setNaturalAspect(naturalWidth / naturalHeight);
    }
  };

  const containerStyle: React.CSSProperties =
    aspectRatio
      ? {}
      : {
          aspectRatio: naturalAspect ? `${naturalAspect}` : '16 / 10',
        };

  const aspectClass = aspectRatio || '';

  // Reserved Project State (e.g. Level 02 Vanke Yinyue Product Launch)
  if (isReserved || !src) {
    return (
      <div
        onClick={onClick}
        style={containerStyle}
        className={`relative w-full overflow-hidden bg-[#ECE8DF] border border-[#2B2B2B]/20 rounded-xs transition-all duration-300 group ${aspectClass} ${className} ${
          onClick ? 'cursor-pointer hover:border-[#0F3D44]/60' : ''
        }`}
      >
        <div className="w-full h-full min-h-[220px] p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-[#F5F2EB] to-[#EAE5DA] text-[#1F1F1F] relative select-none">
          {/* Subtle architectural grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #2B2B2B 1px, transparent 1px), linear-gradient(to bottom, #2B2B2B 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top header */}
          <div className="relative z-10 flex items-start justify-between gap-2.5">
            <div>
              <span className="text-[10px] tracking-wider uppercase font-bold text-[#0F3D44] block">
                Visual Documentation
              </span>
              {projectName && (
                <div className="mt-0.5">
                  <h4 className="text-sm font-sans font-bold text-[#1F1F1F] leading-tight">
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
            <span className="text-[10px] font-mono font-bold text-[#0F3D44] bg-[#0F3D44]/10 px-2 py-0.5 border border-[#0F3D44]/25 rounded-xs shrink-0">
              Reserved Case
            </span>
          </div>

          {/* Center Graphic & Statement */}
          <div className="relative z-10 my-auto py-4 text-center flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 rounded border border-[#2B2B2B]/25 flex items-center justify-center text-[#0F3D44] bg-[#F7F4EF]/60 shadow-2xs">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-[#0F3D44] font-bold tracking-wider uppercase">
              {reservedText}
            </p>
            <p className="text-[11px] text-[#2B2B2B]/75 max-w-xs font-normal leading-relaxed">
              Archival launch event photography and media records reserved for subsequent portfolio release.
            </p>
          </div>

          {/* Bottom metadata */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#2B2B2B]/80 border-t border-[#2B2B2B]/15 pt-2 font-medium">
            <span>Portfolio Archive · Brand & Activations</span>
            <span className="text-[#0F3D44] font-bold">Position Reserved</span>
          </div>
        </div>

        {onClick && (
          <div className="absolute inset-0 bg-[#0F3D44]/0 group-hover:bg-[#0F3D44]/5 transition-colors pointer-events-none" />
        )}
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      style={containerStyle}
      className={`relative w-full overflow-hidden bg-[#ECE8DF] border border-[#2B2B2B]/15 rounded-xs transition-all duration-300 group ${aspectClass} ${className} ${
        onClick ? 'cursor-pointer hover:border-[#0F3D44]/60' : ''
      }`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
        />
      ) : (
        /* Restrained, neutral architectural placeholder */
        <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#F5F2EB] to-[#EAE5DA] text-[#1F1F1F] relative select-none">
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #2B2B2B 1px, transparent 1px), linear-gradient(to bottom, #2B2B2B 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="relative z-10 flex items-start justify-between gap-2.5">
            <div>
              <span className="text-[10px] tracking-wider uppercase font-bold text-[#0F3D44] block">
                Visual Evidence
              </span>
              {projectName && (
                <div className="mt-0.5">
                  <h4 className="text-sm font-sans font-bold text-[#1F1F1F] leading-tight">
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
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#2B2B2B] border-t border-[#2B2B2B]/15 pt-1.5 font-medium">
            <span>/Images/{filename}</span>
            <span className="text-[#0F3D44] font-bold">Ready for asset pass</span>
          </div>
        </div>
      )}
      {onClick && (
        <div className="absolute inset-0 bg-[#0F3D44]/0 group-hover:bg-[#0F3D44]/5 transition-colors pointer-events-none" />
      )}
    </div>
  );
};
