'use client';

import SceneFallback from './three/SceneFallback';
import SceneViewport from './three/SceneViewport';
import MapTerrainScene from './three/scenes/MapTerrainScene';

const CITY_LIST = ['Amritsar', 'Jalandhar', 'Ludhiana', 'Patiala', 'Chandigarh', 'Lahore', 'Faisalabad', 'Multan', 'Rawalpindi'];

// Interactive 3D terrain shown above the existing maps atlas. Additive: the
// full maplibre atlas below is untouched. On no-WebGL devices a clear marker
// list keeps every city reachable.
export default function MapTerrainHero() {
  return (
    <section className="sv-container" style={{ paddingTop: '1.5rem' }} aria-label="Interactive Punjab terrain">
      <div style={{ marginBottom: '0.75rem' }}>
        <p className="sv-kicker">Punjab in 3D</p>
        <h2 className="mt-2 font-serif text-3xl font-bold tracking-[-0.02em] md:text-4xl">
          The land, the rivers, the cities
        </h2>
        <p className="sv-copy mt-2" style={{ maxWidth: '62ch' }}>
          A stylised view of East and West Punjab, the five rivers, and key cities. Drag to
          rotate, tap a city to explore, and open the full interactive maps below.
        </p>
      </div>
      <SceneViewport
        ariaLabel="Interactive 3D terrain of East and West Punjab with five rivers and city markers"
        height="clamp(360px, 60vh, 600px)"
        cameraInit={{ position: [0, 12, 16], fov: 46 }}
        background="linear-gradient(180deg,#cfe3f2 0%,#eaf2ec 100%)"
        minPolar={0.2}
        maxPolar={1.2}
        minDistance={10}
        maxDistance={30}
        renderScene={(ctx) => <MapTerrainScene ctx={ctx} />}
        fallback={
          <SceneFallback
            gradient="linear-gradient(160deg,#1e3553 0%,#3f7fae 60%,#8caa6f 100%)"
            eyebrow="Punjab maps"
            title="East & West Punjab, the five rivers, and its cities"
          >
            <p style={{ margin: '0.75rem 0 0', color: 'rgba(253,247,236,0.85)' }}>
              The five rivers — Jhelum, Chenab, Ravi, Beas, and Sutlej. Cities include:
            </p>
            <ul style={{ margin: '0.6rem 0 0', padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {CITY_LIST.map((c) => (
                <li key={c}>
                  <a
                    href="/cities"
                    style={{ display: 'inline-block', padding: '4px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.16)', color: '#fff8ed', fontWeight: 700, fontSize: 13 }}
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
            <p style={{ margin: '0.9rem 0 0' }}>
              <a href="/maps" style={{ color: '#e7b650', fontWeight: 800, textDecoration: 'underline' }}>
                Open the full interactive maps →
              </a>
            </p>
          </SceneFallback>
        }
      />
    </section>
  );
}
