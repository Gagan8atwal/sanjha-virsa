'use client';

import { useMemo, useState } from 'react';

type HeritageObject = {
  id: string;
  name: string;
  punjabi: string;
  category: 'Household' | 'Farming' | 'Craft' | 'Textile';
  material: string;
  use: string;
  history: string;
  facts: string[];
};

const objects: HeritageObject[] = [
  { id: 'charkha', name: 'Charkha', punjabi: 'ਚਰਖਾ', category: 'Textile', material: 'Wood and spindle parts', use: 'Spinning fiber into thread.', history: 'The charkha was a household tool connected with textile work, self-reliance, women’s labor, songs, and family memory.', facts: ['Used for spinning cotton', 'Often kept in courtyards', 'Appears in Punjabi folk songs', 'Connected with handwoven cloth'] },
  { id: 'charpai', name: 'Charpai', punjabi: 'ਮੰਜਾ', category: 'Household', material: 'Wooden frame and woven rope', use: 'Sleeping, sitting, resting, and social gatherings.', history: 'The charpai remains one of the most recognizable objects of Punjabi domestic and village life.', facts: ['Portable and breathable', 'Used indoors and outdoors', 'Rewoven when rope wears out', 'Central to courtyard gatherings'] },
  { id: 'matka', name: 'Clay Water Pot', punjabi: 'ਘੜਾ', category: 'Household', material: 'Fired clay', use: 'Storing and naturally cooling water.', history: 'Clay pots used evaporation to keep drinking water cooler in Punjab’s hot climate.', facts: ['Made by potters', 'Stored in shaded areas', 'Naturally cools water', 'Common before refrigeration'] },
  { id: 'chakki', name: 'Hand Mill', punjabi: 'ਚੱਕੀ', category: 'Household', material: 'Carved stone', use: 'Grinding grain into flour.', history: 'The hand mill was part of daily food preparation before electric and commercial milling became common.', facts: ['Two circular stones', 'Turned by hand', 'Used for wheat and other grains', 'Associated with household labor songs'] },
  { id: 'hal', name: 'Traditional Plough', punjabi: 'ਹਲ', category: 'Farming', material: 'Wood and iron', use: 'Opening and turning soil before sowing.', history: 'Animal-drawn ploughs shaped agriculture before tractors and mechanized equipment became widespread.', facts: ['Pulled by oxen', 'Made by village craftspeople', 'Adapted to local soil', 'Required skilled handling'] },
  { id: 'tokka', name: 'Fodder Cutter', punjabi: 'ਟੋਕਾ', category: 'Farming', material: 'Iron blade and wooden structure', use: 'Cutting green fodder for livestock.', history: 'Manual fodder cutters helped households prepare feed for buffaloes, cows, and working animals.', facts: ['Used near livestock areas', 'Cuts fodder into smaller pieces', 'Operated by hand', 'Still found in some rural homes'] },
  { id: 'phulkari-frame', name: 'Embroidery Frame', punjabi: 'ਕਢਾਈ ਦਾ ਅੱਡਾ', category: 'Textile', material: 'Wood and stretched cloth', use: 'Holding cloth steady during embroidery.', history: 'Frames supported careful decorative work used in garments, household textiles, and ceremonial gifts.', facts: ['Keeps fabric under tension', 'Supports detailed patterns', 'Used for family and commercial work', 'Connected with skill passed across generations'] },
  { id: 'sandook', name: 'Wooden Trunk', punjabi: 'ਸੰਦੂਕ', category: 'Craft', material: 'Wood, metal fittings, paint', use: 'Storing clothing, textiles, documents, and dowry items.', history: 'Decorated trunks preserved valuable household goods and often travelled with women after marriage.', facts: ['Often hand-painted', 'Protected important textiles', 'Used as storage and furniture', 'Carried family memory'] },
];

