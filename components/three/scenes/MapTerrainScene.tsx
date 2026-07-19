'use client';

import { Html } from '@react-three/drei';
import SceneHotspot from '../SceneHotspot';
import type { SceneRenderContext } from '../ScrollStage';
import { PALETTE, River } from './elements';

type City = { name: string; pos: [number, number, number]; side: 'East' | 'West' };

// Stylised, relative positions (not exact GPS) — enough to keep East/West
// clarity and river order without misrepresenting a precise map.
const CITIES: City[] = [
  { name: 'Amritsar', pos: [0.4, 0, 0], side: 'East' },
  { name: 'Jalandhar', pos: [2.2, 0, 1.4], side: 'East' },
  { name: 'Ludhiana', pos: [3.4, 0, 2.6], side: 'East' },
  { name: 'Patiala', pos: [5, 0, 3.6], side: 'East' },
  { name: 'Chandigarh', pos: [6, 0, 0.6], side: 'East' },
  { name: 'Lahore', pos: [-2.6, 0, 1.2], side: 'West' },
  { name: 'Faisalabad', pos: [-4.4, 0, 3], side: 'West' },
  { name: 'Multan', pos: [-6, 0, 5.4], side: 'West' },
  { name: 'Rawalpindi', pos: [-5.2, 0, -4.4], side: 'West' },
];

// Five rivers of Punjab, west → east, each a stylised ribbon N→S.
const RIVERS: { name: string; points: [number, number][] }[] = [
  { name: 'Jhelum', points: [[-6.5, -7], [-6, -3], [-6.6, 1], [-7, 6] ] },
  { name: 'Chenab', points: [[-4.6, -7], [-4.2, -2], [-5, 2], [-5.6, 6.5]] },
  { name: 'Ravi', points: [[-1.8, -7], [-1.4, -2], [-2.2, 2], [-3, 6.5]] },
  { name: 'Beas', points: [[1.6, -7], [1.4, -2.5], [0.6, 2], [-0.4, 6]] },
  { name: 'Sutlej', points: [[4.4, -7], [3.6, -2], [2.2, 2.5], [0.8, 6.8]] },
];

// A stylised 3D terrain of Punjab: East and West on either side of a soft
// boundary, the five rivers, and clickable city markers. Geographic clarity is
// kept simple; on small screens a marker list accompanies the canvas (see the
// map page fallback).
export default function MapTerrainScene({ ctx }: { ctx: SceneRenderContext }) {
  const animate = !ctx.reducedMotion && !ctx.degraded;

  return (
    <>
      <hemisphereLight args={['#eaf3ff', '#6f8f6a', 0.85]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 12, 4]} intensity={1.1} color="#fff3d8" />

      {/* Terrain plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[26, 20, 1, 1]} />
        <meshStandardMaterial color="#8caa6f" roughness={1} />
      </mesh>
      {/* West Punjab tint */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-6.6, 0.01, 0]}>
        <planeGeometry args={[12, 20]} />
        <meshStandardMaterial color="#c2a86a" roughness={1} transparent opacity={0.5} />
      </mesh>

      {/* Soft boundary line (Radcliffe line, stylised) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.6, 0.02, 0]}>
        <planeGeometry args={[0.12, 20]} />
        <meshStandardMaterial color={PALETTE.ink} transparent opacity={0.55} />
      </mesh>

      {/* Rivers */}
      {RIVERS.map((r) => (
        <River key={r.name} points={r.points} width={0.55} animate={animate} />
      ))}

      {/* Region labels */}
      <Html position={[4.5, 0.6, -6]} center style={{ pointerEvents: 'none' }}>
        <span style={labelStyle}>East Punjab</span>
      </Html>
      <Html position={[-6, 0.6, -6]} center style={{ pointerEvents: 'none' }}>
        <span style={labelStyle}>West Punjab</span>
      </Html>

      {/* City markers */}
      {CITIES.map((c) => (
        <group key={c.name}>
          <mesh position={[c.pos[0], 0.35, c.pos[2]]} castShadow>
            <coneGeometry args={[0.22, 0.7, 5]} />
            <meshStandardMaterial color={c.side === 'East' ? PALETTE.maroon : PALETTE.navy} />
          </mesh>
          <SceneHotspot
            position={[c.pos[0], 0.95, c.pos[2]]}
            label={c.name}
            href="/cities"
            description={`${c.side} Punjab city`}
          />
        </group>
      ))}

      {/* River access into the full maps experience */}
      <SceneHotspot position={[-5.6, 0.6, 6.5]} label="Rivers & regions" href="/maps" description="Open the full interactive maps" />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#201712',
  background: 'rgba(247,240,228,0.8)',
  padding: '3px 9px',
  borderRadius: 999,
  whiteSpace: 'nowrap',
};
