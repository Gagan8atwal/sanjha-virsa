'use client';

import { useMemo, useState } from 'react';

type ClothingItem = {
  id: string;
  name: string;
  punjabi: string;
  group: 'Men' | 'Women' | 'Shared';
  region: string;
  history: string;
  materials: string[];
  use: string;
};

const items: ClothingItem[] = [
  { id: 'turban', name: 'Turban', punjabi: 'ਪੱਗ', group: 'Men', region: 'Across Punjab', history: 'The turban has long carried meanings of dignity, identity, responsibility, region, occupation, and faith. Styles vary across communities and occasions.', materials: ['Cotton voile', 'Full voile', 'Rubia'], use: 'Daily wear, religious identity, ceremonies, weddings, and regional dress.' },
  { id: 'kurta', name: 'Kurta', punjabi: 'ਕੁਰਤਾ', group: 'Shared', region: 'Across Punjab', history: 'The kurta developed as a practical long shirt suited to Punjab’s climate and daily life. Its cut, length, embroidery, and fabric changed by region and occasion.', materials: ['Cotton', 'Khaddar', 'Silk blends'], use: 'Daily wear, festivals, weddings, village life, and formal occasions.' },
  { id: 'tehmat', name: 'Tehmat', punjabi: 'ਤਹਿਮਤ', group: 'Men', region: 'West Punjab and rural Punjab', history: 'The tehmat is a wrapped lower garment associated with rural life, farming, folk performance, and regional masculine dress.', materials: ['Cotton', 'Khaddar'], use: 'Village work, folk dress, hot weather, and cultural performance.' },
  { id: 'salwar', name: 'Salwar', punjabi: 'ਸਲਵਾਰ', group: 'Women', region: 'Across Punjab', history: 'The Punjabi salwar is known for its generous pleats and comfort. Different cuts emerged across Patiala, Lahore, Multan, and other regions.', materials: ['Cotton', 'Silk', 'Georgette'], use: 'Daily wear, formal dress, weddings, festivals, and regional fashion.' },
  { id: 'kameez', name: 'Kameez', punjabi: 'ਕਮੀਜ਼', group: 'Women', region: 'Across Punjab', history: 'The kameez developed in many lengths and cuts, from practical village garments to highly embroidered formal wear.', materials: ['Cotton', 'Lawn', 'Silk', 'Velvet'], use: 'Daily wear, school, celebrations, weddings, and ceremonial dress.' },
  { id: 'phulkari', name: 'Phulkari', punjabi: 'ਫੁਲਕਾਰੀ', group: 'Women', region: 'Majha, Malwa, Doaba, Hazara', history: 'Phulkari is a major embroidery tradition created through counted-thread work. It carried family memory, regional pattern language, and ceremonial meaning.', materials: ['Handwoven khaddar', 'Silk floss'], use: 'Weddings, family gifting, ceremonial covering, display, and heritage preservation.' },
  { id: 'jutti', name: 'Punjabi Jutti', punjabi: 'ਪੰਜਾਬੀ ਜੁੱਤੀ', group: 'Shared', region: 'Across Punjab', history: 'Punjabi jutti developed through leather craft, embroidery, court culture, village trade, and regional design.', materials: ['Leather', 'Thread embroidery', 'Beads'], use: 'Weddings, festivals, formal wear, folk dress, and daily traditional wear.' },
  { id: 'paranda', name: 'Paranda', punjabi: 'ਪਰਾਂਦਾ', group: 'Women', region: 'Across Punjab', history: 'The paranda is a decorative hair accessory linked with women’s dress, folk songs, dance, celebration, and youthful identity.', materials: ['Thread', 'Silk cord', 'Decorative tassels'], use: 'Weddings, giddha, festivals, and traditional dress.' },
];

