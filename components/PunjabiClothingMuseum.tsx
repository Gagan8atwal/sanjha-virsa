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
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Category</p>
                  <p className="mt-4 font-serif text-2xl font-bold">{selected.group}</p>
                </div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6">
                  <p className="sv-kicker">Region</p>
                  <p className="mt-4 font-serif text-2xl font-bold">{selected.region}</p>
                </div>
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
  const accent = item.group === 'Men' ? '#1e3553' : item.group === 'Women' ? '#6f1d1b' : '#315a45';
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label={`${item.name} illustration`} className={className}>
      <rect width="420" height="300" rx="24" fill="#f5e7ca" />
      <circle cx="330" cy="58" r="28" fill="#d99a22" />
      <path d="M0 240C100 195 190 210 280 248C335 272 380 265 420 244V300H0V240Z" fill="#c8a85b" />
      <circle cx="210" cy="76" r="34" fill="#c98a72" />
      {item.id === 'turban' && <path d="M162 74c12-54 84-65 102-6-8 20-28 33-55 33-24 0-39-9-47-27Z" fill={accent} />}
      {item.id === 'paranda' && <><path d="M210 110v104" stroke={accent} strokeWidth="18" strokeLinecap="round"/><path d="M180 218h60l-30 42-30-42Z" fill="#d99a22"/></>}
      <path d="M150 130c18-20 40-30 60-30s42 10 60 30l28 116H122l28-116Z" fill={accent} />
      {item.id === 'phulkari' && <g fill="#d99a22"><path d="m165 155 18 18-18 18-18-18 18-18Z"/><path d="m210 155 18 18-18 18-18-18 18-18Z"/><path d="m255 155 18 18-18 18-18-18 18-18Z"/></g>}
      {item.id === 'salwar' || item.id === 'tehmat' ? <path d="M150 246h120l-18 42h-84l-18-42Z" fill="#fffdf8" stroke={accent} strokeWidth="7" /> : <path d="M165 246h90v42h-90z" fill="#fffdf8" stroke={accent} strokeWidth="7" />}
      {item.id === 'jutti' && <><path d="M120 257h74c16 0 28 12 28 28h-102v-28Z" fill="#b06a3b"/><path d="M226 257h74v28H198c0-16 12-28 28-28Z" fill="#b06a3b"/></>}
      {item.id === 'kurta' || item.id === 'kameez' ? <path d="M210 120v126" stroke="#f5e7ca" strokeWidth="7" strokeDasharray="10 9" /> : null}
    </svg>
  );
}
