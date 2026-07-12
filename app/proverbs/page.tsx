'use client';

import { useMemo, useState } from 'react';

type Proverb = {
  id: string;
  punjabi: string;
  roman: string;
  meaning: string;
  lesson: string;
  category: 'Wisdom' | 'Work' | 'Relationships' | 'Character' | 'Community';
  symbol: 'lamp' | 'field' | 'bridge' | 'mirror' | 'circle' | 'tree' | 'scale' | 'well';
};

const proverbs: Proverb[] = [
  {
    id: 'drop-ocean',
    punjabi: 'ਬੂੰਦ ਬੂੰਦ ਨਾਲ ਸਾਗਰ ਭਰਦਾ ਹੈ।',
    roman: 'Boond boond naal saagar bharda hai.',
    meaning: 'An ocean is filled one drop at a time.',
    lesson: 'Small, steady efforts create large results. Progress does not need to be dramatic to be meaningful.',
    category: 'Work',
    symbol: 'well',
  },
  {
    id: 'deeds',
    punjabi: 'ਜੇਹੀ ਕਰਨੀ ਤੇਹੀ ਭਰਨੀ।',
    roman: 'Jehi karni tehi bharni.',
    meaning: 'As you act, so you must bear the result.',
    lesson: 'Actions carry consequences. Character is built through repeated choices, not words alone.',
    category: 'Character',
    symbol: 'scale',
  },
  {
    id: 'unity',
    punjabi: 'ਏਕਤਾ ਵਿੱਚ ਬਲ ਹੈ।',
    roman: 'Ekta vich bal hai.',
    meaning: 'There is strength in unity.',
    lesson: 'Families and communities become resilient when people coordinate, share responsibility, and stand together.',
    category: 'Community',
    symbol: 'circle',
  },
  {
    id: 'patience',
    punjabi: 'ਸਬਰ ਦਾ ਫਲ ਮਿੱਠਾ ਹੁੰਦਾ ਹੈ।',
    roman: 'Sabar da phal mitha hunda hai.',
    meaning: 'The fruit of patience is sweet.',
    lesson: 'Good outcomes often require time, restraint, and confidence in a longer process.',
    category: 'Wisdom',
    symbol: 'tree',
  },
  {
    id: 'knowledge',
    punjabi: 'ਵਿਦਿਆ ਧਨ ਸਭ ਧਨਾਂ ਤੋਂ ਉੱਤਮ ਹੈ।',
    roman: 'Vidya dhan sab dhanaan ton uttam hai.',
    meaning: 'The wealth of knowledge is greater than every other wealth.',
    lesson: 'Learning creates a capability that cannot easily be taken away and can benefit an entire lifetime.',
    category: 'Wisdom',
    symbol: 'lamp',
  },
  {
    id: 'respect',
    punjabi: 'ਜਿਹੜਾ ਬੀਜੇ ਸੋਈ ਵੱਢੇ।',
    roman: 'Jehra beeje soyi vaddhe.',
    meaning: 'One harvests what one plants.',
    lesson: 'Trust, respect, and opportunity grow from what we consistently put into relationships and work.',
    category: 'Relationships',
    symbol: 'field',
  },
  {
    id: 'listen',
    punjabi: 'ਇੱਕ ਹੱਥ ਨਾਲ ਤਾੜੀ ਨਹੀਂ ਵੱਜਦੀ।',
    roman: 'Ikk hath naal taari nahin vajdi.',
    meaning: 'A clap cannot sound with one hand.',
    lesson: 'Conflict and cooperation involve more than one side. Listen fully before judging responsibility.',
    category: 'Relationships',
    symbol: 'bridge',
  },
  {
    id: 'self-awareness',
    punjabi: 'ਆਪਣਾ ਮੂੰਹ ਸ਼ੀਸ਼ੇ ਵਿੱਚ ਵੇਖਣਾ ਚਾਹੀਦਾ ਹੈ।',
    roman: 'Aapna moonh sheeshe vich vekhna chaahida hai.',
    meaning: 'One should look at one’s own face in the mirror.',
    lesson: 'Self-examination should come before criticism of others. Humility makes correction possible.',
    category: 'Character',
    symbol: 'mirror',
  },
];

