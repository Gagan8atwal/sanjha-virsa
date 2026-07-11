'use client';

import { useMemo, useState } from 'react';

type Dance = {
  id: string;
  name: string;
  punjabi: string;
  type: 'Men' | 'Women' | 'Shared' | 'Martial';
  region: string;
  setting: string;
  summary: string;
  movements: string[];
  music: string[];
};

const dances: Dance[] = [
  { id: 'bhangra', name: 'Bhangra', punjabi: 'ਭੰਗੜਾ', type: 'Men', region: 'Majha and wider Punjab', setting: 'Harvest fairs, celebrations, stage performance', summary: 'Bhangra developed from agricultural celebration and became one of the most recognized Punjabi performance traditions worldwide.', movements: ['Raised arms and shoulder rhythm', 'Strong footwork and jumps', 'Circular group formations', 'Call-and-response energy'], music: ['Dhol', 'Tumbi', 'Chimta', 'Boliyan'] },
  { id: 'giddha', name: 'Giddha', punjabi: 'ਗਿੱਧਾ', type: 'Women', region: 'Across Punjab', setting: 'Weddings, teeyan, family gatherings', summary: 'Giddha combines clapping, expressive movement, boliyan, humor, memory, and women’s social storytelling.', movements: ['Clapping rhythm', 'Alternating solo and group turns', 'Expressive gestures', 'Circular formations'], music: ['Boliyan', 'Clapping', 'Dholki', 'Folk singing'] },
  { id: 'jhumar', name: 'Jhumar', punjabi: 'ਝੂਮਰ', type: 'Men', region: 'Sandalmbar and western Punjab', setting: 'Fairs, weddings, seasonal gatherings', summary: 'Jhumar is known for graceful swaying, controlled rhythm, circular movement, and a calmer tempo than bhangra.', movements: ['Swaying upper body', 'Measured circular steps', 'Hand gestures above shoulder level', 'Group synchronization'], music: ['Dhol', 'Algoza', 'Folk singing', 'Slow rhythmic cycles'] },
  { id: 'sammi', name: 'Sammi', punjabi: 'ਸੰਮੀ', type: 'Women', region: 'Historically Sandal Bar and western Punjab', setting: 'Women’s gatherings and folk performance', summary: 'Sammi is a graceful women’s dance associated with lyrical movement, clapping, turning, and regional folk memory.', movements: ['Soft turns', 'Rhythmic claps', 'Arm patterns', 'Paired or circular movement'], music: ['Folk vocals', 'Clapping', 'Dholki', 'Traditional verses'] },
  { id: 'luddi', name: 'Luddi', punjabi: 'ਲੁੱਡੀ', type: 'Shared', region: 'Across Punjab', setting: 'Victory, celebration, weddings', summary: 'Luddi is an energetic celebratory dance marked by shoulder movement, hand gestures, and forward-moving formations.', movements: ['Shoulder lifts', 'One-hand head gesture', 'Quick stepping', 'Forward and circular travel'], music: ['Dhol', 'Folk vocals', 'Chimta', 'Celebratory rhythm'] },
  { id: 'malwai-giddha', name: 'Malwai Giddha', punjabi: 'ਮਲਵਈ ਗਿੱਧਾ', type: 'Men', region: 'Malwa', setting: 'Village fairs, weddings, community stages', summary: 'Malwai Giddha is a men’s folk form built around boli singing, humor, social commentary, and rhythmic movement.', movements: ['Boli-led performance', 'Clapping and stepping', 'Comic expression', 'Group response'], music: ['Bugchu', 'Chimta', 'Dholki', 'Boliyan'] },
  { id: 'gatka', name: 'Gatka', punjabi: 'ਗਤਕਾ', type: 'Martial', region: 'Sikh communities worldwide', setting: 'Hola Mohalla, nagar kirtan, demonstrations', summary: 'Gatka is a Sikh martial arts tradition emphasizing discipline, timing, coordination, controlled weapon practice, and spiritual focus.', movements: ['Footwork patterns', 'Weapon control', 'Partner drills', 'Circular defense'], music: ['Nagara', 'Dhol', 'Warrior ballads', 'Demonstration rhythm'] },
];

