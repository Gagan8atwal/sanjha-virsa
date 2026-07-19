'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, type RefObject } from 'react';
import { CatmullRomCurve3, Vector3 } from 'three';

export type CameraKeyframe = {
  // Camera position at this waypoint.
  position: [number, number, number];
  // Point the camera looks at.
  target: [number, number, number];
};

type Props = {
  // 0..1 scroll progress, updated outside React (read every frame).
  progressRef: RefObject<number>;
  keyframes: CameraKeyframe[];
  // Snap instantly instead of damping (used for reduced motion).
  reducedMotion?: boolean;
  // Higher = snappier follow. Ignored when reducedMotion.
  damping?: number;
};

// Reusable scroll-linked camera. Positions and look-at targets are defined as
// keyframes and smoothly interpolated along a Catmull-Rom curve by scroll
// progress. Under reduced motion the camera tracks scroll exactly with no
// easing or idle drift.
export default function CameraRig({
  progressRef,
  keyframes,
  reducedMotion = false,
  damping = 3,
}: Props) {
  const { camera } = useThree();

  const { posCurve, targetCurve } = useMemo(() => {
    const positions = keyframes.map((k) => new Vector3(...k.position));
    const targets = keyframes.map((k) => new Vector3(...k.target));
    // A single point can't form a curve; duplicate to stay safe.
    if (positions.length === 1) {
      positions.push(positions[0].clone());
      targets.push(targets[0].clone());
    }
    return {
      posCurve: new CatmullRomCurve3(positions),
      targetCurve: new CatmullRomCurve3(targets),
    };
  }, [keyframes]);

  const desiredPos = useRef(new Vector3());
  const desiredTarget = useRef(new Vector3());
  const currentTarget = useRef(new Vector3(...(keyframes[0]?.target ?? [0, 0, 0])));

  useFrame((_, delta) => {
    const t = Math.min(1, Math.max(0, progressRef.current ?? 0));
    posCurve.getPoint(t, desiredPos.current);
    targetCurve.getPoint(t, desiredTarget.current);

    if (reducedMotion) {
      camera.position.copy(desiredPos.current);
      currentTarget.current.copy(desiredTarget.current);
    } else {
      // Frame-rate independent damping.
      const alpha = 1 - Math.exp(-damping * delta);
      camera.position.lerp(desiredPos.current, alpha);
      currentTarget.current.lerp(desiredTarget.current, alpha);
    }
    camera.lookAt(currentTarget.current);
  });

  return null;
}
