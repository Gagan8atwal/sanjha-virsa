'use client';

import { useState } from 'react';

type Place = {
  id: string;
  number: string;
  name: string;
  punjabi: string;
  type: 'city' | 'heritage' | 'river' | 'district';
  x: string;
  y: string;
  era: string;
  summary: string;
  history: string;
  kids: string;
  words: string[];
};

const places: Place[] = [
  {
    id: 'lahore',
    number: '1',
    name: 'Lahore',
    punjabi: 'ਲਾਹੌਰ',
    type: 'city',
    x: '29%',
    y: '39%',
    era: 'Old Punjab · Pakistani Punjab',
    summary: 'A major historic and cultural capital of Punjab, known for literature, food, architecture, music, and memory.',
    history: 'Lahore has been one of Punjab’s most important cities for centuries. It was a major center under different empires and later became deeply connected with Punjabi literature, education, printing, food culture, and political life. For many families, Lahore represents the memory of undivided Punjab.',
    kids: 'Think of Lahore as a giant old storybook city: forts, food streets, poets, music, and families who carried its memories across the world.',
    words: ['Shehar — ਸ਼ਹਿਰ', 'Qila — ਕਿਲ੍ਹਾ', 'Yaad — ਯਾਦ'],
  },
  {
    id: 'amritsar',
    number: '2',
    name: 'Amritsar',
    punjabi: 'ਅੰਮ੍ਰਿਤਸਰ',
    type: 'heritage',
    x: '41%',
    y: '47%',
    era: 'Sikh Heritage · Indian Punjab',
    summary: 'A central Sikh and Punjabi heritage city, strongly associated with Sri Harmandir Sahib and community life.',
    history: 'Amritsar grew into one of the most important Sikh centers. It is associated with Sri Harmandir Sahib, sangat, langar, trade, arts, and the living rhythm of Punjabi religious and cultural life.',
    kids: 'Amritsar teaches us about prayer, seva, langar, respect, and how a city can become a home for millions of hearts.',
    words: ['Amrit — ਅੰਮ੍ਰਿਤ', 'Sangat — ਸੰਗਤ', 'Langar — ਲੰਗਰ'],
  },
  {
    id: 'nankana-sahib',
    number: '3',
    name: 'Nankana Sahib',
    punjabi: 'ਨਨਕਾਣਾ ਸਾਹਿਬ',
    type: 'heritage',
    x: '34%',
    y: '31%',
    era: 'Guru Nanak Dev Ji · Pakistani Punjab',
    summary: 'Birthplace of Guru Nanak Dev Ji and a key Sikh heritage place.',
    history: 'Nankana Sahib is known as the birthplace of Guru Nanak Dev Ji. It holds deep significance for Sikhs and for Punjabi heritage because Guru Nanak’s message of truth, humility, equality, and remembrance began from this soil.',
    kids: 'This place reminds children that one honest voice can guide generations.',
    words: ['Guru — ਗੁਰੂ', 'Sach — ਸੱਚ', 'Nimrata — ਨਿਮਰਤਾ'],
  },
  {
    id: 'multan',
    number: '4',
    name: 'Multan',
    punjabi: 'ਮੁਲਤਾਨ',
    type: 'city',
    x: '18%',
    y: '66%',
    era: 'Ancient City · Pakistani Punjab',
    summary: 'An ancient city known for saints, crafts, heat, trade, and deep history.',
    history: 'Multan is one of the old cities of the region and has been connected with trade, spirituality, crafts, and many layers of history. It is often remembered for shrines, bazaars, heat, and old Punjabi-Seraiki cultural memory.',
    kids: 'Multan is like an old treasure chest: saints, markets, colors, mangoes, and stories from long ago.',
    words: ['Purana — ਪੁਰਾਣਾ', 'Bazaar — ਬਜ਼ਾਰ', 'Rang — ਰੰਗ'],
  },
  {
    id: 'patiala',
    number: '5',
    name: 'Patiala',
    punjabi: 'ਪਟਿਆਲਾ',
    type: 'city',
    x: '62%',
    y: '66%',
    era: 'Malwa · Indian Punjab',
    summary: 'Known for royal history, music, clothing styles, language flavor, and Malwa identity.',
    history: 'Patiala is associated with princely history, music traditions, architecture, clothing styles, and Malwa culture. It carries a strong place in Punjabi memory through language, arts, and regional identity.',
    kids: 'Patiala teaches how clothing, music, speech, and city history all become part of culture.',
    words: ['Malwa — ਮਾਲਵਾ', 'Sangeet — ਸੰਗੀਤ', 'Pagri — ਪੱਗੜੀ'],
  },
  {
    id: 'ravi',
    number: '6',
    name: 'Ravi River',
    punjabi: 'ਰਾਵੀ ਦਰਿਆ',
    type: 'river',
    x: '39%',
    y: '38%',
    era: 'Five Rivers',
    summary: 'One of the rivers connected with old Punjab geography and memory.',
    history: 'The Ravi is one of the rivers associated with Punjab’s five-river identity. Rivers shaped agriculture, settlement, travel, songs, and stories across the region.',
    kids: 'A river is not only water. It feeds fields, carries stories, and helps villages grow.',
    words: ['Darya — ਦਰਿਆ', 'Paani — ਪਾਣੀ', 'Khet — ਖੇਤ'],
  },
];