export default function PunjabiClothingMuseum() {
  const [group, setGroup] = useState<'All' | ClothingItem['group']>('All');
  const [selected, setSelected] = useState(items[0]);
  const visible = useMemo(() => group === 'All' ? items : items.filter((item) => item.group === group), [group]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#6f1d1b] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Clothing Museum</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Explore Punjabi clothing through craft, region, and identity.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/68">Open one garment at a time and study how it is made, worn, and remembered.</p>
          </div>
          <ClothingIllustration item={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'Men', 'Women', 'Shared'] as const).map((value) => (
            <button key={value} onClick={() => setGroup(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${group === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{value}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((item) => (
              <button key={item.id} onClick={() => setSelected(item)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === item.id ? 'border-[#6f1d1b] bg-[#fff7ef] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <ClothingIllustration item={item} compact />
                <div>
                  <p className="font-serif text-2xl font-bold">{item.name}</p>
                  <p className="mt-1 font-black text-[#6f1d1b]">{item.punjabi}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{item.group}</p>
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
                <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.history}</p>
              </div>
              <ClothingIllustration item={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">How it is worn</p>
                <p className="mt-4 text-lg font-medium leading-9 text-[#4f473f]">{selected.use}</p>
                <div className="mt-8 border-t border-black/10 pt-8">
                  <p className="sv-kicker">Materials and craft</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selected.materials.map((material, index) => (
                      <div key={material} className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4">
                        <span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span>
                        <p className="mt-2 font-serif text-xl font-bold">{material}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Category</p><p className="mt-4 font-serif text-2xl font-bold">{selected.group}</p></div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">Region</p><p className="mt-4 font-serif text-2xl font-bold">{selected.region}</p></div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function ClothingIllustration({ item, compact = false, large = false }: { item: ClothingItem; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  return (
    <svg viewBox="0 0 420 320" role="img" aria-label={`${item.name} illustration`} className={className}>
      <rect width="420" height="320" rx="24" fill="#f5e7ca" />
      <path d="M0 270C100 225 200 236 292 274C350 298 388 292 420 274V320H0V270Z" fill="#d8bd7b" />
      {item.id === 'turban' && <TurbanArt />}
      {item.id === 'kurta' && <KurtaArt />}
      {item.id === 'tehmat' && <TehmatArt />}
      {item.id === 'salwar' && <SalwarArt />}
      {item.id === 'kameez' && <KameezArt />}
      {item.id === 'phulkari' && <PhulkariArt />}
      {item.id === 'jutti' && <JuttiArt />}
      {item.id === 'paranda' && <ParandaArt />}
    </svg>
  );
}

function TurbanArt() {
  return <g>
    <ellipse cx="210" cy="242" rx="90" ry="18" fill="#c7a865" opacity="0.55" />
    <circle cx="210" cy="150" r="58" fill="#c98a72" />
    <path d="M143 151c4-70 42-112 70-112 40 0 73 41 66 112-28-16-101-17-136 0Z" fill="#1e3553" />
    <path d="M151 112c37-24 82-24 119 0M147 132c42-23 88-23 130 0M159 88c31-19 67-19 102 0M177 64c21-11 46-11 68 0" fill="none" stroke="#f3d9a8" strokeWidth="7" strokeLinecap="round" opacity="0.8" />
    <path d="M183 155c16 10 38 10 54 0" stroke="#5b382c" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M150 228c16-42 40-61 60-61s44 19 60 61" fill="#fffdf8" stroke="#6f1d1b" strokeWidth="8" />
  </g>;
}

function KurtaArt() {
  return <g>
    <ellipse cx="210" cy="282" rx="110" ry="16" fill="#c7a865" opacity="0.5" />
    <path d="M155 70h110l18 44 37 35-26 28-28-24v118H154V153l-28 24-26-28 37-35 18-44Z" fill="#fffdf8" stroke="#1e3553" strokeWidth="8" strokeLinejoin="round" />
    <path d="M210 70v48M197 95h26" stroke="#6f1d1b" strokeWidth="6" strokeLinecap="round" />
    <path d="M168 134h84M168 160h84M168 186h84" stroke="#d6c09b" strokeWidth="5" strokeLinecap="round" />
    <path d="M178 271v28M242 271v28" stroke="#1e3553" strokeWidth="14" strokeLinecap="round" />
  </g>;
}

function TehmatArt() {
  return <g>
    <ellipse cx="210" cy="282" rx="112" ry="16" fill="#c7a865" opacity="0.5" />
    <path d="M148 74h124l16 50-20 46H152l-20-46 16-50Z" fill="#fffdf8" stroke="#1e3553" strokeWidth="8" />
    <path d="M150 164h120l18 110-78 24-78-24 18-110Z" fill="#8a5b1f" stroke="#6f1d1b" strokeWidth="8" />
    <path d="M165 174c34 24 56 28 90 0M160 204c39 25 61 29 100 0M157 234c43 24 66 26 106 0" fill="none" stroke="#f3d9a8" strokeWidth="6" />
    <path d="M210 164v125" stroke="#6f1d1b" strokeWidth="6" />
  </g>;
}

function SalwarArt() {
  return <g>
    <ellipse cx="210" cy="292" rx="112" ry="15" fill="#c7a865" opacity="0.5" />
    <path d="M132 52h156l-18 77-19 40 44 121h-70l-15-98-15 98h-70l44-121-19-40-18-77Z" fill="#d9a441" stroke="#6f1d1b" strokeWidth="8" strokeLinejoin="round" />
    <path d="M150 80h120M145 105h130M160 132h100" stroke="#fff5d8" strokeWidth="5" strokeLinecap="round" />
    <path d="M175 170c15 12 25 17 35 17s20-5 35-17" fill="none" stroke="#6f1d1b" strokeWidth="6" />
  </g>;
}

function KameezArt() {
  return <g>
    <ellipse cx="210" cy="282" rx="110" ry="16" fill="#c7a865" opacity="0.5" />
    <path d="M155 62h110l20 48 42 42-29 31-29-28v121H151V155l-29 28-29-31 42-42 20-48Z" fill="#6f1d1b" stroke="#3e1f1c" strokeWidth="8" strokeLinejoin="round" />
    <path d="M190 62c0 22 8 34 20 34s20-12 20-34" fill="#f5e7ca" />
    <path d="M210 96v168" stroke="#d99a22" strokeWidth="6" strokeDasharray="12 9" />
    <path d="M168 138h84M168 172h84M168 206h84" stroke="#f3d9a8" strokeWidth="5" opacity="0.65" />
    <path d="M173 276v22M247 276v22" stroke="#1e3553" strokeWidth="14" strokeLinecap="round" />
  </g>;
}

function PhulkariArt() {
  return <g>
    <ellipse cx="210" cy="286" rx="120" ry="16" fill="#c7a865" opacity="0.5" />
    <path d="M76 52h268v214H76Z" fill="#8e2622" stroke="#5d1714" strokeWidth="8" />
    <g fill="#d99a22">
      {[110,170,230,290].map((x) => [86,146,206].map((y) => <path key={`${x}-${y}`} d={`M${x} ${y-18}l18 18-18 18-18-18 18-18Z`} />))}
    </g>
    <g stroke="#f3d9a8" strokeWidth="5">
      <path d="M76 70h268M76 248h268M94 52v214M326 52v214" />
      <path d="M82 58l256 202M338 58 82 260" opacity="0.35" />
    </g>
  </g>;
}

function JuttiArt() {
  return <g>
    <ellipse cx="210" cy="262" rx="126" ry="20" fill="#c7a865" opacity="0.5" />
    <path d="M54 180c58-31 122-31 173 3 17 11 34 31 41 57H84c-20 0-31-12-30-60Z" fill="#a85d2a" stroke="#5c2c12" strokeWidth="8" />
    <path d="M366 180c-58-31-122-31-173 3-17 11-34 31-41 57h184c20 0 31-12 30-60Z" fill="#a85d2a" stroke="#5c2c12" strokeWidth="8" />
    <path d="M80 190c45-18 88-12 130 15M340 190c-45-18-88-12-130 15" fill="none" stroke="#d99a22" strokeWidth="7" strokeLinecap="round" />
    <path d="M108 214h70M242 214h70" stroke="#f3d9a8" strokeWidth="5" strokeDasharray="9 8" />
  </g>;
}

function ParandaArt() {
  return <g>
    <ellipse cx="210" cy="286" rx="88" ry="14" fill="#c7a865" opacity="0.5" />
    <path d="M180 42c18 20 26 44 26 72v95" stroke="#4a2a1d" strokeWidth="20" strokeLinecap="round" />
    <path d="M240 42c-18 20-26 44-26 72v95" stroke="#4a2a1d" strokeWidth="20" strokeLinecap="round" />
    <path d="M210 94v136" stroke="#6f1d1b" strokeWidth="22" strokeLinecap="round" />
    <path d="M210 105v118" stroke="#d99a22" strokeWidth="5" strokeDasharray="10 10" />
    <path d="M170 224h80l-18 52-22-22-22 22-18-52Z" fill="#d99a22" stroke="#6f1d1b" strokeWidth="7" />
    <circle cx="210" cy="236" r="10" fill="#fff3d9" />
  </g>;
}
