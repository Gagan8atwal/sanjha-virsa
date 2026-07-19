'use client';

import { useFrame } from '@react-three/fiber';
import { useRef, useState, type RefObject } from 'react';
import CameraRig, { type CameraKeyframe } from '../CameraRig';
import SceneHotspot from '../SceneHotspot';
import type { SceneRenderContext } from '../ScrollStage';
import {
  Charpai,
  Hills,
  PALETTE,
  River,
  Tree,
  VillageHouse,
  Well,
  WheatField,
  tierValue,
} from './elements';

// Camera path across the land, one waypoint per story moment.
export const HOME_KEYFRAMES: CameraKeyframe[] = [
  { position: [2, 2.2, 12], target: [6, 2.4, -6] }, // sunrise over fields
  { position: [14, 3.4, 10], target: [16, 0.6, -4] }, // rivers
  { position: [26, 3.2, 11], target: [28, 1.2, -2] }, // village
  { position: [38, 2.8, 9], target: [40, 1, -3] }, // craft & artisans
  { position: [50, 3.6, 11], target: [52, 1.6, -3] }, // music & dance
  { position: [62, 5.5, 13], target: [64, 3, -4] }, // cities & architecture
  { position: [72, 3, 9], target: [74, 1.4, -3] }, // language & literature
  { position: [82, 3.6, 12], target: [84, 1.8, -4] }, // shared heritage
  { position: [90, 6, 16], target: [86, 1.5, -6] }, // entry points / overview
];

type HotspotDef = {
  section: number;
  position: [number, number, number];
  label: string;
  href: string;
  description: string;
};

const HOTSPOTS: HotspotDef[] = [
  { section: 1, position: [16, 1.4, -3], label: 'Rivers & maps', href: '/maps', description: 'Explore the five rivers and Punjab maps' },
  { section: 2, position: [26, 2.4, 0], label: 'Village home', href: '/living-punjab', description: 'Step into Living Punjab' },
  { section: 2, position: [30, 1.4, 2], label: 'Village life', href: '/village-life', description: 'Everyday life in a Punjabi pind' },
  { section: 3, position: [38, 1.8, 1], label: 'Artisan workshop', href: '/living-punjab#artisan-workshop', description: 'Crafts and artisan traditions' },
  { section: 3, position: [42, 1.4, 2], label: 'Cultural objects', href: '/objects', description: 'Everyday cultural objects' },
  { section: 4, position: [50, 2.2, 1], label: 'Music', href: '/music', description: 'Punjabi music traditions' },
  { section: 4, position: [53, 1.6, 2.5], label: 'Instruments', href: '/instruments', description: 'Dhol, tumbi, and more' },
  { section: 4, position: [47, 1.6, 2.5], label: 'Dances', href: '/dances', description: 'Bhangra, giddha, and folk dance' },
  { section: 5, position: [62, 3.4, 0], label: 'Cities', href: '/cities', description: 'Punjab cities across East and West' },
  { section: 5, position: [66, 2.6, 1.5], label: 'Architecture', href: '/architecture', description: 'Punjabi architecture and landmarks' },
  { section: 6, position: [72, 1.8, 1], label: 'Literature', href: '/literature', description: 'Punjabi literature and poetry' },
  { section: 6, position: [75, 1.6, 2], label: 'Language', href: '/language', description: 'Learn Gurmukhi step by step' },
  { section: 7, position: [82, 2, 0], label: 'Heritage', href: '/heritage', description: 'Sikh and Punjab history' },
  { section: 7, position: [85, 1.6, 2], label: 'Culture', href: '/culture', description: 'The full culture library' },
];

// Tracks which story zone the camera is in, updating React state only when the
// zone changes (never per-frame), so nearby hotspots can fade in/out.
function useZone(progressRef: RefObject<number>, count: number) {
  const [zone, setZone] = useState(0);
  const last = useRef(0);
  useFrame(() => {
    const p = Math.min(1, Math.max(0, progressRef.current ?? 0));
    const z = Math.min(count - 1, Math.round(p * (count - 1)));
    if (z !== last.current) {
      last.current = z;
      setZone(z);
    }
  });
  return zone;
}

// Simple stylised city skyline cluster.
function Skyline({ x }: { x: number }) {
  const heights = [3.2, 4.6, 2.6, 5.2, 3.8];
  return (
    <group position={[x, 0, -4]}>
      {heights.map((h, i) => (
        <mesh key={i} castShadow position={[(i - 2) * 1.6, h / 2, (i % 2) * -1.5]}>
          <boxGeometry args={[1.1, h, 1.1]} />
          <meshStandardMaterial color={i % 2 ? PALETTE.navy : '#26415f'} roughness={0.8} />
        </mesh>
      ))}
      {/* Gateway arch (darwaza) */}
      <group position={[0, 0, 2.5]}>
        <mesh castShadow position={[-1, 1.4, 0]}>
          <boxGeometry args={[0.4, 2.8, 0.4]} />
          <meshStandardMaterial color={PALETTE.terracotta} roughness={0.9} />
        </mesh>
        <mesh castShadow position={[1, 1.4, 0]}>
          <boxGeometry args={[0.4, 2.8, 0.4]} />
          <meshStandardMaterial color={PALETTE.terracotta} roughness={0.9} />
        </mesh>
        <mesh castShadow position={[0, 3, 0]}>
          <boxGeometry args={[2.6, 0.5, 0.5]} />
          <meshStandardMaterial color={PALETTE.maroon} roughness={0.85} />
        </mesh>
      </group>
    </group>
  );
}

