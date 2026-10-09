import React, { useEffect, useState, useRef } from 'react';

export interface CountUpMetricProps {
  target: number;
  suffix?: string;
  prefix?: string;
  unit?: string;
  detail: string;
  trigger: boolean;
  metric?: string; // Optional backwards-compatibility fallback
}

export const CountUpMetric: React.FC<CountUpMetricProps> = ({
  target,
  suffix,
  prefix,
  unit,
  detail,
  trigger,
  metric,
}) => {
  // Ensure target is strictly an explicit positive number, never derived or parsed from strings when explicit target is passed
  const numericTarget =
    typeof target === 'number' && !isNaN(target)
      ? target
      : metric
        ? parseInt(metric.replace(/\D/g, ''), 10) || 0
        : 0;

  const resolvedSuffix =
    suffix !== undefined
      ? suffix
      : metric
        ? metric.replace(/^\d+/, '')
        : '';

  // Check prefers-reduced-motion synchronously
  const checkPrefersReducedMotion = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  };

  // State holds strictly the current numeric value being displayed
  const [currentValue, setCurrentValue] = useState<number>(() => {
    if (checkPrefersReducedMotion()) {
      return numericTarget;
    }
    return 0;
  });

  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!trigger || hasAnimatedRef.current) return;

    // Respect prefers-reduced-motion: immediate final values without animating
    if (checkPrefersReducedMotion()) {
      setCurrentValue(numericTarget);
      hasAnimatedRef.current = true;
      return;
    }

    hasAnimatedRef.current = true;

    // 2.1 seconds visible, controlled count-up duration (approved 1.8 to 2.4 seconds range)
    const duration = 2100;
    const startTime = performance.now();

    // Subtle, premium cubic easing curve (slows smoothly into final value)
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    let animationFrameId: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(Math.max(elapsed / duration, 0), 1);
      const eased = easeOutCubic(progress);

      if (progress >= 1) {
        // Guarantee final value is exactly the target (9, 4, 41, 22, 1)
        setCurrentValue(numericTarget);
      } else {
        // Intermediate progression:
        let stepNumber: number;
        if (numericTarget === 1) {
          // Coordinated progression for 1: stays at 0 during initial climb, then transitions to 1
          stepNumber = progress < 0.5 ? 0 : 1;
        } else {
          stepNumber = Math.min(numericTarget, Math.round(numericTarget * eased));
        }
        setCurrentValue(stepNumber);
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [trigger, numericTarget]);

  return (
    <div className="flex flex-col justify-between border-l-2 border-[#0F3D44] pl-4 py-1">
      <div>
        <div className="flex items-baseline gap-1.5 flex-wrap">
          {prefix && (
            <span className="text-xs sm:text-sm font-mono font-bold text-[#0F3D44] uppercase tracking-wider">
              {prefix.trim()}
            </span>
          )}
          <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-none">
            {currentValue}
            {resolvedSuffix}
          </span>
          {unit && (
            <span className="text-xs font-sans font-bold text-[#0F3D44] uppercase tracking-wider">
              {unit}
            </span>
          )}
        </div>
        <p className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider text-[#2B2B2B] mt-2.5 leading-snug">
          {detail}
        </p>
      </div>
    </div>
  );
};
