'use client';

import type { ReactNode } from 'react';

type Props = {
  // Illustrated / gradient background for the fallback panel.
  gradient?: string;
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
};

// The universal non-WebGL / reduced-motion / error fallback. It is plain,
// accessible HTML — no canvas — so all essential content stays reachable by
// screen readers and on devices without WebGL. Callers pass the same links
// and copy the 3D scene would surface as hotspots.
export default function SceneFallback({
  gradient = 'linear-gradient(160deg,#201712 0%,#3a2a1c 55%,#6f1d1b 100%)',
  eyebrow,
  title,
  children,
  className = '',
}: Props) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        background: gradient,
        color: '#f7f0e4',
        padding: 'clamp(1.5rem,4vw,3rem)',
      }}
    >
      {eyebrow ? (
        <p
          style={{
            margin: 0,
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#e7b650',
          }}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2
          style={{
            margin: '0.5rem 0 0',
            fontSize: 'clamp(1.6rem,4vw,2.6rem)',
            lineHeight: 1.05,
            fontWeight: 800,
          }}
        >
          {title}
        </h2>
      ) : null}
      {children}
    </div>
  );
}
