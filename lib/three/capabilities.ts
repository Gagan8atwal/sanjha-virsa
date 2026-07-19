// Client-only capability detection for the 3D layer.
// Everything here must be called from the browser (guard against SSR).

export type PerformanceTier = 'high' | 'mid' | 'low';

export function detectWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    return Boolean(gl);
  } catch {
    return false;
  }
}

export function isCoarsePointer(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(pointer: coarse)').matches;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// A conservative device tier used to scale polygon count, shadows,
// pixel ratio, and effects. Never throws; defaults to 'mid'.
export function getPerformanceTier(): PerformanceTier {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return 'mid';

  const nav = navigator as Navigator & { deviceMemory?: number };
  const memory = typeof nav.deviceMemory === 'number' ? nav.deviceMemory : undefined;
  const cores = typeof nav.hardwareConcurrency === 'number' ? nav.hardwareConcurrency : undefined;
  const coarse = isCoarsePointer();
  const smallViewport = Math.min(window.innerWidth, window.innerHeight) <= 480;

  // Low: known-weak signals.
  if ((memory !== undefined && memory <= 3) || (cores !== undefined && cores <= 3)) return 'low';
  if (coarse && smallViewport && (cores === undefined || cores <= 6)) return 'low';

  // High: strong desktop signals.
  if (!coarse && (cores === undefined || cores >= 8) && (memory === undefined || memory >= 8)) {
    return 'high';
  }

  return 'mid';
}

// Cap the device pixel ratio per tier to protect fill-rate on retina/mobile.
export function dprForTier(tier: PerformanceTier): [number, number] {
  switch (tier) {
    case 'high':
      return [1, 2];
    case 'mid':
      return [1, 1.5];
    case 'low':
    default:
      return [1, 1];
  }
}
