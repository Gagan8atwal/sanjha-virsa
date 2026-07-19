'use client';

import SceneHotspot from '../SceneHotspot';
import type { SceneRenderContext } from '../ScrollStage';
import { Charpai, Float, PALETTE, Tree, VillageHouse, Well, WheatField, tierValue } from './elements';

// A compact, interactive stylised Punjabi village courtyard for Living Punjab.
// Centred on the origin so limited orbit stays oriented. Clickable elements
// route into the real Living Punjab / village-life / objects / maps content.
export default function VillageScene({ ctx }: { ctx: SceneRenderContext }) {
  const animate = !ctx.reducedMotion && !ctx.degraded;
  const wheat = tierValue(ctx.tier, 160, 100, 50);

  return (
    <>
      <hemisphereLight args={['#fff2d6', '#5f7a4f', 0.8]} />
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[6, 10, 6]}
        intensity={1.3}
        color="#ffe0a6"
        castShadow={ctx.tier === 'high'}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Courtyard ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[16, 40]} />
        <meshStandardMaterial color="#cbb083" roughness={1} />
      </mesh>
      {/* Packed-earth courtyard centre */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[6, 32]} />
        <meshStandardMaterial color="#d8bd8e" roughness={1} />
      </mesh>

      {/* Homes around the courtyard */}
      <VillageHouse position={[-4.5, 0, -3.5]} rotation={0.5} />
      <VillageHouse position={[4.8, 0, -2.5]} rotation={-0.7} scale={0.9} wall="#c07b39" />

      {/* Well + water source */}
      <Well position={[-3.2, 0, 2.6]} />

      {/* Charpai in the courtyard */}
      <Charpai position={[2.2, 0, 2.4]} rotation={-0.4} />

      {/* Trees */}
      <Tree position={[6.5, 0, 3]} scale={1.2} />
      <Tree position={[-6.5, 0, -1]} scale={1} />

      {/* Fields at the edge */}
      <WheatField count={wheat} area={[16, 5]} origin={[0, 0, -9]} animate={animate} />

      {/* A gentle floating marker over the courtyard */}
      <Float animate={animate} amplitude={0.12} speed={1.2}>
        <mesh position={[0, 3.4, 0]}>
          <torusGeometry args={[0.5, 0.09, 10, 24]} />
          <meshStandardMaterial color={PALETTE.mustard} roughness={0.4} metalness={0.2} />
        </mesh>
      </Float>

      {/* Hotspots into real content */}
      <SceneHotspot position={[-4.5, 2.2, -3]} label="The home" href="/living-punjab" description="Explore the Punjabi village home" />
      <SceneHotspot position={[2.2, 1, 2.4]} label="Village life" href="/village-life" description="Daily life in the courtyard" />
      <SceneHotspot position={[4.8, 2, -2.5]} label="Artisan workshop" href="/living-punjab#artisan-workshop" description="Crafts and artisan traditions" />
      <SceneHotspot position={[-3.2, 1.1, 2.6]} label="Water & wells" href="/maps" description="Rivers and water on the map" />
      <SceneHotspot position={[2.2, 0.6, 2.4]} label="Objects" href="/objects" description="Everyday cultural objects" />

      <fog attach="fog" args={['#dce8e0', 24, 60]} />
    </>
  );
}
