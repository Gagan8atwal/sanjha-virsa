'use client';

import { useMemo, useRef, useState } from 'react';

type Item = { name: string; pa: string; emoji: string; detail: string };
type Topic = { id: string; title: string; punjabi: string; emoji: string; summary: string; items: Item[] };

const topics: Topic[] = [
  { id: 'food', title: 'Food', punjabi: 'ਖਾਣਾ', emoji: '🍲', summary: 'Everyday meals, seasonal foods, sweets, drinks, and hospitality.', items: [
    { name: 'Saag', pa: 'ਸਾਗ', emoji: '🥬', detail: 'A winter greens dish often served with makki di roti.' },
    { name: 'Lassi', pa: 'ਲੱਸੀ', emoji: '🥛', detail: 'A yogurt drink connected with hospitality and summer refreshment.' },
    { name: 'Pinni', pa: 'ਪਿੰਨੀ', emoji: '🍪', detail: 'A rich winter sweet made with ghee, flour, and nuts.' },
    { name: 'Kheer', pa: 'ਖੀਰ', emoji: '🍚', detail: 'A milk and rice dessert served at family and religious gatherings.' },
  ]},
  { id: 'clothing', title: 'Clothing', punjabi: 'ਪਹਿਰਾਵਾ', emoji: '👳', summary: 'Regional dress, craft, identity, and celebration clothing.', items: [
    { name: 'Phulkari', pa: 'ਫੁਲਕਾਰੀ', emoji: '🧵', detail: 'A Punjabi embroidery tradition with family, regional, and ceremonial meaning.' },
    { name: 'Turban', pa: 'ਪੱਗ', emoji: '👳', detail: 'Turban styles vary by region, community, purpose, and occasion.' },
    { name: 'Jutti', pa: 'ਜੁੱਤੀ', emoji: '👞', detail: 'Handcrafted footwear known for leather work and decorative embroidery.' },
    { name: 'Paranda', pa: 'ਪਰਾਂਦਾ', emoji: '🎀', detail: 'A decorative hair accessory remembered in dress, dance, and folk songs.' },
  ]},
  { id: 'music', title: 'Music', punjabi: 'ਸੰਗੀਤ', emoji: '🥁', summary: 'Instruments, folk voices, rhythm, boliyan, and performance.', items: [
    { name: 'Dhol', pa: 'ਢੋਲ', emoji: '🥁', detail: 'A powerful drum used in bhangra, celebrations, and gatherings.' },
    { name: 'Tumbi', pa: 'ਤੂੰਬੀ', emoji: '🎸', detail: 'A one-string folk instrument with a sharp, recognizable sound.' },
    { name: 'Algoza', pa: 'ਅਲਗੋਜ਼ਾ', emoji: '🎶', detail: 'A paired flute instrument strongly associated with Punjabi folk music.' },
    { name: 'Boliyan', pa: 'ਬੋਲੀਆਂ', emoji: '🎤', detail: 'Short lyrical verses used especially in giddha and wedding celebrations.' },
  ]},
  { id: 'dance', title: 'Dance', punjabi: 'ਨੱਚ', emoji: '💃', summary: 'Movement, rhythm, work, humor, and celebration.', items: [
    { name: 'Bhangra', pa: 'ਭੰਗੜਾ', emoji: '🕺', detail: 'A Punjabi dance tradition associated with energy, rhythm, and harvest imagery.' },
    { name: 'Giddha', pa: 'ਗਿੱਧਾ', emoji: '💃', detail: 'A women’s dance tradition centered on boliyan, expression, humor, and memory.' },
    { name: 'Jhumar', pa: 'ਝੂਮਰ', emoji: '🌀', detail: 'A graceful folk dance associated with western Punjab regions.' },
    { name: 'Sammi', pa: 'ਸੰਮੀ', emoji: '🌙', detail: 'A traditional women’s folk dance known in parts of Punjab.' },
  ]},
  { id: 'weddings', title: 'Weddings', punjabi: 'ਵਿਆਹ', emoji: '💍', summary: 'Songs, clothing, food, family roles, and changing customs.', items: [
    { name: 'Jaggo', pa: 'ਜਾਗੋ', emoji: '🏺', detail: 'A lively pre-wedding tradition involving singing and celebration.' },
    { name: 'Maiyan', pa: 'ਮਾਈਆਂ', emoji: '🟡', detail: 'Pre-wedding customs involving family gathering and turmeric traditions.' },
    { name: 'Sehra', pa: 'ਸਿਹਰਾ', emoji: '🌸', detail: 'A groom-related wedding adornment used in some Punjabi traditions.' },
    { name: 'Suhag Songs', pa: 'ਸੁਹਾਗ', emoji: '🎵', detail: 'Wedding songs carrying emotion, humor, blessing, and oral history.' },
  ]},
  { id: 'games', title: 'Traditional Games', punjabi: 'ਰਵਾਇਤੀ ਖੇਡਾਂ', emoji: '🤼', summary: 'Physical games, strategy, and village childhood activities.', items: [
    { name: 'Kabaddi', pa: 'ਕਬੱਡੀ', emoji: '🤼', detail: 'A team sport requiring breath control, strength, strategy, and agility.' },
    { name: 'Gulli Danda', pa: 'ਗੁੱਲੀ ਡੰਡਾ', emoji: '🏏', detail: 'A traditional outdoor striking game played with two wooden pieces.' },
    { name: 'Pithu Garam', pa: 'ਪਿੱਠੂ ਗਰਮ', emoji: '🪨', detail: 'A team game involving stacked stones, throwing, and rebuilding.' },
    { name: 'Kikli', pa: 'ਕਿੱਕਲੀ', emoji: '👭', detail: 'A spinning girls’ game often accompanied by songs.' },
  ]},
  { id: 'arts', title: 'Folk Arts', punjabi: 'ਲੋਕ ਕਲਾ', emoji: '🎨', summary: 'Embroidery, pottery, woodwork, and decorative traditions.', items: [
    { name: 'Embroidery', pa: 'ਕੜ੍ਹਾਈ', emoji: '🪡', detail: 'Embroidery carries regional design, family memory, and ceremonial value.' },
    { name: 'Pottery', pa: 'ਮਿੱਟੀ ਦੇ ਭਾਂਡੇ', emoji: '🏺', detail: 'Clay vessels supported cooking, storage, and water cooling.' },
    { name: 'Woodwork', pa: 'ਲੱਕੜ ਦਾ ਕੰਮ', emoji: '🪵', detail: 'Woodcraft appeared in doors, furniture, farm tools, and household objects.' },
    { name: 'Charpai Weaving', pa: 'ਮੰਜਾ ਬੁਣਾਈ', emoji: '🛏️', detail: 'Charpai weaving combines utility, color, skill, and courtyard life.' },
  ]},
  { id: 'modern', title: 'Modern Punjabi Life', punjabi: 'ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਜੀਵਨ', emoji: '🌍', summary: 'Cities, diaspora, media, migration, and new identities.', items: [
    { name: 'Diaspora', pa: 'ਪਰਵਾਸ', emoji: '✈️', detail: 'Punjabi communities abroad preserve culture while adapting to new societies.' },
    { name: 'Cinema', pa: 'ਸਿਨੇਮਾ', emoji: '🎬', detail: 'Punjabi cinema reflects humor, migration, family, music, and social change.' },
    { name: 'Urban Punjab', pa: 'ਸ਼ਹਿਰੀ ਪੰਜਾਬ', emoji: '🏙️', detail: 'Modern cities mix industry, education, technology, food, and tradition.' },
    { name: 'Digital Culture', pa: 'ਡਿਜ਼ਿਟਲ ਸਭਿਆਚਾਰ', emoji: '📱', detail: 'Music, language, stories, and identity now travel through digital platforms.' },
  ]},
];

