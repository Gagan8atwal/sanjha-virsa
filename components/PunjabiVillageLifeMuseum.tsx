'use client';

import { useMemo, useState } from 'react';

type VillageTopic = {
  id: string;
  name: string;
  punjabi: string;
  group: 'Home' | 'Work' | 'Community' | 'Learning';
  region: string;
  summary: string;
  details: string[];
};

const topics: VillageTopic[] = [
  { id: 'home', name: 'Village Home', punjabi: 'ਪਿੰਡ ਦਾ ਘਰ', group: 'Home', region: 'Across rural Punjab', summary: 'Traditional homes were shaped by climate, family structure, available materials, livestock, storage, and shared courtyards.', details: ['Courtyard-centered family life', 'Mud, brick, lime, and timber construction', 'Separate cooking and storage areas', 'Charpais, trunks, utensils, and grain storage'] },
  { id: 'well', name: 'Village Well', punjabi: 'ਖੂਹ', group: 'Community', region: 'Across Punjab', summary: 'The well was both a water source and a social place where families met, exchanged news, and organized daily routines.', details: ['Water collection', 'Animal watering', 'Community gathering', 'Songs and oral memory'] },
  { id: 'farming', name: 'Farming', punjabi: 'ਖੇਤੀਬਾੜੀ', group: 'Work', region: 'Five-river plains', summary: 'Farming shaped village schedules, food, trade, tools, celebrations, and family responsibilities across Punjab.', details: ['Wheat, mustard, cotton, rice, and sugarcane', 'Seasonal sowing and harvest cycles', 'Canals, wells, and tube wells', 'Animal and machine-powered work'] },
  { id: 'livestock', name: 'Livestock', punjabi: 'ਪਸ਼ੂ ਪਾਲਣਾ', group: 'Work', region: 'Across rural Punjab', summary: 'Buffaloes, cows, goats, sheep, poultry, and working animals supported food, transport, farming, and household income.', details: ['Milk and dairy production', 'Fodder preparation', 'Animal care', 'Transport and field work'] },
  { id: 'market', name: 'Village Market', punjabi: 'ਪਿੰਡ ਦੀ ਮੰਡੀ', group: 'Community', region: 'Punjab towns and villages', summary: 'Weekly markets and mandis connected farmers, craftspeople, traders, families, and nearby towns.', details: ['Crop sales', 'Tools and household goods', 'Cloth and footwear', 'Food stalls and social exchange'] },
  { id: 'school', name: 'Village School', punjabi: 'ਪਿੰਡ ਦਾ ਸਕੂਲ', group: 'Learning', region: 'Across Punjab', summary: 'Village schools became important places for literacy, language, public service, and social mobility.', details: ['Punjabi literacy', 'Basic arithmetic', 'Community events', 'Changing access for girls and boys'] },
  { id: 'crafts', name: 'Village Crafts', punjabi: 'ਪਿੰਡ ਦੇ ਹੁਨਰ', group: 'Work', region: 'Across Punjab', summary: 'Carpenters, blacksmiths, potters, weavers, leatherworkers, and embroiderers preserved practical knowledge across generations.', details: ['Agricultural tools', 'Household objects', 'Textiles and embroidery', 'Repair and reuse'] },
  { id: 'evening', name: 'Village Evening', punjabi: 'ਪਿੰਡ ਦੀ ਸ਼ਾਮ', group: 'Community', region: 'Across Punjab', summary: 'Evenings brought families and neighbors together after work for meals, stories, songs, discussion, and rest.', details: ['Courtyard gatherings', 'Folk stories and songs', 'Shared meals', 'Seasonal games and conversation'] },
];