const typeStyles = {
  city: 'bg-red-800',
  heritage: 'bg-amber-600',
  river: 'bg-blue-700',
  district: 'bg-emerald-700',
};

export default function InteractivePunjabAtlas() {
  const [selectedId, setSelectedId] = useState('lahore');
  const selected = places.find((place) => place.id === selectedId) || places[0];

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] bg-white p-5 shadow-2xl ring-1 ring-black/10">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">Interactive Map</p>
              <h2 className="mt-1 text-3xl font-black">Tap a numbered pin</h2>
              <p className="mt-2 text-sm font-semibold text-slate-700">Numbers stay clean on the map. Full names and history open in the detail panel.</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-black">
              <span className="rounded-full bg-red-100 px-3 py-2 text-red-800">City</span>
              <span className="rounded-full bg-amber-100 px-3 py-2 text-amber-900">Heritage</span>
              <span className="rounded-full bg-blue-100 px-3 py-2 text-blue-800">River</span>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,#fde68a,transparent_22%),radial-gradient(circle_at_70%_70%,#bbf7d0,transparent_25%),linear-gradient(135deg,#fef3c7,#dcfce7)] p-4 ring-1 ring-amber-200">
            <svg viewBox="0 0 900 560" className="absolute inset-0 h-full w-full" role="img" aria-label="Illustrated Punjab atlas">
              <path d="M120 85 C220 35 350 45 438 88 C515 125 620 130 726 98 C789 79 835 117 817 188 C798 264 725 291 696 365 C665 446 570 503 455 489 C347 476 297 416 210 416 C111 416 64 338 96 260 C122 197 60 137 120 85 Z" fill="#facc15" opacity="0.28" />
              <path d="M152 126 C244 84 349 96 420 138 C486 177 561 187 645 159 C716 135 760 165 742 225 C722 292 655 313 626 377 C598 438 514 475 423 459 C337 444 303 392 224 392 C145 392 110 328 135 270 C158 215 98 151 152 126 Z" fill="#16a34a" opacity="0.24" />
              <path d="M139 115 C245 70 377 74 459 132 C547 195 653 158 734 141" fill="none" stroke="#2563eb" strokeWidth="9" strokeLinecap="round" opacity="0.72" />
              <path d="M184 205 C297 170 383 188 470 235 C555 282 648 276 755 238" fill="none" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" opacity="0.62" />
              <path d="M145 307 C250 277 356 304 455 352 C558 402 666 393 786 348" fill="none" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" opacity="0.58" />
              <path d="M350 55 C326 135 330 210 358 286 C384 356 370 430 342 512" fill="none" stroke="#7f1d1d" strokeWidth="4" strokeDasharray="12 12" opacity="0.5" />
            </svg>

            {places.map((place) => (
              <button
                key={place.id}
                onClick={() => setSelectedId(place.id)}
                className={`absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-base font-black text-white shadow-xl ring-4 transition hover:scale-110 ${typeStyles[place.type]} ${selectedId === place.id ? 'ring-slate-950 scale-110' : 'ring-white/80'}`}
                style={{ left: place.x, top: place.y }}
                aria-label={`Open ${place.name} details`}
              >
                {place.number}
              </button>
            ))}

            <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] bg-white/90 p-4 shadow-xl backdrop-blur md:right-auto md:max-w-md">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Clean Map Rule</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">The map only shows numbered pins. The selected place opens details on the side.</p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] bg-[#24160f] p-6 text-white shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300">Selected Place</p>
              <h2 className="mt-3 text-4xl font-black">{selected.name}</h2>
              <p className="mt-1 text-3xl font-black text-amber-200">{selected.punjabi}</p>
            </div>
            <div className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-black text-white ${typeStyles[selected.type]}`}>{selected.number}</div>
          </div>

          <p className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-amber-100 ring-1 ring-white/10">{selected.era}</p>
          <p className="mt-5 text-lg font-bold leading-8 text-white">{selected.summary}</p>

          <div className="mt-6 rounded-3xl bg-white p-5 text-slate-950">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">History</p>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">{selected.history}</p>
          </div>

          <div className="mt-4 rounded-3xl bg-amber-100 p-5 text-slate-950">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-900">For Kids</p>
            <p className="mt-3 text-sm font-black leading-7">{selected.kids}</p>
          </div>

          <div className="mt-4 rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">Words</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {selected.words.map((word) => (
                <span key={word} className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-950">{word}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
