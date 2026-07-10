'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Story } from '../lib/stories';

const shelves = [
  { title: 'Guru Stories', icon: '☬', description: 'Values, courage, seva, equality, and Sikh heritage.' },
  { title: 'Punjab History', icon: '🏛️', description: 'Rivers, cities, migration, memory, and historic eras.' },
  { title: 'Bedtime Stories', icon: '🌙', description: 'Short comforting stories families can read together.' },
  { title: 'Folk Tales', icon: '🥁', description: 'Village wisdom, bravery, animals, and Punjabi imagination.' },
  { title: 'Language Adventures', icon: 'ਅ', description: 'Stories that make Gurmukhi and Punjabi words memorable.' },
  { title: 'Family Values', icon: '🏡', description: 'Respect, sharing, honesty, courage, and responsibility.' },
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
    <main className="min-h-screen bg-[#130d0a] text-white">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_15%,#f59e0b55,transparent_24%),radial-gradient(circle_at_85%_10%,#7c3aed55,transparent_26%),linear-gradient(135deg,#24160f,#450a0a_55%,#111827)]">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">Punjabi Story Library</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="text-5xl font-black leading-[0.95] md:text-7xl">Stories children choose themselves.</h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-slate-200">Pick a cover, flip pages, switch between English and Punjabi, listen aloud, collect words, and continue where you stopped.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`/storybook/${continueStory.id}`} className="rounded-2xl bg-amber-300 px-6 py-4 font-black text-slate-950 shadow-xl transition hover:scale-105">Continue reading</a>
                <a href="#story-shelves" className="rounded-2xl bg-white/10 px-6 py-4 font-black text-white ring-1 ring-white/20">Browse stories</a>
              </div>
            </div>

            <a href={`/storybook/${continueStory.id}`} className="group overflow-hidden rounded-[2rem] bg-white text-slate-950 shadow-2xl ring-4 ring-white/15 transition hover:-translate-y-1">
              <div className="bg-[linear-gradient(135deg,#7f1d1d,#f59e0b)] p-6 text-white">
                <div className="flex items-start justify-between"><span className="text-7xl">{continueStory.emoji}</span><span className="rounded-full bg-white/20 px-3 py-2 text-xs font-black">Continue</span></div>
                <h2 className="mt-8 text-4xl font-black">{continueStory.title}</h2>
                <p className="mt-2 text-2xl font-black text-amber-100">{continueStory.punjabi}</p>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold leading-7 text-slate-700">{continueStory.theme}</p>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200"><div className="h-full w-2/3 rounded-full bg-gradient-to-r from-red-700 to-amber-400" /></div>
                <p className="mt-3 font-black text-red-800 group-hover:underline">Open your book →</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="story-shelves" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">Find a story</p>
            <h2 className="mt-2 text-4xl font-black">Choose your world</h2>
          </div>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search stories..." className="rounded-2xl bg-white px-4 py-3 font-bold text-slate-950 outline-none ring-2 ring-white/10 focus:ring-amber-300 md:w-80" />
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`min-w-max rounded-full px-4 py-2 text-sm font-black transition ${category === item ? 'bg-amber-300 text-slate-950' : 'bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20'}`}>{item}</button>)}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((story) => {
            const done = completed.includes(story.id);
            return (
              <a key={story.id} href={`/storybook/${story.id}`} className="group overflow-hidden rounded-[2rem] bg-white text-slate-950 shadow-lg ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative min-h-64 bg-[radial-gradient(circle_at_top_left,#fde68a55,transparent_28%),linear-gradient(135deg,#7f1d1d,#f59e0b)] p-5 text-white">
                  <div className="flex items-start justify-between"><span className="text-6xl">{story.emoji}</span><span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black">{story.age}</span></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-100">{story.category}</p>
                    <h3 className="mt-2 text-3xl font-black leading-tight">{story.title}</h3>
                    <p className="mt-2 text-xl font-black text-amber-100">{story.punjabi}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs font-black text-slate-500"><span>{story.pages.length} pages</span><span>{Math.max(2, story.pages.length * 2)} min</span></div>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{story.theme}</p>
                  <div className={`mt-5 rounded-2xl px-4 py-3 text-center font-black ${done ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-300 text-slate-950 group-hover:bg-amber-200'}`}>{done ? 'Read again' : 'Read story'}</div>
                </div>
              </a>
            );
          })}
        </div>

        {filtered.length === 0 && <div className="mt-8 rounded-[2rem] bg-white/10 p-8 text-center ring-1 ring-white/10"><p className="text-4xl">📚</p><h3 className="mt-3 text-2xl font-black">No story found</h3><p className="mt-2 text-slate-300">Try another word or category.</p></div>}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">Story shelves</p>
        <h2 className="mt-2 text-4xl font-black">A library built to keep growing</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shelves.map((shelf) => <div key={shelf.title} className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10 transition hover:bg-white/15"><p className="text-5xl">{shelf.icon}</p><h3 className="mt-4 text-2xl font-black">{shelf.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{shelf.description}</p></div>)}
        </div>
      </section>
    </main>
  );
}
