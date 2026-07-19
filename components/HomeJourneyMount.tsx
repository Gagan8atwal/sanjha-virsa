'use client';

import dynamic from 'next/dynamic';

// Lazy, client-only mount for the 3D journey. Keeps Three.js/R3F out of the
// initial server render and the first JS chunk; the static hero above it and
// the content below it paint immediately. The loading placeholder reserves
// space to avoid layout shift.
const HomeJourney = dynamic(() => import('./HomeJourney'), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      style={{
        minHeight: '60vh',
        background: 'linear-gradient(180deg,#1a2740 0%,#31507a 45%,#e8b866 100%)',
      }}
    />
  ),
});

export default function HomeJourneyMount({ skipTargetId }: { skipTargetId?: string }) {
  return <HomeJourney skipTargetId={skipTargetId} />;
}
