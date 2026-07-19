'use client';

import { Html } from '@react-three/drei';
import Link from 'next/link';

type Props = {
  position: [number, number, number];
  label: string;
  href: string;
  // Extra context announced to screen readers.
  description?: string;
  // Hide the marker (e.g. when its section is far from view).
  visible?: boolean;
};

// A clickable 3D hotspot anchored to a world position. Rendered as a real
// focusable, keyboard-navigable link (Next <Link>) via drei's <Html>, so it
// works for pointer, touch, and assistive tech. Every hotspot points at a
// real existing route — navigation is never hidden behind the canvas.
export default function SceneHotspot({
  position,
  label,
  href,
  description,
  visible = true,
}: Props) {
  return (
    <Html position={position} center distanceFactor={10} zIndexRange={[20, 0]} occlude={false}>
      <Link
        href={href}
        aria-label={description ? `${label} — ${description}` : label}
        tabIndex={visible ? 0 : -1}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '7px 13px 7px 9px',
          borderRadius: 999,
          background: 'rgba(32,23,18,0.82)',
          color: '#fff8ed',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 13,
          fontWeight: 700,
          whiteSpace: 'nowrap',
          border: '1px solid rgba(231,182,80,0.55)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.28)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          pointerEvents: visible ? 'auto' : 'none',
          cursor: 'pointer',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#e7b650',
            boxShadow: '0 0 0 4px rgba(231,182,80,0.28)',
            flex: '0 0 auto',
          }}
        />
        {label}
      </Link>
    </Html>
  );
}
