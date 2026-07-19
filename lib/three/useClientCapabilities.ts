'use client';

import { useEffect, useState } from 'react';
import {
  detectWebGL,
  getPerformanceTier,
  isCoarsePointer,
  prefersReducedMotion,
  type PerformanceTier,
} from './capabilities';

export type ClientCapabilities = {
  mounted: boolean;
  webgl: boolean;
  tier: PerformanceTier;
  reducedMotion: boolean;
  coarsePointer: boolean;
};

const initial: ClientCapabilities = {
  mounted: false,
  webgl: false,
  tier: 'mid',
  reducedMotion: false,
  coarsePointer: false,
};

// Resolves device capabilities on the client and keeps `reducedMotion`
// live via matchMedia. Returns `mounted: false` during SSR / first paint so
// callers can render the static fallback until the client takes over.
export function useClientCapabilities(): ClientCapabilities {
  const [caps, setCaps] = useState<ClientCapabilities>(initial);

  useEffect(() => {
    const compute = (): ClientCapabilities => ({
      mounted: true,
      webgl: detectWebGL(),
      tier: getPerformanceTier(),
      reducedMotion: prefersReducedMotion(),
      coarsePointer: isCoarsePointer(),
    });

    setCaps(compute());

    if (!window.matchMedia) return;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = () =>
      setCaps((prev) => ({ ...prev, reducedMotion: motionQuery.matches }));

    // Safari <14 uses addListener/removeListener.
    if (motionQuery.addEventListener) motionQuery.addEventListener('change', onMotionChange);
    else motionQuery.addListener(onMotionChange);

    return () => {
      if (motionQuery.removeEventListener) motionQuery.removeEventListener('change', onMotionChange);
      else motionQuery.removeListener(onMotionChange);
    };
  }, []);

  return caps;
}