const categories = ['All', 'Wisdom', 'Work', 'Relationships', 'Character', 'Community'] as const;

export default function ProverbsPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [selected, setSelected] = useState<Proverb>(proverbs[0]);

  const visible = useMemo(
    () => category === 'All' ? proverbs : proverbs.filter((proverb) => proverb.category === category),
    [category],
  );

  function chooseCategory(value: (typeof categories)[number]) {
    setCategory(value);
    const first = value === 'All' ? proverbs[0] : proverbs.find((proverb) => proverb.category === value);
    if (first) setSelected(first);
  }

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#6f1d1b] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Proverbs Museum</p>
            <h1 className="mt-5 max-w-[12ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Everyday wisdom carried in a single line.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72">Explore Punjabi sayings through Gurmukhi, Roman pronunciation, plain English meaning, and the practical lesson behind each expression.</p>
          </div>
          <ProverbArt proverb={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Filter proverbs by category">
          {categories.map((value) => (
            <button key={value} type="button" onClick={() => chooseCategory(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${category === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>
              {value}
            </button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[23rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((proverb) => (
              <button key={proverb.id} type="button" onClick={() => setSelected(proverb)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === proverb.id ? 'border-[#6f1d1b] bg-[#fff2e6] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <ProverbArt proverb={proverb} compact />
                <div>
                  <p className="font-serif text-lg font-bold leading-7">{proverb.punjabi}</p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-[#6f675f]">{proverb.category}</p>
                </div>
              </button>
            ))}
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
            <div className="grid gap-8 bg-[#f0e5d4] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10">
              <div>
                <p className="sv-kicker">{selected.category}</p>
                <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">{selected.punjabi}</h2>
                <p className="mt-5 text-lg font-bold leading-8 text-[#6f1d1b]">{selected.roman}</p>
              </div>
              <ProverbArt proverb={selected} />
            </div>

            <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-2">
              <section className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6 md:p-8">
                <p className="sv-kicker">Plain meaning</p>
                <p className="mt-5 font-serif text-3xl font-bold leading-tight">{selected.meaning}</p>
              </section>
              <section className="rounded-[1.5rem] bg-[#201712] p-6 text-white md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Life lesson</p>
                <p className="mt-5 text-lg font-medium leading-9 text-white/78">{selected.lesson}</p>
              </section>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#293f36] text-white">
        <div className="sv-container grid gap-8 py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-18">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f0cc83]">How to use this museum</p>
            <h2 className="mt-4 font-serif text-4xl font-bold tracking-[-0.03em]">Read it, say it, explain it.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Read the Gurmukhi line', 'Practice the Roman pronunciation', 'Discuss the lesson with family'].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/12 bg-white/6 p-5">
                <span className="text-xs font-black text-[#f0cc83]">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-3 font-serif text-xl font-bold leading-7">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProverbArt({ proverb, compact = false, large = false }: { proverb: Proverb; compact?: boolean; large?: boolean }) {
  const className = compact
    ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]'
    : large
      ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl'
      : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';

  return (
    <svg viewBox="0 0 420 320" role="img" aria-label={`${proverb.category} proverb illustration`} className={className}>
      <rect width="420" height="320" rx="24" fill="#f5e7ca" />
      <circle cx="338" cy="56" r="28" fill="#d99a22" />
      <path d="M0 274C90 238 190 235 284 270C346 294 386 292 420 280V320H0V274Z" fill="#d8bd7b" />
      {proverb.symbol === 'lamp' && <><path d="M210 84c30 0 54 24 54 54 0 20-10 37-26 47l-8 46h-40l-8-46c-16-10-26-27-26-47 0-30 24-54 54-54Z" fill="#8a5b1f"/><path d="M188 246h44M194 264h32" stroke="#6f1d1b" strokeWidth="10" strokeLinecap="round"/><path d="M210 42v24M144 66l18 18M276 66l-18 18" stroke="#d99a22" strokeWidth="9" strokeLinecap="round"/></>}
      {proverb.symbol === 'field' && <><path d="M72 244 184 122M128 270 232 138M220 276 318 164" stroke="#8a5b1f" strokeWidth="12" strokeLinecap="round"/><path d="M92 202h64M160 210h72M232 222h68" stroke="#315a45" strokeWidth="9" strokeLinecap="round"/><circle cx="294" cy="92" r="34" fill="#d99a22"/></>}
      {proverb.symbol === 'bridge' && <><path d="M62 226c40-92 256-92 296 0" fill="none" stroke="#6f1d1b" strokeWidth="18" strokeLinecap="round"/><path d="M96 226v-40M156 226v-74M216 226v-82M276 226v-70M336 226v-36" stroke="#8a5b1f" strokeWidth="10"/><path d="M44 226h332" stroke="#293f36" strokeWidth="12" strokeLinecap="round"/></>}
      {proverb.symbol === 'mirror' && <><ellipse cx="210" cy="156" rx="76" ry="96" fill="#fffdf8" stroke="#8a5b1f" strokeWidth="16"/><circle cx="210" cy="132" r="34" fill="#c98a72"/><path d="M158 236c12-42 92-42 104 0" fill="#6f1d1b"/><path d="M210 252v34" stroke="#8a5b1f" strokeWidth="16" strokeLinecap="round"/></>}
      {proverb.symbol === 'circle' && <><circle cx="210" cy="156" r="86" fill="none" stroke="#293f36" strokeWidth="16"/><circle cx="210" cy="70" r="18" fill="#d99a22"/><circle cx="292" cy="156" r="18" fill="#6f1d1b"/><circle cx="210" cy="242" r="18" fill="#315a45"/><circle cx="128" cy="156" r="18" fill="#8a5b1f"/><path d="M150 96 270 216M270 96 150 216" stroke="#6f675f" strokeWidth="10" strokeLinecap="round"/></>}
      {proverb.symbol === 'tree' && <><path d="M210 270V150" stroke="#8a5b1f" strokeWidth="24" strokeLinecap="round"/><circle cx="210" cy="112" r="64" fill="#315a45"/><circle cx="160" cy="138" r="44" fill="#48775d"/><circle cx="260" cy="138" r="44" fill="#48775d"/><circle cx="188" cy="94" r="12" fill="#d99a22"/><circle cx="236" cy="126" r="12" fill="#d99a22"/></>}
      {proverb.symbol === 'scale' && <><path d="M210 74v164M142 98h136" stroke="#293f36" strokeWidth="14" strokeLinecap="round"/><path d="M142 98 98 190h88L142 98ZM278 98l-44 92h88l-44-92Z" fill="#fff8e8" stroke="#8a5b1f" strokeWidth="10" strokeLinejoin="round"/><path d="M168 252h84" stroke="#6f1d1b" strokeWidth="16" strokeLinecap="round"/></>}
      {proverb.symbol === 'well' && <><ellipse cx="210" cy="220" rx="90" ry="34" fill="#4f8ea8" stroke="#8a5b1f" strokeWidth="14"/><path d="M120 220v-84M300 220v-84M120 136h180" stroke="#8a5b1f" strokeWidth="14" strokeLinecap="round"/><path d="M210 136v72" stroke="#6f1d1b" strokeWidth="8"/><path d="M190 202h40v34h-40z" fill="#d99a22" stroke="#6f1d1b" strokeWidth="7"/><circle cx="210" cy="92" r="18" fill="#d99a22"/></>}
    </svg>
  );
}
