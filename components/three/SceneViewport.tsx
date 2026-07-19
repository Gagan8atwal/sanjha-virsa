'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { dprForTier } from '../../lib/three/capabilities';
import { useClientCapabilities } from '../../lib/three/useClientCapabilities';
import AssetErrorBoundary from './AssetErrorBoundary';
import PerformanceGuard from './PerformanceGuard';
import SceneLoader from './SceneLoader';
import type { SceneRenderContext } from './ScrollStage';

type Props = {
  ariaLabel: string;
  renderScene: (ctx: SceneRenderContext) => ReactNode;
  fallback: ReactNode;
  height?: string;
  cameraInit?: { position: [number, number, number]; fov?: number };
  background?: string;
  // Orbit limits keep the scene readable and prevent disorientation.
  minPolar?: number;
  maxPolar?: number;
  minDistance?: number;
  maxDistance?: number;
  autoRotate?: boolean;
};

// Reusable single-canvas interactive 3D viewport: one framed scene the user can
// rotate (limited orbit, no pan), capability-gated with a static fallback. Used
// for the Living Punjab village, the map terrain, and rotatable museum exhibits.
// Under reduced motion it stays interactive but never auto-animates.
export default function SceneViewport({
  ariaLabel,
  renderScene,
  fallback,
  height = '70vh',
  cameraInit,
  background = 'linear-gradient(180deg,#bfe0ea 0%,#eaf2ec 100%)',
  minPolar = 0.6,
  maxPolar = 1.45,
  minDistance = 6,
  maxDistance = 22,
  autoRotate = false,
}: Props) {
  const caps = useClientCapabilities();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [degraded, setDegraded] = useState(false);
  const [visible, setVisible] = useState(true);

  const use3D = caps.mounted && caps.webgl;

  useEffect(() => {
    if (!use3D) return;
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '120px' });
    io.observe(el);
    return () => io.disconnect();
  }, [use3D]);

  if (!use3D) {
    return (
      <div aria-label={ariaLabel} role="img">
        {fallback}
      </div>
    );
  }

  const [minDpr, maxDpr] = dprForTier(caps.tier);
  const allowAuto = autoRotate && !caps.reducedMotion && !caps.coarsePointer;

  return (
    <div
      ref={wrapperRef}
      aria-label={ariaLabel}
      style={{ position: 'relative', height, borderRadius: 24, overflow: 'hidden', background }}
    >
      <AssetErrorBoundary fallback={<div style={{ position: 'absolute', inset: 0 }}>{fallback}</div>}>
        <Canvas
          frameloop={visible ? 'always' : 'never'}
          dpr={[minDpr, maxDpr]}
          shadows={caps.tier === 'high'}
          camera={{ position: cameraInit?.position ?? [0, 5, 12], fov: cameraInit?.fov ?? 50 }}
          gl={{ antialias: caps.tier !== 'low', powerPreference: 'high-performance', alpha: false }}
        >
          <Suspense fallback={<SceneLoader />}>
            {renderScene({
              tier: caps.tier,
              reducedMotion: caps.reducedMotion,
              degraded,
              coarsePointer: caps.coarsePointer,
            })}
          </Suspense>
          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom
            enableDamping={!caps.reducedMotion}
            autoRotate={allowAuto}
            autoRotateSpeed={0.6}
            minPolarAngle={minPolar}
            maxPolarAngle={maxPolar}
            minDistance={minDistance}
            maxDistance={maxDistance}
          />
          <PerformanceGuard onDegrade={setDegraded} />
        </Canvas>
      </AssetErrorBoundary>
      <p
        style={{
          position: 'absolute',
          right: 12,
          bottom: 10,
          margin: 0,
          padding: '4px 10px',
          borderRadius: 999,
          background: 'rgba(20,14,10,0.55)',
          color: '#fff8ed',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.04em',
          pointerEvents: 'none',
        }}
      >
        Drag to look around
      </p>
    </div>
  );
}