export default function PunjabiDanceMuseum() {
  const [type, setType] = useState<'All' | Dance['type']>('All');
  const [selected, setSelected] = useState(dances[0]);
  const visible = useMemo(() => type === 'All' ? dances : dances.filter((dance) => dance.type === type), [type]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#6f1d1b] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Folk Dance Museum</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Explore movement, rhythm, storytelling, and regional identity.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">Open one dance at a time to learn where it comes from, how it moves, and what music supports it.</p>
          </div>
          <DanceArt dance={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'Men', 'Women', 'Shared', 'Martial'] as const).map((value) => (
            <button key={value} onClick={() => setType(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${type === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{value}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((dance) => (
              <button key={dance.id} onClick={() => setSelected(dance)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === dance.id ? 'border-[#6f1d1b] bg-[#fff7ef] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <DanceArt dance={dance} compact />
                <div><p className="font-serif text-xl font-bold">{dance.name}</p><p className="mt-1 font-black text-[#6f1d1b]">{dance.punjabi}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{dance.type}</p></div>
              </button>
            ))}
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
            <div className="grid gap-8 bg-[#f0e5d4] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10">
              <div>
                <p className="sv-kicker">{selected.region}</p>
                <h2 className="mt-3 font-serif text-5xl font-bold tracking-[-0.03em]">{selected.name}</h2>
                <p className="mt-2 text-3xl font-black text-[#6f1d1b]">{selected.punjabi}</p>
                <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.summary}</p>
              </div>
              <DanceArt dance={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">Signature movement</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {selected.movements.map((movement, index) => <div key={movement} className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4"><span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span><p className="mt-2 font-serif text-xl font-bold">{movement}</p></div>)}
                </div>
                <div className="mt-8 border-t border-black/10 pt-8"><p className="sv-kicker">Music and rhythm</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{selected.music.map((item) => <div key={item} className="rounded-2xl border border-black/10 bg-[#fffdf8] p-4 font-semibold">{item}</div>)}</div></div>
              </section>
              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Performance setting</p><p className="mt-4 font-serif text-2xl font-bold">{selected.setting}</p></div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">Tradition type</p><p className="mt-4 font-serif text-2xl font-bold">{selected.type}</p></div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function DanceArt({ dance, compact = false, large = false }: { dance: Dance; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  const accent = dance.type === 'Women' ? '#6f1d1b' : dance.type === 'Martial' ? '#1e3553' : '#315a45';
  return <svg viewBox="0 0 420 320" role="img" aria-label={`${dance.name} illustration`} className={className}>
    <rect width="420" height="320" rx="24" fill="#f5e7ca"/><circle cx="334" cy="58" r="28" fill="#d99a22"/><path d="M0 272C100 230 205 240 302 278C355 298 391 293 420 280V320H0V272Z" fill="#d8bd7b"/>
    <circle cx="170" cy="105" r="24" fill="#c98a72"/><circle cx="260" cy="110" r="24" fill="#c98a72"/>
    <path d="M170 132v92M260 137v87M170 158l-58-52M170 158l58-54M260 162l-50-52M260 162l58-50M170 224l-42 56M170 224l38 54M260 224l-36 54M260 224l44 54" stroke={accent} strokeWidth="14" strokeLinecap="round"/>
    {dance.type === 'Women' && <><path d="M138 170h64l26 70h-116l26-70Z" fill="#d99a22"/><path d="M228 174h64l26 66H202l26-66Z" fill="#8a5b1f"/></>}
    {dance.type === 'Martial' && <><path d="M96 84 226 218M320 82 202 218" stroke="#6f675f" strokeWidth="10" strokeLinecap="round"/><circle cx="108" cy="94" r="18" fill="none" stroke="#6f675f" strokeWidth="7"/><circle cx="308" cy="94" r="18" fill="none" stroke="#6f675f" strokeWidth="7"/></>}
  </svg>;
}
