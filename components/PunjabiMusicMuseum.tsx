'use client';

import { useMemo, useState } from 'react';

type Instrument = {
  id: string;
  name: string;
  punjabi: string;
  family: 'Percussion' | 'Strings' | 'Wind' | 'Rhythm';
  region: string;
  history: string;
  sound: string;
  usedIn: string[];
};

const instruments: Instrument[] = [
  { id: 'dhol', name: 'Dhol', punjabi: 'ਢੋਲ', family: 'Percussion', region: 'Across Punjab', history: 'The dhol is a double-headed barrel drum central to Punjabi celebration, harvest, processions, bhangra, and folk performance.', sound: 'Deep bass from one side and a sharper response from the other create the driving Punjabi rhythm.', usedIn: ['Bhangra', 'Weddings', 'Vaisakhi', 'Processions'] },
  { id: 'tumbi', name: 'Tumbi', punjabi: 'ਤੂੰਬੀ', family: 'Strings', region: 'Punjab folk tradition', history: 'The tumbi is a small one-string instrument known for its bright, repeating melodic pulse in Punjabi folk music.', sound: 'A sharp, plucked tone that cuts clearly through rhythm and singing.', usedIn: ['Folk songs', 'Bhangra', 'Solo accompaniment', 'Modern Punjabi music'] },
  { id: 'algoza', name: 'Algoza', punjabi: 'ਅਲਗੋਜ਼ਾ', family: 'Wind', region: 'Rural Punjab and Sindh', history: 'The algoza uses two wooden flutes played together, usually with one carrying melody and the other maintaining a drone or rhythm.', sound: 'Breathy twin-flute sound with circular-breathing patterns and continuous motion.', usedIn: ['Pastoral music', 'Folk dance', 'Storytelling', 'Rural performance'] },
  { id: 'chimta', name: 'Chimta', punjabi: 'ਚਿਮਟਾ', family: 'Rhythm', region: 'Across Punjab', history: 'The chimta developed from a metal tong and became a rhythmic folk instrument with attached jingling discs.', sound: 'Metallic claps and bright jingles that reinforce beat and tempo.', usedIn: ['Folk singing', 'Religious gatherings', 'Bhangra', 'Street performance'] },
  { id: 'sarangi', name: 'Sarangi', punjabi: 'ਸਾਰੰਗੀ', family: 'Strings', region: 'North India and Punjab', history: 'The sarangi is a bowed instrument valued for its vocal quality and its role in classical, devotional, and folk traditions.', sound: 'Rich, expressive bowed tones capable of closely following the human voice.', usedIn: ['Folk ballads', 'Classical music', 'Devotional music', 'Narrative singing'] },
  { id: 'bugchu', name: 'Bugchu', punjabi: 'ਬੁੱਗਚੂ', family: 'Rhythm', region: 'Punjab folk tradition', history: 'The bugchu is a compact tension instrument played by pulling a cord while squeezing the body to change pitch.', sound: 'A bouncing, elastic twang used for comic, rhythmic, and energetic accents.', usedIn: ['Bhangra', 'Folk theatre', 'Dance', 'Rhythmic accompaniment'] },
  { id: 'dhad', name: 'Dhad', punjabi: 'ਢੱਡ', family: 'Percussion', region: 'Punjab ballad tradition', history: 'The dhad is a small hourglass drum associated with dhadi performance, heroic ballads, and historical narration.', sound: 'Tight, urgent beats that support forceful storytelling and singing.', usedIn: ['Dhadi vaaran', 'Historical ballads', 'Community gatherings', 'Narrative performance'] },
  { id: 'ektara', name: 'Ektara', punjabi: 'ਇਕਤਾਰਾ', family: 'Strings', region: 'Punjab and wider South Asia', history: 'The ektara is a one-string drone instrument used by folk singers, mystics, and travelling performers.', sound: 'A steady plucked drone that supports voice, poetry, and spiritual repetition.', usedIn: ['Sufi poetry', 'Folk singing', 'Mystic traditions', 'Solo performance'] },
];

