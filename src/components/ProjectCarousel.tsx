import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface CarouselSlide {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectCarouselProps {
  images: CarouselSlide[];
  aspectRatio?: string;
  className?: string;
  autoPlayInterval?: number; // default 5000ms (5s)
  onImageClick?: () => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  aspectRatio = 'aspect-[16/10]',
  className = '',
  autoPlayInterval = 5000,
  onImageClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Touch tracking for mobile swipe gestures
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Check for prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
    }
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Automatic rotation timer
  useEffect(() => {
    if (prefersReducedMotion || isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [goToNext, autoPlayInterval, isPaused, prefersReducedMotion, images.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) {
      setIsPaused(false);
      return;
    }

    const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
    const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

    // Only register horizontal swipe if movement is predominantly horizontal
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        // Swiped left -> next
        goToNext();
      } else {
        // Swiped right -> prev
        goToPrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
    setIsPaused(false);
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      role="region"
      aria-label="Project image carousel"
      aria-roledescription="carousel"
      className={`relative overflow-hidden bg-[#ECE8DF] border border-[#2B2B2B]/15 rounded-xs group select-none ${aspectRatio} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={onImageClick}
    >
      {/* Slides with smooth, restrained crossfade */}
      {images.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${images.length}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 w-full h-full transition-opacity ${
              prefersReducedMotion ? 'duration-0' : 'duration-1000 ease-in-out'
            } ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-contain"
            />
          </div>
        );
      })}

      {/* Manual Controls: Arrows (Visible on hover and on touch devices) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/35 hover:bg-black/60 text-[#F7F4EF] flex items-center justify-center backdrop-blur-xs transition-all opacity-80 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/35 hover:bg-black/60 text-[#F7F4EF] flex items-center justify-center backdrop-blur-xs transition-all opacity-80 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Minimal Pagination Dots */}
          <div
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/25 backdrop-blur-xs"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((_, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={isCurrent ? 'true' : 'false'}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isCurrent
                      ? 'w-4 h-1.5 bg-[#F7F4EF]'
                      : 'w-1.5 h-1.5 bg-[#F7F4EF]/55 hover:bg-[#F7F4EF]/85'
                  }`}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
