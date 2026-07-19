'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

export type ScrollStageState = {
  // 0..1 scroll progress across the whole stage.
  progressRef: RefObject<number>;
  // Progress mirrored into React state (throttled) for progress bars / labels.
  progress: number;
  // Index of the currently active section.
  activeSection: number;
};

type Options = {
  sectionCount: number;
  // When false (reduced motion / no webgl), progress is not tracked via rAF.
  enabled: boolean;
};

// Drives a "sticky canvas + tall scroll wrapper" stage using ordinary page
// scroll. No scroll hijacking, no wheel interception — the user always keeps
// native scroll, back/forward, and keyboard paging. Progress is stored in a
// ref (read by useFrame inside the Canvas without re-rendering React) and
// mirrored into state on a rAF cadence for lightweight UI (progress bar).
export function useScrollStage(
  wrapperRef: RefObject<HTMLElement>,
  { sectionCount, enabled }: Options,
): ScrollStageState {
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const wrapper = wrapperRef.current;
    if (!wrapper || typeof window === 'undefined') return;

    let frame = 0;
    let lastProgress = -1;
    let lastSection = -1;

    const measure = () => {
      frame = 0;
      const rect = wrapper.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? -rect.top / scrollable : 0;
      const clamped = Math.min(1, Math.max(0, raw));
      progressRef.current = clamped;

      // Only touch React state when the value changed meaningfully.
      if (Math.abs(clamped - lastProgress) > 0.001) {
        lastProgress = clamped;
        setProgress(clamped);
      }
      const section = Math.min(
        sectionCount - 1,
        Math.max(0, Math.round(clamped * (sectionCount - 1))),
      );
      if (section !== lastSection) {
        lastSection = section;
        setActiveSection(section);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [wrapperRef, sectionCount, enabled]);

  return { progressRef, progress, activeSection };
}
