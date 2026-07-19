'use client';

import SceneFallback from './three/SceneFallback';
import SceneViewport from './three/SceneViewport';
import VillageScene from './three/scenes/VillageScene';

// Interactive 3D village scene shown at the top of Living Punjab. Additive:
// it sits above the existing Living Punjab experience, which stays intact.
export default function LivingVillageHero() {
  return (
    <section className="sv-container" style={{ paddingTop: '1.5rem' }} aria-label="Interactive Punjabi village">
      <div style={{ marginBottom: '0.75rem' }}>
        <p className="sv-kicker">Living Punjab</p>
        <h2 className="mt-2 font-serif text-3xl font-bold tracking-[-0.02em] md:text-4xl">
          Step into a Punjabi village
        </h2>
        <p className="sv-copy mt-2" style={{ maxWidth: '60ch' }}>
          Drag to look around the courtyard — the home, the well, the charpai, and the
          fields. Tap a marker to open the full stories, crafts, and everyday life below.
        </p>
      </div>
      <SceneViewport
        ariaLabel="Interactive 3D Punjabi village courtyard with home, well, charpai, and fields"
        height="clamp(360px, 62vh, 620px)"
        cameraInit={{ position: [0, 5.5, 13], fov: 50 }}
        background="linear-gradient(180deg,#bfe0ea 0%,#e7f0e6 100%)"
        autoRotate
        renderScene={(ctx) => <VillageScene ctx={ctx} />}
        fallback={
          <SceneFallback
            gradient="linear-gradient(160deg,#315a45 0%,#5f7a4f 60%,#c98a4b 100%)"
            eyebrow="Living Punjab"
            title="A Punjabi village to explore"
          >
            <ul style={{ margin: '1rem 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
              {[
                ['The village home', '/living-punjab'],
                ['Everyday village life', '/village-life'],
                ['Artisan workshop', '/living-punjab#artisan-workshop'],
                ['Cultural objects', '/objects'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} style={{ color: '#fff8ed', fontWeight: 700, textDecoration: 'underline' }}>
                    {label} →
                  </a>
                </li>
              ))}
            </ul>
          </SceneFallback>
        }
      />
    </section>
  );
}