export default function PunjabiCultureWorld() {
  const [topic, setTopic] = useState(topics[0]);
  const [item, setItem] = useState(topics[0].items[0]);
  const [visited, setVisited] = useState<string[]>([]);
  const detailRef = useRef<HTMLElement | null>(null);
  const progress = useMemo(() => Math.round((visited.length / topics.length) * 100), [visited]);

  function openTopic(next: Topic) {
    setTopic(next);
    setItem(next.items[0]);
    setVisited((current) => current.includes(next.id) ? current : [...current, next.id]);
    window.setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
  }

  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#7f1d1d,#7c3aed_55%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-200">Punjabi Culture World</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Tap a culture world to open it.</h1>
          <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-100">Every card and item below is now directly clickable.</p>
          <div className="mt-5 max-w-md"><div className="flex justify-between text-xs font-black"><span>Progress</span><span>{progress}%</span></div><div className="mt-2 h-3 overflow-hidden rounded-full bg-white/15"><div className="h-full bg-amber-300" style={{ width: `${progress}%` }} /></div></div>
        </div>
      </section>

      <nav aria-label="Culture topics" className="mx-auto grid max-w-7xl gap-3 px-5 py-6 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {topics.map((next) => (
          <a
            key={next.id}
            href={`#culture-${next.id}`}
            onClick={(event) => { event.preventDefault(); openTopic(next); }}
            className={`block cursor-pointer rounded-3xl p-4 text-left shadow-md ring-1 transition active:scale-[0.98] ${topic.id === next.id ? 'bg-[#24160f] text-white ring-[#24160f]' : 'bg-white ring-black/10'}`}
          >
            <span className="text-4xl">{next.emoji}</span>
            <h2 className="mt-3 text-xl font-black">{next.title}</h2>
            <p className={topic.id === next.id ? 'mt-1 font-black text-amber-200' : 'mt-1 font-black text-red-800'}>{next.punjabi}</p>
            <p className="mt-3 text-sm font-black underline">Open section →</p>
          </a>
        ))}
      </nav>

      <section ref={detailRef} id={`culture-${topic.id}`} className="mx-auto max-w-7xl scroll-mt-28 px-5 py-6 md:px-8">
        <div className="rounded-[2rem] bg-white p-5 shadow-2xl ring-1 ring-black/10">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-purple-800">Open section</p><h2 className="mt-2 text-3xl font-black">{topic.title}</h2><p className="mt-1 text-2xl font-black text-red-800">{topic.punjabi}</p></div><span className="text-6xl">{topic.emoji}</span></div>
          <p className="mt-4 text-base font-semibold leading-7 text-slate-700">{topic.summary}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {topic.items.map((nextItem) => (
              <a
                key={nextItem.name}
                href={`#item-${topic.id}-${nextItem.name.toLowerCase().replaceAll(' ', '-')}`}
                onClick={(event) => { event.preventDefault(); setItem(nextItem); }}
                className={`block cursor-pointer rounded-2xl p-4 text-center ring-1 transition active:scale-95 ${item.name === nextItem.name ? 'bg-red-800 text-white ring-red-800' : 'bg-amber-50 ring-amber-200'}`}
              >
                <p className="text-4xl">{nextItem.emoji}</p>
                <p className="mt-2 text-sm font-black">{nextItem.name}</p>
                <p className={item.name === nextItem.name ? 'mt-1 text-sm font-black text-amber-200' : 'mt-1 text-sm font-black text-red-800'}>{nextItem.pa}</p>
              </a>
            ))}
          </div>

          <article id={`item-${topic.id}-${item.name.toLowerCase().replaceAll(' ', '-')}`} className="mt-6 rounded-3xl bg-amber-50 p-5 ring-1 ring-amber-200">
            <div className="flex items-center gap-4"><span className="text-6xl">{item.emoji}</span><div><h3 className="text-2xl font-black">{item.name}</h3><p className="text-xl font-black text-red-800">{item.pa}</p></div></div>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">{item.detail}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
