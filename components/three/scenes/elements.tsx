'use client';

import { Instance, Instances } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef, type ReactNode } from 'react';
import { Group, MathUtils, type InstancedMesh } from 'three';

// Shared, culturally-neutral, low-poly stylized elements for the Punjab
// scenes. Everything is procedural geometry (no external GLB), so there are no
// asset downloads, no licensing questions, and nothing that depicts sacred
// figures. Colours track the site's earthen palette.

export const PALETTE = {
  ink: '#201712',
  maroon: '#6f1d1b',
  mustard: '#e7b650',
  wheat: '#d9a441',
  cream: '#f7f0e4',
  green: '#315a45',
  fieldGreen: '#4e7a4e',
  navy: '#1e3553',
  river: '#3f7fae',
  mud: '#c98a4b',
  mudDark: '#a96f34',
  terracotta: '#b5622f',
};

// A stylised flat-roofed Punjabi village house (earthen walls, low parapet).
export function VillageHouse({
  position = [0, 0, 0],
  rotation = 0,
  scale = 1,
  wall = PALETTE.mud,
}: {
  position?: [number, number, number];
  rotation?: number;
  scale?: number;
  wall?: string;
}) {
  return (
    <group position={position} rotation={[0, rotation, 0]} scale={scale}>
      {/* Body */}
      <mesh castShadow receiveShadow position={[0, 0.9, 0]}>
        <boxGeometry args={[2.2, 1.8, 1.8]} />
        <meshStandardMaterial color={wall} roughness={0.95} />
      </mesh>
      {/* Roof slab + parapet */}
      <mesh castShadow position={[0, 1.85, 0]}>
        <boxGeometry args={[2.35, 0.16, 1.95]} />
        <meshStandardMaterial color={PALETTE.mudDark} roughness={0.9} />
      </mesh>
      {/* Door */}
      <mesh position={[0, 0.6, 0.92]}>
        <boxGeometry args={[0.55, 1.1, 0.06]} />
        <meshStandardMaterial color={PALETTE.maroon} roughness={0.7} />
      </mesh>
      {/* Windows */}
      <mesh position={[-0.72, 1.05, 0.92]}>
        <boxGeometry args={[0.4, 0.4, 0.05]} />
        <meshStandardMaterial color={PALETTE.navy} roughness={0.6} />
      </mesh>
      <mesh position={[0.72, 1.05, 0.92]}>
        <boxGeometry args={[0.4, 0.4, 0.05]} />
        <meshStandardMaterial color={PALETTE.navy} roughness={0.6} />
      </mesh>
    </group>
  );
}

// Peepal-style rounded tree.
export function Tree({
  position = [0, 0, 0],
  scale = 1,
}: {
  position?: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.12, 0.18, 1.6, 6]} />
        <meshStandardMaterial color="#7a5230" roughness={1} />
      </mesh>
      <mesh castShadow position={[0, 1.9, 0]}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color={PALETTE.green} roughness={0.9} flatShading />
      </mesh>
      <mesh castShadow position={[0.5, 1.5, 0.2]}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#3d6b4f" roughness={0.9} flatShading />
      </mesh>
    </group>
  );
}

// Charpai (woven string cot) — a frame with a woven top plane.
export function Charpai({
  position = [0, 0, 0],
  rotation = 0,
}: {
  position?: [number, number, number];
  rotation?: number;
}) {
  const legs: [number, number][] = [
    [-0.55, -0.35],
    [0.55, -0.35],
    [-0.55, 0.35],
    [0.55, 0.35],
  ];
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {legs.map(([x, z], i) => (
        <mesh key={i} castShadow position={[x, 0.18, z]}>
          <cylinderGeometry args={[0.05, 0.05, 0.36, 6]} />
          <meshStandardMaterial color="#8a5a2b" roughness={1} />
        </mesh>
      ))}
      <mesh castShadow receiveShadow position={[0, 0.38, 0]}>
        <boxGeometry args={[1.3, 0.08, 0.9]} />
        <meshStandardMaterial color="#d8b06a" roughness={1} />
      </mesh>
    </group>
  );
}

// A round brick well.
export function Well({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.8, 16, 1, true]} />
        <meshStandardMaterial color={PALETTE.terracotta} roughness={1} side={2} />
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.62, 0.62, 0.1, 16]} />
        <meshStandardMaterial color={PALETTE.river} roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
}