export default function PunjabiObjectsMuseum() {
  const [category, setCategory] = useState<'All' | HeritageObject['category']>('All');
  const [selected, setSelected] = useState(objects[0]);
  const visible = useMemo(() => category === 'All' ? objects : objects.filter((item) => item.category === category), [category]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#8a5b1f] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Cultural Objects Museum</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Explore the objects that made everyday Punjabi life work.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">Open one object at a time to learn its material, purpose, craftsmanship, and cultural memory.</p>
          </div>
          <ObjectArt item={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'Household', 'Farming', 'Craft', 'Textile'] as const).map((value) => (
            <button key={value} onClick={() => setCategory(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${category === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{value}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((item) => (
              <button key={item.id} onClick={() => setSelected(item)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === item.id ? 'border-[#8a5b1f] bg-[#fff8e8] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <ObjectArt item={item} compact />
                <div><p className="font-serif text-xl font-bold">{item.name}</p><p className="mt-1 font-black text-[#6f1d1b]">{item.punjabi}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{item.category}</p></div>
              </button>
            ))}
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
            <div className="grid gap-8 bg-[#f0e5d4] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10">
              <div>
                <p className="sv-kicker">{selected.category}</p>
                <h2 className="mt-3 font-serif text-5xl font-bold tracking-[-0.03em]">{selected.name}</h2>
                <p className="mt-2 text-3xl font-black text-[#6f1d1b]">{selected.punjabi}</p>
                <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.history}</p>
              </div>
              <ObjectArt item={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">How it was used</p>
                <p className="mt-4 text-lg font-medium leading-9 text-[#4f473f]">{selected.use}</p>
                <div className="mt-8 border-t border-black/10 pt-8">
                  <p className="sv-kicker">What to remember</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selected.facts.map((fact, index) => <div key={fact} className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4"><span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span><p className="mt-2 font-serif text-xl font-bold">{fact}</p></div>)}
                  </div>
                </div>
              </section>
              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Material</p><p className="mt-4 font-serif text-2xl font-bold">{selected.material}</p></div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">Category</p><p className="mt-4 font-serif text-2xl font-bold">{selected.category}</p></div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function ObjectArt({ item, compact = false, large = false }: { item: HeritageObject; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  return <svg viewBox="0 0 420 320" role="img" aria-label={`${item.name} illustration`} className={className}>
    <rect width="420" height="320" rx="24" fill="#f5e7ca"/><path d="M0 270C110 230 210 240 310 277C360 295 392 291 420 278V320H0V270Z" fill="#d8bd7b"/>
    {item.id === 'charkha' && <><circle cx="170" cy="184" r="82" fill="none" stroke="#6f1d1b" strokeWidth="10"/><path d="M170 102v164M88 184h164M112 126l116 116M228 126 112 242" stroke="#8a5b1f" strokeWidth="5"/><path d="M250 102h80v152h-80M250 140h80M250 214h80" stroke="#315a45" strokeWidth="10"/></>}
    {item.id === 'charpai' && <><rect x="80" y="120" width="260" height="110" fill="#d99a22" stroke="#6f1d1b" strokeWidth="10"/><path d="M92 132l236 86M328 132 92 218M92 160h236M92 192h236" stroke="#fff3d9" strokeWidth="5"/><path d="M90 230v52M330 230v52" stroke="#8a5b1f" strokeWidth="14"/></>}
    {item.id === 'matka' && <><path d="M150 86h120c-28 34-36 62-28 88 17 54 14 93-32 118-46-25-49-64-32-118 8-26 0-54-28-88Z" fill="#b56a34" stroke="#6f1d1b" strokeWidth="9"/><ellipse cx="210" cy="86" rx="60" ry="18" fill="#f5e7ca" stroke="#6f1d1b" strokeWidth="8"/><path d="M170 160h80M165 196h90M178 232h64" stroke="#d99a22" strokeWidth="6"/></>}
    {item.id === 'chakki' && <><ellipse cx="210" cy="218" rx="120" ry="48" fill="#6f675f"/><ellipse cx="210" cy="170" rx="110" ry="42" fill="#a19a8f" stroke="#4f473f" strokeWidth="8"/><circle cx="210" cy="170" r="22" fill="#5f564d"/><path d="M210 170 300 92" stroke="#8a5b1f" strokeWidth="14" strokeLinecap="round"/></>}
    {item.id === 'hal' && <><path d="M92 238 300 82" stroke="#8a5b1f" strokeWidth="18" strokeLinecap="round"/><path d="M165 190 120 268M165 190l76 58M280 96l54 16" stroke="#6f1d1b" strokeWidth="12" strokeLinecap="round"/></>}
    {item.id === 'tokka' && <><rect x="112" y="118" width="196" height="132" fill="#8a5b1f" stroke="#6f1d1b" strokeWidth="8"/><circle cx="210" cy="184" r="56" fill="#6f675f"/><path d="M210 128v112M154 184h112M170 144l80 80M250 144l-80 80" stroke="#f5e7ca" strokeWidth="7"/><path d="M210 128 320 76" stroke="#1e3553" strokeWidth="12" strokeLinecap="round"/></>}
    {item.id === 'phulkari-frame' && <><rect x="82" y="70" width="256" height="190" fill="#8e2622" stroke="#6f1d1b" strokeWidth="10"/><g fill="#d99a22">{[125,185,245,305].map((x)=>[112,172,232].map((y)=><path key={`${x}-${y}`} d={`M${x} ${y-16}l16 16-16 16-16-16 16-16Z`}/>))}</g><path d="M70 58h280M70 272h280" stroke="#8a5b1f" strokeWidth="14"/></>}
    {item.id === 'sandook' && <><rect x="88" y="108" width="244" height="150" rx="10" fill="#8a5b1f" stroke="#6f1d1b" strokeWidth="9"/><path d="M88 145h244M125 108v150M295 108v150" stroke="#d99a22" strokeWidth="7"/><circle cx="210" cy="184" r="18" fill="#201712"/><path d="M168 222h84" stroke="#f3d9a8" strokeWidth="7"/></>}
  </svg>;
}
