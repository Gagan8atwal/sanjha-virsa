'use client';

import { useMemo, useState } from 'react';

type Writer = {
  id: string;
  name: string;
  punjabi: string;
  era: string;
  tradition: 'Classical' | 'Spiritual' | 'Modern' | 'Progressive';
  form: string;
  region: string;
  summary: string;
  themes: string[];
  legacy: string;
};

const writers: Writer[] = [
  {
    id: 'waris-shah',
    name: 'Waris Shah',
    punjabi: 'ਵਾਰਿਸ ਸ਼ਾਹ',
    era: '18th century',
    tradition: 'Classical',
    form: 'Qissa poetry',
    region: 'Jandiala Sher Khan, Punjab',
    summary: 'Waris Shah gave the Heer-Ranjha tradition its most celebrated literary form, combining romance, social observation, humor, sorrow, and a wide portrait of Punjabi life.',
    themes: ['Love and separation', 'Village society', 'Human dignity', 'Social criticism'],
    legacy: 'His Heer remains a central work of Punjabi literature across borders and scripts.',
  },
  {
    id: 'bulleh-shah',
    name: 'Bulleh Shah',
    punjabi: 'ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ',
    era: '17th–18th century',
    tradition: 'Spiritual',
    form: 'Kafi',
    region: 'Kasur, Punjab',
    summary: 'Bulleh Shah used direct Punjabi verse to question pride, division, empty ritual, and social hierarchy while emphasizing inner truth and spiritual love.',
    themes: ['Inner search', 'Equality', 'Love beyond labels', 'Moral courage'],
    legacy: 'His kafis continue through oral performance, classical singing, folk music, and contemporary interpretation.',
  },
  {
    id: 'bhai-vir-singh',
    name: 'Bhai Vir Singh',
    punjabi: 'ਭਾਈ ਵੀਰ ਸਿੰਘ',
    era: '1872–1957',
    tradition: 'Modern',
    form: 'Poetry, novels, scholarship',
    region: 'Amritsar, Punjab',
    summary: 'Bhai Vir Singh helped shape modern Punjabi literary prose and poetry while contributing to Sikh scholarship, publishing, education, and cultural renewal.',
    themes: ['Spiritual reflection', 'Nature', 'History', 'Cultural renewal'],
    legacy: 'He is widely regarded as a foundational figure in modern Punjabi literature.',
  },
  {
    id: 'amrita-pritam',
    name: 'Amrita Pritam',
    punjabi: 'ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ',
    era: '1919–2005',
    tradition: 'Modern',
    form: 'Poetry and fiction',
    region: 'Gujranwala and Delhi',
    summary: 'Amrita Pritam wrote with exceptional emotional clarity about Partition, women’s experience, memory, love, displacement, and personal freedom.',
    themes: ['Partition', 'Women’s voice', 'Love and loss', 'Freedom'],
    legacy: 'Her work became one of the most internationally recognized bodies of Punjabi writing.',
  },
  {
    id: 'nanak-singh',
    name: 'Nanak Singh',
    punjabi: 'ਨਾਨਕ ਸਿੰਘ',
    era: '1897–1971',
    tradition: 'Modern',
    form: 'Novel and social fiction',
    region: 'Punjab',
    summary: 'Nanak Singh expanded the Punjabi novel as a vehicle for social realism, reform, family conflict, conscience, and the pressures of a changing society.',
    themes: ['Social reform', 'Family life', 'Justice', 'Moral responsibility'],
    legacy: 'His large body of fiction helped establish the modern Punjabi novel for a broad readership.',
  },
  {
    id: 'shiv-kumar-batalvi',
    name: 'Shiv Kumar Batalvi',
    punjabi: 'ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ',
    era: '1936–1973',
    tradition: 'Modern',
    form: 'Lyric poetry',
    region: 'Sialkot district and Batala',
    summary: 'Shiv Kumar Batalvi transformed longing, youth, beauty, grief, and separation into intensely musical Punjabi verse.',
    themes: ['Longing', 'Youth and mortality', 'Separation', 'Beauty'],
    legacy: 'His lyrical voice remains deeply present in Punjabi recitation and music.',
  },
  {
    id: 'pash',
    name: 'Pash',
    punjabi: 'ਪਾਸ਼',
    era: '1950–1988',
    tradition: 'Progressive',
    form: 'Revolutionary poetry',
    region: 'Talwandi Salem, Punjab',
    summary: 'Pash wrote urgent, disciplined poetry about labor, freedom, political violence, complacency, and the danger of losing the will to imagine change.',
    themes: ['Freedom', 'Labor', 'Resistance', 'Human agency'],
    legacy: 'His poetry remains influential in Punjabi political, student, and literary culture.',
  },
];