export default function PunjabiMusicMuseum() {
  const [family, setFamily] = useState<'All' | Instrument['family']>('All');
  const [selected, setSelected] = useState(instruments[0]);
  const visible = useMemo(() => family === 'All' ? instruments : instruments.filter((item) => item.family === family), [family]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#5b3d76] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Music Museum</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Explore the instruments that shape Punjabi sound.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/68">Open one instrument at a time and learn its construction, sound, history, and cultural role.</p>
          </div>
          <InstrumentArt instrument={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'Percussion', 'Strings', 'Wind', 'Rhythm'] as const).map((value) => (
            <button key={value} onClick={() => setFamily(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${family === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{value}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((instrument) => (
              <button key={instrument.id} onClick={() => setSelected(instrument)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === instrument.id ? 'border-[#5b3d76] bg-[#f6f1fa] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <InstrumentArt instrument={instrument} compact />
                <div>
                  <p className="font-serif text-xl font-bold">{instrument.name}</p>
                  <p className="mt-1 font-black text-[#6f1d1b]">{instrument.punjabi}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{instrument.family}</p>
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
              <InstrumentArt instrument={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">How it sounds</p>
                <p className="mt-4 text-lg font-medium leading-9 text-[#4f473f]">{selected.sound}</p>
                <div className="mt-8 border-t border-black/10 pt-8">
                  <p className="sv-kicker">Used in</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selected.usedIn.map((use, index) => (
                      <div key={use} className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4">
                        <span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span>
                        <p className="mt-2 font-serif text-xl font-bold">{use}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Instrument family</p><p className="mt-4 font-serif text-2xl font-bold">{selected.family}</p></div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">Region</p><p className="mt-4 font-serif text-2xl font-bold">{selected.region}</p></div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function InstrumentArt({ instrument, compact = false, large = false }: { instrument: Instrument; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  return (
    <svg viewBox="0 0 420 320" role="img" aria-label={`${instrument.name} illustration`} className={className}>
      <rect width="420" height="320" rx="24" fill="#f5e7ca" />
      <path d="M0 270C100 225 200 236 292 274C350 298 388 292 420 274V320H0V270Z" fill="#d8bd7b" />
      {instrument.id === 'dhol' && <><path d="M120 92h180l28 138H92l28-138Z" fill="#a85d2a" stroke="#5c2c12" strokeWidth="8"/><ellipse cx="210" cy="92" rx="90" ry="28" fill="#fff3d9" stroke="#5c2c12" strokeWidth="8"/><ellipse cx="210" cy="230" rx="118" ry="30" fill="#fff3d9" stroke="#5c2c12" strokeWidth="8"/><path d="M130 112 286 220M290 112 134 220" stroke="#d99a22" strokeWidth="8"/></>}
      {instrument.id === 'tumbi' && <><circle cx="180" cy="220" r="64" fill="#b56a34" stroke="#6f1d1b" strokeWidth="8"/><path d="M180 156V54" stroke="#5c2c12" strokeWidth="16" strokeLinecap="round"/><path d="M180 64h90" stroke="#5c2c12" strokeWidth="12" strokeLinecap="round"/><path d="M178 62 216 220" stroke="#d99a22" strokeWidth="5"/><circle cx="270" cy="64" r="12" fill="#6f1d1b"/></>}
      {instrument.id === 'algoza' && <><path d="M145 58v190M245 58v190" stroke="#b56a34" strokeWidth="28" strokeLinecap="round"/><path d="M145 92h1M145 126h1M145 160h1M245 92h1M245 126h1M245 160h1" stroke="#5c2c12" strokeWidth="12" strokeLinecap="round"/><path d="M128 52h34M228 52h34" stroke="#6f1d1b" strokeWidth="8"/></>}
      {instrument.id === 'chimta' && <><path d="M150 52c42 74 42 142 0 216M270 52c-42 74-42 142 0 216" stroke="#6f675f" strokeWidth="14" fill="none" strokeLinecap="round"/><g fill="#d99a22">{[92,132,172,212].map((y)=><><circle key={`l${y}`} cx="168" cy={y} r="14"/><circle key={`r${y}`} cx="252" cy={y} r="14"/></>)}</g></>}
      {instrument.id === 'sarangi' && <><path d="M170 82h80l24 156H146l24-156Z" fill="#8a5b1f" stroke="#5c2c12" strokeWidth="8"/><circle cx="210" cy="186" r="34" fill="#f5e7ca"/><path d="M210 82V42M188 92v140M210 92v140M232 92v140" stroke="#d99a22" strokeWidth="5"/><path d="M120 220c65-44 130-50 195-18" stroke="#5c2c12" strokeWidth="9" fill="none"/></>}
      {instrument.id === 'bugchu' && <><path d="M140 92h140l-25 144H165L140 92Z" fill="#b56a34" stroke="#6f1d1b" strokeWidth="8"/><ellipse cx="210" cy="92" rx="70" ry="22" fill="#fff3d9" stroke="#6f1d1b" strokeWidth="8"/><path d="M210 92v-48" stroke="#5c2c12" strokeWidth="9"/><path d="M210 44h64" stroke="#5c2c12" strokeWidth="7"/><circle cx="278" cy="44" r="10" fill="#d99a22"/></>}
      {instrument.id === 'dhad' && <><path d="M145 76c38 24 92 24 130 0-18 52-18 116 0 168-38-24-92-24-130 0 18-52 18-116 0-168Z" fill="#a85d2a" stroke="#6f1d1b" strokeWidth="8"/><ellipse cx="210" cy="76" rx="66" ry="22" fill="#fff3d9" stroke="#6f1d1b" strokeWidth="8"/><ellipse cx="210" cy="244" rx="66" ry="22" fill="#fff3d9" stroke="#6f1d1b" strokeWidth="8"/></>}
      {instrument.id === 'ektara' && <><circle cx="170" cy="220" r="58" fill="#b56a34" stroke="#6f1d1b" strokeWidth="8"/><path d="M170 162V56" stroke="#5c2c12" strokeWidth="16" strokeLinecap="round"/><path d="M170 62h100" stroke="#5c2c12" strokeWidth="12" strokeLinecap="round"/><path d="M172 62 210 220" stroke="#d99a22" strokeWidth="5"/><circle cx="270" cy="62" r="12" fill="#6f1d1b"/></>}
    </svg>
  );
}
