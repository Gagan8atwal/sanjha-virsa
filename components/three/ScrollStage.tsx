'use client';

import { Canvas } from '@react-three/fiber';
import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';
import { dprForTier, type PerformanceTier } from '../../lib/three/capabilities';
import { useClientCapabilities } from '../../lib/three/useClientCapabilities';
import { useScrollStage } from '../../lib/three/useScrollStage';
import AssetErrorBoundary from './AssetErrorBoundary';
import PerformanceGuard from './PerformanceGuard';
import SceneLoader from './SceneLoader';
import SceneSection, { type StoryMoment } from './SceneSection';

export type SceneRenderContext = {
  tier: PerformanceTier;
  reducedMotion: boolean;
  degraded: boolean;
  coarsePointer: boolean;
};

type Props = {
  ariaLabel: string;
  sections: StoryMoment[];
  renderScene: (progressRef: RefObject<number>, ctx: SceneRenderContext) => ReactNode;
  // Static, accessible, no-canvas fallback shown for no-WebGL / reduced motion.
  fallback: ReactNode;
  cameraInit?: { position: [number, number, number]; fov?: number };
  // Element id to jump to when the user chooses "Skip journey".
  skipTargetId?: string;
  progressLabel?: (activeIndex: number) => string;
};

// Reusable scroll-driven 3D stage: a sticky full-viewport canvas with real,
// readable HTML story panels scrolling over it on ordinary page scroll. Gates
// on device capability, pauses rendering when offscreen, caps pixel ratio by
// tier, and always exposes a skip control and a static fallback. This is the
// single shell every route-level scene is built on.
export default function ScrollStage({
  ariaLabel,
  sections,
  renderScene,
  fallback,
  cameraInit,
  skipTargetId,
  progressLabel,
}: Props) {
  const caps = useClientCapabilities();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [degraded, setDegraded] = useState(false);
  const [visible, setVisible] = useState(true);

  const use3D = caps.mounted && caps.webgl && !caps.reducedMotion;

  const { progressRef, progress, activeSection } = useScrollStage(wrapperRef, {
    sectionCount: sections.length,
    enabled: use3D,
  });

  // Pause the render loop entirely when the stage scrolls out of view.
  useEffect(() => {
    if (!use3D) return;
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '120px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [use3D]);

  const handleSkip = () => {
    if (!skipTargetId || typeof document === 'undefined') return;
    const target = document.getElementById(skipTargetId);
    target?.scrollIntoView({ behavior: caps.reducedMotion ? 'auto' : 'smooth', block: 'start' });
    if (target instanceof HTMLElement) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  };

  // ---- Static fallback (SSR, no WebGL, or reduced motion) --------------------
  if (!use3D) {
    return (
      <section aria-label={ariaLabel}>
        {fallback}
        <ul
          style={{
            display: 'grid',
            gap: '1rem',
            listStyle: 'none',
            margin: '1.25rem 0 0',
            padding: 0,
          }}
        >
          {sections.map((moment) => (
            <SceneSection key={moment.id} moment={moment} overlay={false} />
          ))}
        </ul>
      </section>
    );
  }

  // ---- Interactive 3D stage --------------------------------------------------
  const [minDpr, maxDpr] = dprForTier(caps.tier);

  return (
    <section aria-label={ariaLabel} style={{ position: 'relative' }}>
      {/* Progress + skip controls, pinned while the stage is in view. */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '10px clamp(0.75rem,3vw,1.5rem)',
          pointerEvents: 'none',
        }}
      >
        <div
          role="progressbar"
          aria-label="Journey progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          style={{
            flex: 1,
            height: 5,
            borderRadius: 999,
            background: 'rgba(255,255,255,0.22)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              height: '100%',
              background: '#e7b650',
              transition: 'width 0.12s linear',
            }}
          />
        </div>
        {progressLabel ? (
          <span
            aria-live="polite"
            style={{
              pointerEvents: 'none',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#fff8ed',
              textShadow: '0 1px 6px rgba(0,0,0,0.6)',
              whiteSpace: 'nowrap',
            }}
          >
            {progressLabel(activeSection)}
          </span>
        ) : null}
        {skipTargetId ? (
          <button
            type="button"
            onClick={handleSkip}
            style={{
              pointerEvents: 'auto',
              border: '1px solid rgba(255,255,255,0.35)',
              background: 'rgba(20,14,10,0.6)',
              color: '#fff8ed',
              borderRadius: 999,
              padding: '5px 12px',
              fontSize: 12,
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Skip journey ↓
          </button>
        ) : null}
      </div>

      <div ref={wrapperRef} style={{ position: 'relative', height: `${sections.length * 100}vh`, marginTop: '-45px' }}>
        {/* Pinned canvas. */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
            background: 'linear-gradient(180deg,#1a2740 0%,#31507a 40%,#e8b866 100%)',
          }}
        >
          <AssetErrorBoundary fallback={<div style={{ position: 'absolute', inset: 0 }}>{fallback}</div>}>
            <Canvas
              frameloop={visible ? 'always' : 'never'}
              dpr={[minDpr, maxDpr]}
              shadows={caps.tier === 'high'}
              camera={{ position: cameraInit?.position ?? [0, 3, 12], fov: cameraInit?.fov ?? 50 }}
              gl={{ antialias: caps.tier !== 'low', powerPreference: 'high-performance', alpha: false }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <Suspense fallback={<SceneLoader />}>
                {renderScene(progressRef, {
                  tier: caps.tier,
                  reducedMotion: caps.reducedMotion,
                  degraded,
                  coarsePointer: caps.coarsePointer,
                })}
              </Suspense>
              <PerformanceGuard onDegrade={setDegraded} />
            </Canvas>
          </AssetErrorBoundary>
          {/* Legibility vignette under the text panels. */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background:
                'radial-gradient(120% 80% at 50% 120%, rgba(20,14,10,0.55), transparent 60%)',
            }}
          />
        </div>

        {/* Readable story panels layered over the pinned canvas. */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {sections.map((moment, i) => (
            <SceneSection key={moment.id} moment={moment} overlay active={i === activeSection} />
          ))}
        </div>
      </div>
    </section>
  );
}
