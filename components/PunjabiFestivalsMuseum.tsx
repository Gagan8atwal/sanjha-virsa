'use client';

import { useMemo, useState } from 'react';

type Festival = {
  id: string;
  name: string;
  punjabi: string;
  type: 'Seasonal' | 'Religious' | 'Folk';
  season: string;
  region: string;
  meaning: string;
  traditions: string[];
  foods: string[];
};

const festivals: Festival[] = [
  { id: 'vaisakhi', name: 'Vaisakhi', punjabi: 'ਵਿਸਾਖੀ', type: 'Seasonal', season: 'April', region: 'Across Punjab', meaning: 'Vaisakhi marks the harvest season and carries major Sikh historical importance through the creation of the Khalsa in 1699.', traditions: ['Harvest fairs', 'Gurdwara gatherings', 'Nagar kirtan', 'Bhangra and community meals'], foods: ['Kadhi chawal', 'Kheer', 'Lassi', 'Seasonal harvest dishes'] },
  { id: 'lohri', name: 'Lohri', punjabi: 'ਲੋਹੜੀ', type: 'Seasonal', season: 'January', region: 'Across Punjab', meaning: 'Lohri is a winter folk celebration centered on fire, songs, community, and the changing agricultural season.', traditions: ['Bonfire gathering', 'Folk songs', 'Family celebration', 'Offering seasonal foods to the fire'], foods: ['Rewari', 'Gajak', 'Peanuts', 'Popcorn'] },
  { id: 'hola-mohalla', name: 'Hola Mohalla', punjabi: 'ਹੋਲਾ ਮਹੱਲਾ', type: 'Religious', season: 'March', region: 'Anandpur Sahib', meaning: 'Hola Mohalla is a Sikh festival of martial skill, courage, discipline, service, and community life.', traditions: ['Gatka demonstrations', 'Processions', 'Kirtan', 'Langar'], foods: ['Langar meals', 'Kheer', 'Dal', 'Roti'] },
  { id: 'gurpurab', name: 'Gurpurab', punjabi: 'ਗੁਰਪੁਰਬ', type: 'Religious', season: 'Various dates', region: 'Worldwide Sikh communities', meaning: 'Gurpurabs commemorate important events connected with the Sikh Gurus and are observed through worship, reflection, seva, and community.', traditions: ['Akhand path', 'Kirtan', 'Nagar kirtan', 'Seva and langar'], foods: ['Karah prasad', 'Langar', 'Kheer', 'Tea and simple community meals'] },
  { id: 'teeyan', name: 'Teeyan', punjabi: 'ਤੀਆਂ', type: 'Folk', season: 'Monsoon', region: 'Punjab villages and diaspora', meaning: 'Teeyan is a women-centered folk celebration associated with monsoon, songs, swings, giddha, friendship, and family visits.', traditions: ['Giddha', 'Boliyan', 'Decorated swings', 'Women’s gatherings'], foods: ['Kheer', 'Puri', 'Pakoras', 'Seasonal sweets'] },
  { id: 'basant', name: 'Basant', punjabi: 'ਬਸੰਤ', type: 'Seasonal', season: 'Spring', region: 'Historically Lahore and wider Punjab', meaning: 'Basant celebrates spring through yellow clothing, music, open-air gatherings, and historically kite flying in parts of Punjab.', traditions: ['Yellow clothing', 'Spring songs', 'Kite traditions', 'Outdoor fairs'], foods: ['Yellow rice', 'Sweets', 'Tea', 'Festival snacks'] },
  { id: 'maghi', name: 'Maghi', punjabi: 'ਮਾਘੀ', type: 'Religious', season: 'January', region: 'Muktsar and across Punjab', meaning: 'Maghi is closely associated with the memory of the Forty Liberated Ones and is observed through pilgrimage, remembrance, and community gatherings.', traditions: ['Historic remembrance', 'Gurdwara visits', 'Fairs', 'Community meals'], foods: ['Kheer', 'Khichdi', 'Roti', 'Langar'] },
];