const traditions = ['All', 'Classical', 'Spiritual', 'Modern', 'Progressive'] as const;

export default function PunjabiLiteratureMuseum() {
  const [tradition, setTradition] = useState<(typeof traditions)[number]>('All');
  const [selected, setSelected] = useState<Writer>(writers[0]);
  const visible = useMemo(
    () => tradition === 'All' ? writers : writers.filter((writer) => writer.tradition === tradition),
    [tradition],
  );

  function chooseTradition(value: (typeof traditions)[number]) {
    setTradition(value);
    const first = value === 'All' ? writers[0] : writers.find((writer) => writer.tradition === value);
    if (first) setSelected(first);
  }

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#293f36] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f0cc83]">Punjabi Literature Museum</p>
            <h1 className="mt-5 max-w-[12ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Meet the voices that carried Punjab through poetry and prose.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72">Explore major writers, literary traditions, recurring themes, and the cultural memory preserved in Punjabi words.</p>
          </div>
          <LiteratureArt writer={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Filter writers by tradition">
          {traditions.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => chooseTradition(value)}
              className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${tradition === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}
            >
              {value}
            </button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((writer) => (
              <button
                key={writer.id}
                type="button"
                onClick={() => setSelected(writer)}
                className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === writer.id ? 'border-[#293f36] bg-[#f4f1df] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}
              >
                <LiteratureArt writer={writer} compact />
                <div>
                  <p className="font-serif text-xl font-bold">{writer.name}</p>
                  <p className="mt-1 font-black text-[#6f1d1b]">{writer.punjabi}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{writer.tradition}</p>
                </div>
              </button>
            ))}
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
            <div className="grid gap-8 bg-[#eee7d7] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10">
              <div>
                <p className="sv-kicker">{selected.region}</p>
                <h2 className="mt-3 font-serif text-5xl font-bold tracking-[-0.03em]">{selected.name}</h2>
                <p className="mt-2 text-3xl font-black text-[#6f1d1b]">{selected.punjabi}</p>
                <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.summary}</p>
              </div>
              <LiteratureArt writer={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">Recurring themes</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {selected.themes.map((theme, index) => (
                    <div key={theme} className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4">
                      <span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span>
                      <p className="mt-2 font-serif text-xl font-bold">{theme}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-black/10 pt-8">
                  <p className="sv-kicker">Why this voice matters</p>
                  <p className="mt-4 text-lg font-medium leading-9 text-[#4f473f]">{selected.legacy}</p>
                </div>
              </section>

              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Era</p>
                  <p className="mt-4 font-serif text-2xl font-bold">{selected.era}</p>
                </div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6">
                  <p className="sv-kicker">Primary form</p>
                  <p className="mt-4 font-serif text-2xl font-bold">{selected.form}</p>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function LiteratureArt({ writer, compact = false, large = false }: { writer: Writer; compact?: boolean; large?: boolean }) {
  const className = compact
    ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]'
    : large
      ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl'
      : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';

  const accent = writer.tradition === 'Spiritual' ? '#6f1d1b' : writer.tradition === 'Progressive' ? '#8e2622' : writer.tradition === 'Classical' ? '#8a5b1f' : '#293f36';

  return (
    <svg viewBox="0 0 420 320" role="img" aria-label={`${writer.name} literary illustration`} className={className}>
      <rect width="420" height="320" rx="24" fill="#f5e7ca" />
      <circle cx="342" cy="54" r="28" fill="#d99a22" />
      <path d="M0 270C100 232 210 238 308 278C358 298 392 292 420 280V320H0V270Z" fill="#d8bd7b" />
      <path d="M78 94c48-16 94-10 132 18v150c-38-28-84-34-132-18V94Z" fill="#fffdf8" stroke={accent} strokeWidth="9" />
      <path d="M342 94c-48-16-94-10-132 18v150c38-28 84-34 132-18V94Z" fill="#fff8e8" stroke={accent} strokeWidth="9" />
      <path d="M210 112v150" stroke={accent} strokeWidth="7" />
      <path d="M102 126h76M102 152h88M102 178h68M242 126h76M230 152h88M250 178h68" stroke="#8a8177" strokeWidth="6" strokeLinecap="round" />
      <path d="M274 66c18 0 32 14 32 32 0 12-6 22-15 28l-4 25h-26l-4-25c-9-6-15-16-15-28 0-18 14-32 32-32Z" fill={accent} opacity="0.92" />
      <path d="M260 100h28" stroke="#f5e7ca" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
