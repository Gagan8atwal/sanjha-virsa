'use client';

import Link from 'next/link';

export type StoryMoment = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  href?: string;
  cta?: string;
  align?: 'left' | 'right' | 'center';
};

type Props = {
  moment: StoryMoment;
  // When true, lays out as a fixed-height scroll panel over a sticky canvas.
  // When false, renders as a plain stacked card for the static fallback.
  overlay?: boolean;
  active?: boolean;
};

// A single readable story moment. The copy always lives in real HTML (never
// only inside the canvas), so screen readers and no-WebGL users get the full
// narrative. In overlay mode it floats above the sticky 3D canvas; in fallback
// mode it stacks as an ordinary card.
export default function SceneSection({ moment, overlay = true, active = false }: Props) {
  const align = moment.align ?? 'left';
  const justify =
    align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start';

  const card = (
    <div
      style={{
        maxWidth: 'min(30rem, 92vw)',
        background: 'rgba(20,14,10,0.62)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderRadius: 20,
        border: '1px solid rgba(231,182,80,0.28)',
        padding: 'clamp(1.1rem,3vw,1.9rem)',
        color: '#fdf7ec',
        boxShadow: '0 18px 44px rgba(0,0,0,0.32)',
        textAlign: align === 'center' ? 'center' : 'left',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#e7b650',
        }}
      >
        {moment.eyebrow}
      </p>
      <h2
        style={{
          margin: '0.55rem 0 0',
          fontSize: 'clamp(1.5rem,3.6vw,2.4rem)',
          lineHeight: 1.08,
          fontWeight: 800,
        }}
      >
        {moment.title}
      </h2>
      <p style={{ margin: '0.75rem 0 0', fontSize: 'clamp(0.95rem,1.4vw,1.05rem)', lineHeight: 1.6, color: 'rgba(253,247,236,0.86)' }}>
        {moment.body}
      </p>
      {moment.href ? (
        <Link
          href={moment.href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginTop: '1.1rem',
            padding: '0.65rem 1.15rem',
            borderRadius: 999,
            background: '#e7b650',
            color: '#201712',
            fontSize: 14,
            fontWeight: 800,
          }}
        >
          {moment.cta ?? 'Explore'}
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );

  if (!overlay) {
    return <li style={{ listStyle: 'none', margin: 0 }}>{card}</li>;
  }

  return (
    <section
      id={moment.id}
      aria-current={active ? 'true' : undefined}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: justify,
        padding: 'clamp(1rem,5vw,4rem)',
        pointerEvents: 'none',
      }}
    >
      <div style={{ pointerEvents: 'auto' }}>{card}</div>
    </section>
  );
}
