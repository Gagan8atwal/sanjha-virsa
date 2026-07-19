'use client';

import { AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import { useState } from 'react';

type Props = {
  // Called when sustained low FPS is detected, so scenes can shed detail.
  onDegrade?: (degraded: boolean) => void;
};

// Runtime performance protection, rendered inside a Canvas. Automatically
// lowers the internal resolution when the GPU falls behind (AdaptiveDpr),
// downgrades pointer-event precision under load (AdaptiveEvents), and watches
// the frame rate to notify scenes to reduce detail. Pairs with the static
// per-tier DPR cap applied on the Canvas itself.
export default function PerformanceGuard({ onDegrade }: Props) {
  const [degraded, setDegraded] = useState(false);

  return (
    <>
      <PerformanceMonitor
        onDecline={() => {
          if (!degraded) {
            setDegraded(true);
            onDegrade?.(true);
          }
        }}
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
}
