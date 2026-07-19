'use client';

import dynamic from 'next/dynamic';

const MapTerrainHero = dynamic(() => import('./MapTerrainHero'), {
  ssr: false,
  loading: () => (
    <div className="sv-container" style={{ paddingTop: '1.5rem' }}>
      <div
        aria-hidden="true"
        style={{
          height: 'clamp(360px, 60vh, 600px)',
          borderRadius: 24,
          background: 'linear-gradient(180deg,#cfe3f2 0%,#eaf2ec 100%)',
        }}
      />
    </div>
  ),
});

export default function MapTerrainHeroMount() {
  return <MapTerrainHero />;
}