// Abstract music/dance moment: a raised platform with instrument silhouettes.
function MusicStage({ x }: { x: number }) {
  return (
    <group position={[x, 0, 0]}>
      <mesh receiveShadow position={[0, 0.15, 0]}>
        <cylinderGeometry args={[2.6, 2.8, 0.3, 24]} />
        <meshStandardMaterial color={PALETTE.maroon} roughness={0.85} />
      </mesh>
      {/* dhol */}
      <mesh castShadow position={[-0.8, 0.75, 0.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.35, 0.35, 0.8, 16]} />
        <meshStandardMaterial color={PALETTE.wheat} roughness={0.6} />
      </mesh>
      {/* tumbi */}
      <group position={[0.9, 0.9, 0.3]} rotation={[0, 0, 0.25]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.03, 0.03, 1.4, 8]} />
          <meshStandardMaterial color="#8a5a2b" />
        </mesh>
        <mesh castShadow position={[0, -0.7, 0]}>
          <sphereGeometry args={[0.22, 12, 12]} />
          <meshStandardMaterial color={PALETTE.terracotta} />
        </mesh>
      </group>
    </group>
  );
}

// Stack of books for the literature moment.
function BookStack({ x }: { x: number }) {
  const colors = [PALETTE.maroon, PALETTE.green, PALETTE.navy, PALETTE.wheat];
  return (
    <group position={[x, 0, 0]}>
      {colors.map((c, i) => (
        <mesh key={i} castShadow position={[0, 0.15 + i * 0.22, 0]} rotation={[0, i * 0.2, 0]}>
          <boxGeometry args={[1.4, 0.2, 1]} />
          <meshStandardMaterial color={c} roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default function HomeLandscapeScene({
  progressRef,
  ctx,
}: {
  progressRef: RefObject<number>;
  ctx: SceneRenderContext;
}) {
  const animate = !ctx.reducedMotion && !ctx.degraded;
  const zone = useZone(progressRef, HOME_KEYFRAMES.length);
  const wheatCount = tierValue(ctx.tier, 320, 180, 90);

  return (
    <>
      <CameraRig progressRef={progressRef} keyframes={HOME_KEYFRAMES} reducedMotion={ctx.reducedMotion} />

      {/* Lighting: warm low sun for a sunrise feel. */}
      <hemisphereLight args={['#ffe4b0', '#4b6b45', 0.7]} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[-8, 9, 6]}
        intensity={1.5}
        color="#ffd28a"
        castShadow={ctx.tier === 'high'}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* Sun disc near the horizon at the start of the journey. */}
      <mesh position={[6, 3.4, -22]}>
        <circleGeometry args={[3.2, 32]} />
        <meshBasicMaterial color="#ffce7a" />
      </mesh>

      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[45, 0, 0]}>
        <planeGeometry args={[140, 60]} />
        <meshStandardMaterial color={PALETTE.fieldGreen} roughness={1} />
      </mesh>

      <Hills z={-30} />

      {/* 0 — Sunrise over fields */}
      <WheatField count={wheatCount} area={[24, 20]} origin={[6, 0, -6]} animate={animate} />

      {/* 1 — Rivers crossing the land */}
      <River points={[[10, 6], [14, 0], [17, -6], [15, -12]]} width={2.6} animate={animate} />
      <WheatField count={Math.round(wheatCount * 0.5)} area={[14, 14]} origin={[20, 0, -6]} animate={animate} color="#c7973a" />

      {/* 2 — Village homes and fields */}
      <group position={[26, 0, 0]}>
        <VillageHouse position={[0, 0, -1]} rotation={0.2} />
        <VillageHouse position={[3.5, 0, 1.5]} rotation={-0.5} scale={0.85} wall="#c17f3d" />
        <Well position={[-2.4, 0, 2.4]} />
        <Tree position={[5.5, 0, -2]} scale={1.1} />
      </group>

      {/* 3 — Craft & artisan traditions */}
      <group position={[38, 0, 0]}>
        <Charpai position={[0, 0, 1.5]} rotation={0.4} />
        <VillageHouse position={[3, 0, -1]} rotation={-0.3} scale={0.9} wall="#b9793a" />
        <Tree position={[-3, 0, 0]} scale={0.9} />
      </group>

      {/* 4 — Music & dance */}
      <MusicStage x={50} />
      <Tree position={[46, 0, -3]} />
      <Tree position={[55, 0, -3]} scale={1.2} />

      {/* 5 — Cities & architecture */}
      <Skyline x={62} />

      {/* 6 — Language & literature */}
      <BookStack x={72} />
      <Tree position={[76, 0, -2]} />

      {/* 7 & 8 — Shared heritage / entry points */}
      <group position={[84, 0, 0]}>
        <VillageHouse position={[0, 0, -1]} rotation={0.1} scale={0.95} />
        <Tree position={[3, 0, 1]} scale={1.2} />
        <Tree position={[-3, 0, 0]} scale={0.9} />
        <Charpai position={[1, 0, 2]} rotation={-0.3} />
      </group>

      {/* Hotspots — visible only near their story zone to avoid clutter. */}
      {HOTSPOTS.map((h, i) => (
        <SceneHotspot
          key={i}
          position={h.position}
          label={h.label}
          href={h.href}
          description={h.description}
          visible={Math.abs(zone - h.section) <= 1}
        />
      ))}

      <fog attach="fog" args={['#cfe0e8', 40, 130]} />
    </>
  );
}