// A field of swaying wheat via instancing. Count scales with the device tier.
export function WheatField({
  count = 240,
  area = [40, 26],
  origin = [0, 0, 0],
  animate = true,
  color = PALETTE.wheat,
}: {
  count?: number;
  area?: [number, number];
  origin?: [number, number, number];
  animate?: boolean;
  color?: string;
}) {
  const ref = useRef<InstancedMesh>(null);
  const stalks = useMemo(() => {
    // Deterministic pseudo-random layout (stable across renders/SSR).
    const items: { pos: [number, number, number]; h: number; phase: number }[] = [];
    let seed = 1337;
    const rand = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };
    for (let i = 0; i < count; i += 1) {
      const x = origin[0] + (rand() - 0.5) * area[0];
      const z = origin[2] + (rand() - 0.5) * area[1];
      const h = 0.5 + rand() * 0.5;
      items.push({ pos: [x, origin[1] + h / 2, z], h, phase: rand() * Math.PI * 2 });
    }
    return items;
  }, [count, area, origin]);

  useFrame((state) => {
    if (!animate || !ref.current) return;
    const t = state.clock.elapsedTime;
    // Cheap global sway via rotating the whole instanced field slightly.
    ref.current.rotation.z = Math.sin(t * 0.8) * 0.02;
  });

  return (
    <Instances ref={ref} limit={count} range={count} castShadow>
      <coneGeometry args={[0.06, 1, 4]} />
      <meshStandardMaterial color={color} roughness={1} flatShading />
      {stalks.map((s, i) => (
        <Instance key={i} position={s.pos} scale={[1, s.h, 1]} />
      ))}
    </Instances>
  );
}

// A stylised river ribbon with a slow shimmer.
export function River({
  points,
  width = 2.4,
  animate = true,
}: {
  points: [number, number][];
  width?: number;
  animate?: boolean;
}) {
  const matRef = useRef<any>(null);
  useFrame((state) => {
    if (!animate || !matRef.current) return;
    const t = state.clock.elapsedTime;
    matRef.current.opacity = 0.82 + Math.sin(t * 1.2) * 0.06;
  });
  // Build a flat strip mesh from the centreline points.
  const geo = useMemo(() => {
    const verts: number[] = [];
    const idx: number[] = [];
    for (let i = 0; i < points.length; i += 1) {
      const [x, z] = points[i];
      verts.push(x - width / 2, 0.02, z, x + width / 2, 0.02, z);
      if (i < points.length - 1) {
        const a = i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
    return { verts: new Float32Array(verts), idx: new Uint16Array(idx) };
  }, [points, width]);

  return (
    <mesh receiveShadow>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[geo.verts, 3]} />
        <bufferAttribute attach="index" args={[geo.idx, 1]} />
      </bufferGeometry>
      <meshStandardMaterial
        ref={matRef}
        color={PALETTE.river}
        roughness={0.2}
        metalness={0.15}
        transparent
        opacity={0.88}
      />
    </mesh>
  );
}

// Distant low-poly hills for depth.
export function Hills({ z = -30, color = '#6f8f6a' }: { z?: number; color?: string }) {
  const xs = [-24, -12, 0, 13, 26];
  return (
    <group position={[0, 0, z]}>
      {xs.map((x, i) => (
        <mesh key={i} position={[x, 0, (i % 2) * -4]}>
          <coneGeometry args={[10 + (i % 3) * 2, 6 + (i % 2) * 2, 4]} />
          <meshStandardMaterial color={color} roughness={1} flatShading />
        </mesh>
      ))}
    </group>
  );
}

// Gentle floating animation wrapper (disabled under reduced motion).
export function Float({
  children,
  amplitude = 0.15,
  speed = 1,
  animate = true,
}: {
  children: ReactNode;
  amplitude?: number;
  speed?: number;
  animate?: boolean;
}) {
  const ref = useRef<Group>(null);
  const base = useRef(0);
  useFrame((state) => {
    if (!animate || !ref.current) return;
    ref.current.position.y = base.current + Math.sin(state.clock.elapsedTime * speed) * amplitude;
  });
  return <group ref={ref}>{children}</group>;
}

// Scales a numeric value between low/high tiers.
export function tierValue<T>(tier: 'high' | 'mid' | 'low', high: T, mid: T, low: T): T {
  return tier === 'high' ? high : tier === 'mid' ? mid : low;
}

export function clampProgress(p: number) {
  return MathUtils.clamp(p, 0, 1);
}