export default function PunjabiVillageLifeMuseum() {
  const [group, setGroup] = useState<'All' | VillageTopic['group']>('All');
  const [selected, setSelected] = useState(topics[0]);
  const visible = useMemo(() => group === 'All' ? topics : topics.filter((topic) => topic.group === group), [group]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#315a45] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Village Life Museum</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Explore how Punjabi village life worked day by day.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">Open homes, farms, wells, markets, schools, crafts, and community spaces one scene at a time.</p>
          </div>
          <VillageArt topic={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'Home', 'Work', 'Community', 'Learning'] as const).map((value) => (
            <button key={value} onClick={() => setGroup(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${group === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{value}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((topic) => (
              <button key={topic.id} onClick={() => setSelected(topic)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === topic.id ? 'border-[#315a45] bg-[#f3f8f4] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <VillageArt topic={topic} compact />
                <div>
                  <p className="font-serif text-xl font-bold">{topic.name}</p>
                  <p className="mt-1 font-black text-[#6f1d1b]">{topic.punjabi}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{topic.group}</p>
                </div>
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
              <VillageArt topic={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">What to notice</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {selected.details.map((detail, index) => (
                    <div key={detail} className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4">
                      <span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span>
                      <p className="mt-2 font-serif text-xl font-bold">{detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Theme</p><p className="mt-4 font-serif text-2xl font-bold">{selected.group}</p></div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">Region</p><p className="mt-4 font-serif text-2xl font-bold">{selected.region}</p></div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function VillageArt({ topic, compact = false, large = false }: { topic: VillageTopic; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  return (
    <svg viewBox="0 0 420 320" role="img" aria-label={`${topic.name} illustration`} className={className}>
      <rect width="420" height="320" rx="24" fill="#f5e7ca" />
      <circle cx="335" cy="58" r="28" fill="#d99a22" />
      <path d="M0 225C95 185 180 196 270 230C330 253 380 247 420 225V320H0V225Z" fill="#d8bd7b" />
      <path d="M0 266C100 235 190 244 282 273C340 291 386 286 420 271V320H0V266Z" fill="#7c9b62" />
      {topic.id === 'home' && <><rect x="88" y="158" width="240" height="110" fill="#e3c48d" stroke="#6f1d1b" strokeWidth="8"/><path d="m70 160 138-95 140 95H70Z" fill="#8a5b1f"/><rect x="174" y="202" width="68" height="66" fill="#6f1d1b"/><rect x="112" y="190" width="36" height="42" fill="#1e3553"/><path d="M272 190h34v42h-34z" fill="#1e3553"/></>}
      {topic.id === 'well' && <><circle cx="210" cy="198" r="78" fill="#b56a34" stroke="#6f1d1b" strokeWidth="9"/><circle cx="210" cy="198" r="50" fill="#8fc1d2"/><path d="M118 96h184M142 96v120M278 96v120" stroke="#8a5b1f" strokeWidth="12"/><circle cx="210" cy="96" r="18" fill="#6f1d1b"/><path d="M210 96v82" stroke="#6f1d1b" strokeWidth="6"/></>}
      {topic.id === 'farming' && <><path d="M86 248h250" stroke="#8a5b1f" strokeWidth="10"/><path d="M118 248V110M168 248V92M228 248V120M288 248V100" stroke="#d99a22" strokeWidth="12" strokeLinecap="round"/><path d="M112 116h12M162 98h12M222 126h12M282 106h12" stroke="#6f1d1b" strokeWidth="8"/><rect x="285" y="210" width="82" height="42" rx="8" fill="#315a45"/><circle cx="305" cy="258" r="18" fill="#201712"/><circle cx="350" cy="258" r="18" fill="#201712"/></>}
      {topic.id === 'livestock' && <><ellipse cx="210" cy="195" rx="105" ry="58" fill="#3f3028"/><circle cx="300" cy="170" r="38" fill="#3f3028"/><path d="M320 142l25-26M280 142l-24-26" stroke="#3f3028" strokeWidth="10" strokeLinecap="round"/><path d="M145 240v35M205 240v35M260 238v37M315 220v55" stroke="#3f3028" strokeWidth="14" strokeLinecap="round"/><path d="M112 180 82 150" stroke="#3f3028" strokeWidth="10"/></>}
      {topic.id === 'market' && <><path d="M70 150h280l-28 118H98L70 150Z" fill="#e3c48d" stroke="#6f1d1b" strokeWidth="8"/><path d="M65 150h290l-24-58H89l-24 58Z" fill="#8a5b1f"/><path d="M90 92h240M125 92v58M175 92v58M225 92v58M275 92v58" stroke="#f3d9a8" strokeWidth="6"/><circle cx="150" cy="210" r="18" fill="#d99a22"/><circle cx="210" cy="210" r="18" fill="#6f1d1b"/><circle cx="270" cy="210" r="18" fill="#315a45"/></>}
      {topic.id === 'school' && <><rect x="82" y="142" width="256" height="126" fill="#fffdf8" stroke="#1e3553" strokeWidth="8"/><path d="m70 144 140-84 142 84H70Z" fill="#6f1d1b"/><rect x="178" y="202" width="64" height="66" fill="#1e3553"/><rect x="112" y="178" width="36" height="36" fill="#8fc1d2"/><rect x="272" y="178" width="36" height="36" fill="#8fc1d2"/><path d="M174 118h72" stroke="#d99a22" strokeWidth="10"/></>}
      {topic.id === 'crafts' && <><path d="M120 240h180" stroke="#8a5b1f" strokeWidth="14"/><path d="M150 240V118M270 240V118" stroke="#8a5b1f" strokeWidth="12"/><path d="M150 122h120" stroke="#6f1d1b" strokeWidth="10"/><circle cx="210" cy="172" r="48" fill="none" stroke="#315a45" strokeWidth="10"/><path d="M210 124v96M162 172h96M176 138l68 68M244 138l-68 68" stroke="#315a45" strokeWidth="5"/></>}
      {topic.id === 'evening' && <><rect x="90" y="176" width="238" height="92" fill="#e3c48d" stroke="#6f1d1b" strokeWidth="8"/><path d="m76 178 133-84 135 84H76Z" fill="#8a5b1f"/><path d="M104 278h210" stroke="#6f1d1b" strokeWidth="8"/><path d="M120 252h80M220 252h80" stroke="#1e3553" strokeWidth="10"/><path d="M120 252v28M200 252v28M220 252v28M300 252v28" stroke="#1e3553" strokeWidth="7"/></>}
    </svg>
  );
}