export default function PunjabiFestivalsMuseum() {
  const [type, setType] = useState<'All' | Festival['type']>('All');
  const [selected, setSelected] = useState(festivals[0]);
  const visible = useMemo(() => type === 'All' ? festivals : festivals.filter((festival) => festival.type === type), [type]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#8a5b1f] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Festivals Museum</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Explore Punjab through seasons, faith, and community celebration.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">Open one festival at a time and learn its meaning, traditions, foods, and regional context.</p>
          </div>
          <FestivalArt festival={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'Seasonal', 'Religious', 'Folk'] as const).map((value) => (
            <button key={value} onClick={() => setType(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${type === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{value}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((festival) => (
              <button key={festival.id} onClick={() => setSelected(festival)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === festival.id ? 'border-[#8a5b1f] bg-[#fff8e8] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <FestivalArt festival={festival} compact />
                <div>
                  <p className="font-serif text-xl font-bold">{festival.name}</p>
                  <p className="mt-1 font-black text-[#6f1d1b]">{festival.punjabi}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{festival.type}</p>
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
                <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.meaning}</p>
              </div>
              <FestivalArt festival={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">Traditions</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {selected.traditions.map((tradition, index) => (
                    <div key={tradition} className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4">
                      <span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span>
                      <p className="mt-2 font-serif text-xl font-bold">{tradition}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-black/10 pt-8">
                  <p className="sv-kicker">Festival foods</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selected.foods.map((food) => (
                      <div key={food} className="rounded-2xl border border-black/10 bg-[#fffdf8] p-4 font-semibold">{food}</div>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Season</p><p className="mt-4 font-serif text-2xl font-bold">{selected.season}</p></div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">Festival type</p><p className="mt-4 font-serif text-2xl font-bold">{selected.type}</p></div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function FestivalArt({ festival, compact = false, large = false }: { festival: Festival; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  return (
    <svg viewBox="0 0 420 320" role="img" aria-label={`${festival.name} festival illustration`} className={className}>
      <rect width="420" height="320" rx="24" fill="#f5e7ca" />
      <circle cx="336" cy="58" r="28" fill="#d99a22" />
      <path d="M0 244C95 205 190 216 280 250C340 273 385 269 420 250V320H0V244Z" fill="#d8bd7b" />
      <path d="M0 278C95 248 190 258 286 286C344 303 388 298 420 286V320H0V278Z" fill="#315a45" />
      {festival.id === 'lohri' ? <><path d="M210 100c42 40 58 82 0 132-58-50-42-92 0-132Z" fill="#d66a2c"/><path d="M210 132c21 24 28 50 0 78-28-28-21-54 0-78Z" fill="#f2b23f"/><path d="M135 248l150-90M285 248l-150-90" stroke="#6f1d1b" strokeWidth="12" strokeLinecap="round"/></> : null}
      {festival.id === 'vaisakhi' ? <><path d="M76 246h268" stroke="#8a5b1f" strokeWidth="10"/><path d="M120 246V126M170 246V104M250 246V116M300 246V96" stroke="#d99a22" strokeWidth="12" strokeLinecap="round"/><path d="M115 130h10M165 108h10M245 120h10M295 100h10" stroke="#6f1d1b" strokeWidth="8"/></> : null}
      {festival.id === 'hola-mohalla' ? <><path d="M105 236h210" stroke="#1e3553" strokeWidth="10"/><path d="M150 236v-96M270 236v-96" stroke="#1e3553" strokeWidth="12"/><path d="M132 140h156" stroke="#d99a22" strokeWidth="10"/><path d="M185 236v-58h50v58" fill="#f5e7ca"/><path d="M320 104v132" stroke="#6f1d1b" strokeWidth="7"/><path d="M320 104l42 18-42 18Z" fill="#d99a22"/></> : null}
      {festival.id === 'gurpurab' || festival.id === 'maghi' ? <><rect x="105" y="150" width="210" height="88" fill="#fffdf8" stroke="#1e3553" strokeWidth="8"/><path d="M132 150v-42h24v42M264 150v-54h24v54" stroke="#1e3553" strokeWidth="10" strokeLinecap="round"/><path d="M92 148h236" stroke="#1e3553" strokeWidth="8"/><path d="M188 238v-58h44v58" fill="#d99a22"/></> : null}
      {festival.id === 'teeyan' ? <><path d="M105 110h210" stroke="#6f1d1b" strokeWidth="10"/><path d="M150 110v128M270 110v128" stroke="#8a5b1f" strokeWidth="10"/><path d="M172 110v78M248 110v78" stroke="#315a45" strokeWidth="6"/><path d="M158 188h104c-8 42-26 60-52 60s-44-18-52-60Z" fill="#d99a22"/><path d="M125 92c55-28 115-28 170 0" stroke="#315a45" strokeWidth="8" fill="none"/></> : null}
      {festival.id === 'basant' ? <><path d="M90 210 170 90l80 120-80 32-80-32Z" fill="#d99a22" stroke="#6f1d1b" strokeWidth="7"/><path d="M170 90v152M90 210h160" stroke="#6f1d1b" strokeWidth="5"/><path d="M250 210c48 6 72 28 74 66" stroke="#1e3553" strokeWidth="6" fill="none"/></> : null}
    </svg>
  );
}
