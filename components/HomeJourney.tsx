'use client';

import { ScrollStage, SceneFallback, type StoryMoment } from './three';
import HomeLandscapeScene from './three/scenes/HomeLandscapeScene';

const MOMENTS: StoryMoment[] = [
  {
    id: 'journey-sunrise',
    eyebrow: 'Sanjha Virsa',
    title: 'A journey through Punjabi heritage',
    body: 'Scroll to travel from the fields at sunrise, across the rivers, through villages and cities, to the shared culture of the Punjabi world.',
    align: 'left',
  },
  {
    id: 'journey-rivers',
    eyebrow: 'The land',
    title: 'Five rivers, one land',
    body: 'The rivers that name Punjab cross East and West alike. Follow them into maps of cities, districts, and historic places.',
    href: '/maps',
    cta: 'Open the maps',
    align: 'right',
  },
  {
    id: 'journey-village',
    eyebrow: 'Everyday life',
    title: 'Life in the pind',
    body: 'Courtyards, wells, charpais and fields — the rhythm of village life carried across generations.',
    href: '/living-punjab',
    cta: 'Enter Living Punjab',
    align: 'left',
  },
  {
    id: 'journey-craft',
    eyebrow: 'Craft',
    title: 'Hands that keep tradition',
    body: 'Weavers, potters, and woodworkers shape the objects of daily life. Step into the artisan workshop.',
    href: '/living-punjab#artisan-workshop',
    cta: 'Visit the workshop',
    align: 'right',
  },
  {
    id: 'journey-music',
    eyebrow: 'Sound & movement',
    title: 'Dhol, tumbi, and dancing feet',
    body: 'From bhangra to giddha, Punjabi music and dance turn celebration into shared memory.',
    href: '/music',
    cta: 'Explore music',
    align: 'left',
  },
  {
    id: 'journey-cities',
    eyebrow: 'Cities',
    title: 'Cities old and new',
    body: 'Gateways, bazaars, and skylines across Punjab — from historic quarters to living streets.',
    href: '/cities',
    cta: 'Explore cities',
    align: 'right',
  },
  {
    id: 'journey-language',
    eyebrow: 'Language & words',
    title: 'Words, poetry, and script',
    body: 'Learn Gurmukhi, read bilingual stories, and discover the poets and proverbs of Punjab.',
    href: '/language',
    cta: 'Learn the language',
    align: 'left',
  },
  {
    id: 'journey-heritage',
    eyebrow: 'History',
    title: 'A shared inheritance',
    body: 'Sikh and Punjab history, told with respect and care — a heritage that belongs to families everywhere.',
    href: '/heritage',
    cta: 'Explore heritage',
    align: 'right',
  },
  {
    id: 'journey-begin',
    eyebrow: 'Begin',
    title: 'Choose where to explore',
    body: 'Every part of this journey opens into a full library of lessons, museums, maps, and stories. Start anywhere.',
    href: '/culture',
    cta: 'Open the culture library',
    align: 'center',
  },
];

const LABELS = [
  'Sunrise',
  'Rivers',
  'Village',
  'Craft',
  'Music & dance',
  'Cities',
  'Language',
  'Heritage',
  'Begin',
];

export default function HomeJourney({ skipTargetId }: { skipTargetId?: string }) {
  return (
    <ScrollStage
      ariaLabel="Interactive Punjab heritage journey"
      sections={MOMENTS}
      cameraInit={{ position: [2, 2.2, 12], fov: 52 }}
      skipTargetId={skipTargetId}
      progressLabel={(i) => LABELS[i] ?? ''}
      renderScene={(progressRef, ctx) => (
        <HomeLandscapeScene progressRef={progressRef} ctx={ctx} />
      )}
      fallback={
        <SceneFallback
          eyebrow="Sanjha Virsa"
          title="A journey through Punjabi heritage"
        >
          <p style={{ margin: '0.75rem 0 0', maxWidth: '46ch', lineHeight: 1.6, color: 'rgba(253,247,236,0.85)' }}>
            From the fields at sunrise to the rivers, villages, cities, and shared
            culture of the Punjabi world. Choose a path below to begin exploring.
          </p>
        </SceneFallback>
      }
    />
  );
}
