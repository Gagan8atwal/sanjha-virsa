'use client';

import { Html, useProgress } from '@react-three/drei';

// Rendered inside <Suspense> within a Canvas. Shows a lightweight, on-brand
// loading indicator with a real percentage from drei's asset loader.
export default function SceneLoader() {
  const { progress, active } = useProgress();
  return (
    <Html center>
      <div
        role="status"
        aria-live="polite"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          fontFamily: 'Inter, system-ui, sans-serif',
          color: '#f7f0e4',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            border: '3px solid rgba(247,240,228,0.25)',
            borderTopColor: '#e7b650',
            animation: 'sv-spin 0.9s linear infinite',
          }}
        />
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em' }}>
          {active ? `Loading scene ${Math.round(progress)}%` : 'Preparing scene'}
        </span>
        <style>{'@keyframes sv-spin{to{transform:rotate(360deg)}}'}</style>
      </div>
    </Html>
  );
}
