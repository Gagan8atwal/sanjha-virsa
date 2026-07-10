'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Story } from '../lib/stories';

const shelves = [
  { title: 'Guru Stories', description: 'Values, courage, seva, equality, and Sikh heritage.' },
  { title: 'Punjab History', description: 'Rivers, cities, migration, memory, and historic eras.' },
  { title: 'Bedtime Stories', description: 'Short comforting stories families can read together.' },
  { title: 'Folk Tales', description: 'Village wisdom, bravery, animals, and Punjabi imagination.' },
  { title: 'Language Adventures', description: 'Stories that make Gurmukhi and Punjabi words memorable.' },
  { title: 'Family Values', description: 'Respect, sharing, honesty, courage, and responsibility.' },
];

export default function StoryLibraryExperience({ stories }: { stories: Story[] }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [lastStory, setLastStory] = useState<string | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setLastStory(window.localStorage.getItem('sanjha-last-story'));
    const saved = window.localStorage.getItem('sanjha-completed-stories');
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  const categories = useMemo(() => ['All', ...Array.from(new Set(stories.map((story) => story.category)))], [stories]);
  const filtered = useMemo(() => stories.filter((story) => {
    const matchesCategory = category === 'All' || story.category === category;
    const search = query.toLowerCase().trim();
    const matchesSearch = !search || story.title.toLowerCase().includes(search) || story.punjabi.includes(query) || story.theme.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  }), [category, query, stories]);
  const continueStory = stories.find((story) => story.id === lastStory) || stories[0];

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#201712] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e7b650]">Punjabi story library</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Stories that children can read, remember, and discuss.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/65">Meaningful bilingual stories with clear themes, simple reading flow, and family questions.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`/storybook/${continueStory.id}`} className="rounded-full bg-[#e7b650] px-6 py-3.5 text-sm font-black text-[#201712]">Continue reading</a>
              <a href="#story-library" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white">Browse stories</a>
            </div>
          </div>

          <a href={`/storybook/${continueStory.id}`} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#fffdf8] text-[#201712] shadow-2xl transition hover:-translate-y-0.5">
            <StoryCover story={continueStory} featured />
            <div className="p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6f1d1b]">Continue your book</p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight">{continueStory.title}</h2>
              <p className="mt-1 text-xl font-black text-[#6f1d1b]">{continueStory.punjabi}</p>
              <p className="mt-4 text-sm font-medium leading-7 text-[#6f675f]">{continueStory.theme}</p>
              <p className="mt-5 text-sm font-black text-[#315a45] group-hover:underline">Open story</p>
            </div>
          </a>
        </div>
      </section>

      <section id="story-library" className="sv-container py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="sv-kicker">Find a story</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] md:text-5xl">Choose one story at a time.</h2>
            <p className="sv-copy mt-4">Search by title, theme, Punjabi name, or category.</p>
          </div>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search stories" className="w-full rounded-full border border-black/10 bg-[#fffdf8] px-5 py-3.5 font-semibold outline-none focus:border-[#6f1d1b] lg:w-80" />
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`min-w-max rounded-full px-4 py-2 text-sm font-black transition ${category === item ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8] text-[#4f473f]'}`}>{item}</button>)}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((story) => {
            const done = completed.includes(story.id);
            return (
              <a key={story.id} href={`/storybook/${story.id}`} className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#fffdf8] shadow-[0_16px_38px_rgba(54,35,24,0.07)] transition hover:-translate-y-0.5 hover:shadow-xl">
                <StoryCover story={story} />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.14em] text-[#6f675f]"><span>{story.category}</span><span>{story.age}</span></div>
                  <h3 className="mt-4 font-serif text-3xl font-bold leading-tight">{story.title}</h3>
                  <p className="mt-1 text-xl font-black text-[#6f1d1b]">{story.punjabi}</p>
                  <p className="mt-4 text-sm font-medium leading-7 text-[#6f675f]">{story.theme}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4 text-sm font-black"><span>{story.pages.length} pages</span><span className="text-[#315a45] group-hover:underline">{done ? 'Read again' : 'Read story'}</span></div>
                </div>
              </a>
            );
          })}
        </div>

        {filtered.length === 0 && <div className="mt-10 rounded-[1.75rem] border border-black/10 bg-[#fffdf8] p-8 text-center"><h3 className="font-serif text-2xl font-bold">No story found</h3><p className="mt-2 text-sm font-medium text-[#6f675f]">Try another title, theme, or category.</p></div>}
      </section>

      <section className="border-y border-black/10 bg-[#fffdf8]">
        <div className="sv-container py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="sv-kicker">Library shelves</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em]">A growing collection for different ages and interests.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {shelves.map((shelf, index) => <div key={shelf.title} className="rounded-[1.5rem] border border-black/10 bg-[#f9f3e8] p-6"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#201712] text-sm font-black text-white">{index + 1}</div><h3 className="mt-5 font-serif text-2xl font-bold">{shelf.title}</h3><p className="mt-3 text-sm font-medium leading-7 text-[#6f675f]">{shelf.description}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}

function StoryCover({ story, featured = false }: { story: Story; featured?: boolean }) {
  const category = story.category.toLowerCase();
  const tone = category.includes('guru') ? '#1e3553' : category.includes('history') ? '#6f1d1b' : category.includes('folk') ? '#315a45' : category.includes('language') ? '#8a5b1f' : '#5b3d76';
  return (
    <svg viewBox="0 0 720 420" role="img" aria-label={`Illustrated cover for ${story.title}`} className={featured ? 'h-72 w-full' : 'h-60 w-full'}>
      <rect width="720" height="420" fill="#f5e7ca" />
      <circle cx="590" cy="90" r="52" fill="#d99a22" opacity="0.88" />
      <path d="M0 270C125 205 235 228 350 278C480 334 585 305 720 245V420H0V270Z" fill="#c8a85b" />
      <path d="M0 330C140 280 260 305 380 348C505 392 620 370 720 330V420H0V330Z" fill={tone} opacity="0.92" />
      <path d="M95 300h190v120H95z" fill="#f3d9a8" />
      <path d="m72 302 118-88 118 88H72Z" fill={tone} />
      <rect x="164" y="340" width="54" height="80" rx="4" fill="#6f1d1b" />
      <path d="M420 334c0-70 38-122 92-158" stroke="#315a45" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M505 160c42 10 64 46 49 81-44-7-68-41-49-81Z" fill="#315a45" />
      <path d="M462 214c-37 3-60 30-54 61 38 0 63-25 54-61Z" fill="#7c9b62" />
      <rect x="360" y="290" width="195" height="92" rx="16" fill="#fffdf8" opacity="0.9" />
      <path d="M390 320h130M390 348h95" stroke={tone} strokeWidth="12" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}
