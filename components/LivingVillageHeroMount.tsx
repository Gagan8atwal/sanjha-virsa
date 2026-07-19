'use client';

import dynamic from 'next/dynamic';

const LivingVillageHero = dynamic(() => import('./LivingVillageHero'), {
  ssr: false,
  loading: () => (
    <div className="sv-container" style={{ paddingTop: '1.5rem' }}>
      <div
        aria-hidden="true"
        style={{
          height: 'clamp(360px, 62vh, 620px)',
          borderRadius: 24,
          background: 'linear-gradient(180deg,#bfe0ea 0%,#e7f0e6 100%)',
        }}
      />
    </div>
  ),
});

export default function LivingVillageHeroMount() {
  return <LivingVillageHero />;
}
