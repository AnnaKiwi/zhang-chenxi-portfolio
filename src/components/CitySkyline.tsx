import React from 'react';

interface CitySkylineProps {
  className?: string;
  opacity?: number;
}

export const CitySkyline: React.FC<CitySkylineProps> = ({
  className = '',
  opacity = 0.22,
}) => {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-[#2B2B2B]"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        {/* Subtle ground baseline */}
        <line x1="0" y1="118" x2="1200" y2="118" stroke="currentColor" strokeWidth="0.75" />

        {/* Building silhouettes - Fine architectural outlines reminiscent of Shenyang, Tianjin, Suzhou, Singapore */}
        {/* Cluster 1: Bologna / European arches and low pavilions */}
        <path
          d="M 20 118 V 95 H 35 V 80 H 50 V 95 H 65 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 75 118 V 70 H 95 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 85 70 V 55 L 85 52"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        {/* Cluster 2: Northern Metro (Shenyang / Imperial palace eaves & towers) */}
        <path
          d="M 115 118 V 65 H 140 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 148 118 V 45 H 175 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <line x1="161.5" y1="45" x2="161.5" y2="30" stroke="currentColor" strokeWidth="0.75" />
        <path
          d="M 185 118 V 85 H 215 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        {/* Cluster 3: Zhengzhou / Central Plains towers */}
        <path
          d="M 230 118 V 50 H 255 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 265 118 V 35 H 290 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <line x1="277.5" y1="35" x2="277.5" y2="20" stroke="currentColor" strokeWidth="0.75" />

        {/* Cluster 4: Tianjin & Beijing high-rises */}
        <path
          d="M 310 118 V 60 H 335 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 345 118 V 25 H 375 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 355 25 V 12 H 365 V 25"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <line x1="360" y1="12" x2="360" y2="2" stroke="currentColor" strokeWidth="0.75" />

        {/* Suzhou / Oriental Gate & garden pavilion abstractions */}
        <path
          d="M 400 118 V 40 C 400 25, 430 25, 430 40 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 440 118 V 75 H 465 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 480 118 V 55 H 510 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        {/* Ferris wheel motif from portfolio cover */}
        <circle cx="560" cy="72" r="38" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="560" cy="72" r="8" stroke="currentColor" strokeWidth="0.7" />
        <line x1="560" y1="118" x2="560" y2="34" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
        <line x1="522" y1="72" x2="598" y2="72" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
        <line x1="533" y1="45" x2="587" y2="99" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
        <line x1="533" y1="99" x2="587" y2="45" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />

        {/* TV Spire Tower */}
        <line x1="625" y1="118" x2="625" y2="15" stroke="currentColor" strokeWidth="0.8" />
        <ellipse cx="625" cy="50" rx="9" ry="5" stroke="currentColor" strokeWidth="0.7" />
        <ellipse cx="625" cy="70" rx="14" ry="7" stroke="currentColor" strokeWidth="0.7" />

        {/* High-rise financial towers */}
        <path
          d="M 660 118 V 30 H 695 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <line x1="677.5" y1="30" x2="677.5" y2="10" stroke="currentColor" strokeWidth="0.75" />
        <path
          d="M 710 118 V 45 H 740 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 755 118 V 65 H 780 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        {/* Singapore Marina / Supertree / Contemporary skyline */}
        <path
          d="M 810 118 V 40 H 840 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 855 118 V 32 H 885 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 900 118 V 28 H 935 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        {/* Cantilever bridge / skydeck abstraction */}
        <path
          d="M 845 28 Q 890 22 945 28"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        {/* Far buildings tapering off */}
        <path
          d="M 965 118 V 60 H 990 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 1010 118 V 75 H 1035 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 1055 118 V 50 H 1080 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 1105 118 V 85 H 1130 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 1150 118 V 95 H 1175 V 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
};
